import { store } from '@/redux/store';
import { Article, News } from '@/types/News';
import NewsCard from './NewsCard';
import Warning from '../ui/Warning';
import { removeDuplicateArticles } from '@/utils/helperFunctions';

const NewsList: React.FC = () => {
  const news = store.getState().news.news;
  const listOfNews = news?.articles;
  const IsListEmpty = news === null || news.totalResults === 0;

  const filteredNews = listOfNews?.filter((article: Article) => {
    return (
      article.title !== null &&
      article.url !== null
    );
  });

  let uniqueArrayOfNews;

  if(filteredNews) {
    uniqueArrayOfNews = removeDuplicateArticles(filteredNews);
  }


  return (
    <div className="columns is-flex-wrap-wrap mt-5 is-justify-content-center">
      {!IsListEmpty ? (
        uniqueArrayOfNews?.map((article: Article) => {
          return (
            <NewsCard
              key={article.url}
              article={article}
            />
          );
        })
      ) : (
        <Warning text=" No relevant news found. Try changing the language or check the spelling" />
      )}
    </div>
  );
};

export default NewsList;
