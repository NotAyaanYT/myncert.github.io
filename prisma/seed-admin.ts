import { prisma } from '@/db/prisma';
import { hashPassword } from '@/lib/auth';

async function main() {
  const email = 'admin@ncertsolutionshub.com';
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

  // Create admin user
  const user = await prisma.user.create({
    data: {
      email,
      name,
      passwordHash,
      role: 'admin',
      isActive: true,
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