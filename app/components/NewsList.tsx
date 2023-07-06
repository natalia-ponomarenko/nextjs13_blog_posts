import Link from 'next/link';
import { store } from '@/redux/store';
import { Article } from '@/types/News';
import NewsCard from './NewsCard';

const NewsList: React.FC = () => {
  const news = store.getState().news.setNews;

  return (
    <div>
      {news && news.totalResults > 0 ? (
        news.articles.map((article: Article) => {
          return <NewsCard key={article.url} article={article} />
          // return (
          //   <Link
          //     key={item.url}
          //     href={item.url}
          //     target="_blank"
          //     rel="noopener"
          //   >
          //     <p>{item.title}</p>
          //   </Link>
          // );
        })
      ) : (
        <p>No relevant news found. Try changing the language or check the spelling</p>
      )}
    </div>
  );
};

export default NewsList;
