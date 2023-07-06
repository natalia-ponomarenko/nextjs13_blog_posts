import { getNewsData } from '@/api/news';
import NewsList from '../components/NewsList';
import SearchBar from '../components/SearchBar';
import { store } from '@/redux/store';
import { setNews } from '@/redux/features/news/news';
import { Filter } from '@/types/Filter';

type Props = {
  searchParams: Filter;
};

const News: React.FC<Props> = async ({ searchParams }) => {
  const news = await getNewsData({
    query: searchParams.query || '',
    language: searchParams.language || 'en',
  });

  store.dispatch(setNews(news));

  return (
    <main className="section">
      <div className="container">
        <p>News Page</p>
        <SearchBar />
        <NewsList />
      </div>
    </main>
  );
};

export default News;
