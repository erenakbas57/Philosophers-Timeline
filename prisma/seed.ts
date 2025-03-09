
import { PrismaClient } from '@prisma/client';
import { philosophers } from '../src/lib/philosophers';

const prisma = new PrismaClient();

async function main() {
  console.log('Starting seed...');

  // Delete existing data
  await prisma.philosopher.deleteMany({});

  // Create philosophers
  for (const philosopher of philosophers) {
    const { id, ...philosopherData } = philosopher;
    
    await prisma.philosopher.create({
      data: {
        ...philosopherData,
      },
    });
  }

  console.log('Seed completed successfully!');
}

main()
  .catch((e) => {
    console.error('Error during seeding:', e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
