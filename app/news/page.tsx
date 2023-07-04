import { getNewsData } from '@/api/news';
import NewsList from '../components/NewsList';

const News: React.FC = async () => {
  const news = await getNewsData();
  console.log(news)
  return (
    <>
      <p>News Page</p>
      <NewsList news={news} />
    </>
  );
};

export default News;

