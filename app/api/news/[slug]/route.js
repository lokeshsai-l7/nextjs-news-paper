import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export default async function handler(req, res) {
  const { slug } = req.query;

  if (req.method === 'GET') {
    try {
      const newsItem = await prisma.news.findUnique({
        where: { slug },
      });

      if (!newsItem) {
        return res.status(404).json({ error: 'News item not found' });
      }

      res.status(200).json(newsItem);
    } catch (error) {
      res.status(500).json({ error: 'Internal server error' });
    }
  } else {
    res.setHeader('Allow', ['GET']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
