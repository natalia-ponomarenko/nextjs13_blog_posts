import { News } from '@/types/News';
import Link from 'next/link';

type Props = {
  news: News;
};

const NewsList: React.FC<Props> = ({ news }) => {
  return (
    <div>
      {news?.articles?.map((item) => {
        return (
          <Link
            key={item.title}
            href={item.url}
            target="_blank"
            rel="noopener"
          >
            <p>{item.title}</p>
          </Link>
        );
      })}
    </div>
  );
};

export default NewsList;
