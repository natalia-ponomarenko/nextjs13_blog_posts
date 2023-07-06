import Link from 'next/link';
import { Article } from '@/types/News';
import Image from 'next/image'

const formatDate = (dateString: string) => {
  const date = new Date(dateString);
  const month = date.getMonth() + 1;
  const day = date.getDate();
  const year = date.getFullYear();
  return `${month}/${day}/${year}`;
};

const NewsCard: React.FC<{ article: Article }> = ({ article }) => {
  const { title, author, publishedAt, urlToImage, url } = article;
  return (
    <div className="card">
      <div className="card-image">
        <figure className="image">
          {
            urlToImage ? (
              <Image src={urlToImage} alt={title} width={250} height={250} loading='lazy' />
              
              ) : (
                <p>No image</p>
              )
            }
        </figure>
      </div>
      <div className="card-content">
        <div className="media">
          <div className="media-content">
            <p className="title is-4">{title}</p>
            <p className="subtitle is-6">By {author}</p>
          </div>
        </div>
        <div className="content">
          <p>Published on {formatDate(publishedAt)}</p>
        </div>
      </div>
      <footer className="card-footer">
        <Link href={url} className="card-footer-item" target="_blank" rel="noopener">
            Read More
        </Link>
      </footer>
    </div>
  );
};

export default NewsCard;