import { getNewsData } from '@/api/news';
import NewsList from '../components/news_components/NewsList';
import SearchBar from '../components/news_components/SearchBar';
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

  const newsList = store.getState().news.setNews;

  return (
    <>
      <h1 className="title has-text-centered is-size-3">News Page</h1>
      <SearchBar />
      <NewsList news={newsList} />
    </>
  );
};

export default News;
