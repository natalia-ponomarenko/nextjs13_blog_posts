import { getNewsData } from '@/api/news';
import NewsList from '../components/NewsComponents/NewsList';
import SearchBar from '../components/NewsComponents/SearchBar';
import { store } from '@/redux/store';
import { setNews } from '@/redux/features/news/news';
import { Filter } from '@/types/Filter';
import 'bulma/css/bulma.css';

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
    <>
      <h1 className="title has-text-centered is-size-3">News Page</h1>
      <SearchBar />
      <NewsList />
    </>
  );
};

export default News;
