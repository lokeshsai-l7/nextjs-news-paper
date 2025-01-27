import { notFound } from 'next/navigation';
import Link from 'next/link';
import { getNewsById } from '@/lib/news';

export default async function Id({ params }) {
  const newsId = params.slug;
  const newsItem = await getNewsById(newsId);
  console.log(newsItem);
  if (!newsItem) {
    notFound();
  }
  return (
    <article className="news-article">
      <header>
        <Link href={`/news/${newsItem.slug}/image`}>
          <img src={`/images/news/${newsItem.image}`} alt={newsItem.title} />
        </Link>
        <h1>{newsItem.title}</h1>
        <time dateTime={newsItem.date}>{newsItem.date}</time>
      </header>
      <p>{newsItem.content}</p>
    </article>
  );
}
