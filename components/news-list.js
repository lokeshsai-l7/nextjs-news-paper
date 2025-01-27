import Link from 'next/link';
export default function NewsList({ news }) {
  return (
    <ul className="news-list">
      {news.map((eachItem) => (
        <li key={eachItem.id}>
          <Link href={`/news/${eachItem.slug}`}>
            <img src={`/images/news/${eachItem.image}`} alt={eachItem.title} />
            <span>{eachItem.title}</span>
          </Link>
        </li>
      ))}
    </ul>
  );
}
