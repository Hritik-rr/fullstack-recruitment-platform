import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  const user1 = await prisma.user.upsert({
    where: { email: 'rec@1.com' },
    update: {},
    create: {
      id: '1r',
      email: 'rec@1.com',
      password: 'p1',
      role: 'RECRUITER',
    },
  });

  const rec1 = await prisma.recruiter.upsert({
    where: { userId: user1.id }, // Use user.id as the foreign key
    update: {},
    create: {
      userId: user1.id, // Link the recruiter to the user
      companyName: 'abc',
      companyWebsite: 'abc.com',
      contactNumber: '2345098748',
    },
  });
  console.log({ user1, rec1 });
}

main()
  .catch((e) => {
    console.log(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
