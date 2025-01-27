import { notFound } from 'next/navigation';
import { getNewsById } from '@/lib/news';

export default async function ImagePage({ params }) {
  const newsItemSlug = params.slug;
  const newsItem = await getNewsById(newsItemSlug);

  if (!newsItem) {
    notFound();
  }

  return (
    <div className="full-screen-image">
      <img src={`/images/news/${newsItem.image}`} alt={newsItem.title} />
    </div>
  );
}
