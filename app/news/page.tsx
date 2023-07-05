import { getNewsData } from '@/api/news';
import NewsList from '../components/NewsList';
import SearchBar from '../components/SearchBar';

const News: React.FC = async ({ searchParams }) => {
  const news = await getNewsData({
    query: searchParams.query || '',
  });

  return (
    <main className="section">
      <div className="container">
        <p>News Page</p>
        <SearchBar />
        <NewsList news={news} />
      </div>
    </main>
  );
};

export default News;

