import NewsList from '@/components/news-list';
import { getAllNews } from '@/lib/news';

export default async function News() {
  const news = await getAllNews();
  console.log(news);
  return (
    <>
      <h1>News Page</h1>
      <NewsList news={news} />
    </>
  );
}
