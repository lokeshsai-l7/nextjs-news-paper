import { DUMMY_NEWS } from '@/dummy-news';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export async function getAllNews() {
  return await prisma.news.findMany();
}

export async function getNewsById(newsId) {
  return await prisma.news.findFirst({
    where: {
      slug: newsId,
    },
  });
}

export async function getLatestNews() {
  return await prisma.news.findMany({
    orderBy: { date: 'desc' },
    take: 3,
  });
}

export async function getAvailableNewsYears() {
  const years = await prisma.news.findMany({
    select: {
      date: true,
    },
    distinct: ['date'],
  });

  // Extract years from the `date` field
  const uniqueYears = Array.from(
    new Set(years.map((record) => new Date(record.date).getFullYear()))
  );
  return uniqueYears;
}

export async function getAvailableNewsMonths(year) {
  const result = await prisma.$queryRaw`
    SELECT DISTINCT FORMAT(TRY_CONVERT(DATE, date, 120), 'MM') AS month
    FROM news
    WHERE YEAR(TRY_CONVERT(DATE, date, 120)) = ${year}`;

  return result.map((row) => row.month);
}

export async function getNewsForYear(year) {
  const news = await prisma.$queryRaw`
    SELECT * 
    FROM news 
    WHERE YEAR(TRY_CONVERT(DATE, date, 120)) = ${year}
    ORDER BY date DESC`;

  // Simulating delay (optional, for some reason)
  await new Promise((resolve) => setTimeout(resolve, 2000));

  return news;
}

export async function getNewsForYearAndMonth(year, month) {
  const news = await prisma.$queryRaw`
    SELECT * 
    FROM news 
    WHERE YEAR(TRY_CONVERT(DATE, date, 120)) = ${year}
      AND MONTH(TRY_CONVERT(DATE, date, 120)) = ${month}
    ORDER BY date DESC`;

  // Simulating delay (optional, for some reason)
  await new Promise((resolve) => setTimeout(resolve, 2000));

  return news;
}
