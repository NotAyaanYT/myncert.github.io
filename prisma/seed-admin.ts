import { prisma } from '@/db/prisma';
import { hashPassword } from '@/lib/auth';

async function main() {
  const email = 'am7641991@gmail.com';
  const password = process.env.ADMIN_PASSWORD || 'admin123';
  const name = 'Admin';

  // Check if admin already exists
  const existing = await prisma.user.findUnique({ where: { email } });
  if (existing) {
    console.log('Admin user already exists');
    return;
  }

  // Hash password
  const passwordHash = await hashPassword(password);

  // Create admin role if not exists
  let adminRole = await prisma.role.findUnique({ where: { name: 'admin' } });
  if (!adminRole) {
    adminRole = await prisma.role.create({
      data: { name: 'admin', description: 'Administrator with full access' },
    });
  }

  // Create admin user
  const user = await prisma.user.create({
    data: {
      email,
      name,
      passwordHash,
      isActive: true,
      roles: {
        create: {
          role: { connect: { id: adminRole.id } },
        },
      },
    },
  });

  console.log('Admin user created:', { id: user.id, email: user.email, name: user.name });
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });