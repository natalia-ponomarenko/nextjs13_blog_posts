import { store } from '@/redux/store';
import { Article } from '@/types/News';
import NewsCard from './NewsCard';
import Warning from '../Warning';

const NewsList: React.FC = () => {
  const news = store.getState().news.setNews;
  const listOfNews = news?.articles.slice(0, 20);
  const IsListNotEmpty = news === null || news.totalResults === 0;

  return (
    <div className="columns is-flex-wrap-wrap mt-5 is-justify-content-center">
      {!IsListNotEmpty ? (
        listOfNews?.map((article: Article) => {
          return (
            <NewsCard
              key={article.url}
              article={article}
            />
          );
        })
      ) : (
        <Warning
          text=" No relevant news found. Try changing the language or check the
        spelling"
        />
      )}
    </div>
  );
};

export default NewsList;
