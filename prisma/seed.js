import { DUMMY_NEWS } from '../dummy-news.js';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  await Promise.all(
    DUMMY_NEWS.map(async (item) => {
      try {
        await prisma.news.create({
          data: item,
        });
      } catch (error) {
        if (error.code === 'P2002') {
          console.log(`item already exists.`);
        } else {
          console.error(`Error creating news`, error);
        }
      }
    })
  );
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
