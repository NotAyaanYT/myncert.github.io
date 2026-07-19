import "server-only";

import { PrismaPg } from "@prisma/adapter-pg";
import { PrismaClient } from "@/generated/prisma/client";

const globalForPrisma = globalThis as unknown as {
  prisma?: PrismaClient;
};

function createPrismaClient() {
  const connectionString = process.env.DATABASE_URL;

  if (!connectionString) {
    // Return a placeholder that throws when used — allows static builds to succeed
    // Routes that actually use prisma at runtime must have DATABASE_URL set.
    return new Proxy({} as PrismaClient, {
      get(_, prop) {
        // Allow accessing $$type and other internal symbols without error
        if (typeof prop === 'symbol') return undefined;
        return () => {
          throw new Error(
            "DATABASE_URL is required to initialize Prisma. " +
            "Set it in your environment or .env file."
          );
        };
      },
    });
  }

  return new PrismaClient({
    adapter: new PrismaPg({ connectionString }),
  });
}

export const prisma = globalForPrisma.prisma ?? createPrismaClient();

if (process.env.NODE_ENV !== "production") {
  globalForPrisma.prisma = prisma;
}
