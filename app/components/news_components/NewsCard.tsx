'use client';
import Link from 'next/link';
import { Article } from '@/types/News';
import Image from 'next/image';
import { formatDate } from '@/utils/helperFunctions';
import { useEffect, useState } from 'react';
import { Loader } from '../Loader/Loader';

const NewsCard: React.FC<{ article: Article }> = ({ article }) => {
  const [isLoaded, setIsLoaded] = useState<boolean>(false);
  const { title, publishedAt, urlToImage, url } = article;

  const fallbackImageSrc = '/images/no-image.jpg';

  const [src, setSrc] = useState<string>(urlToImage ? urlToImage : fallbackImageSrc);

  useEffect(() => {
    setSrc(src);
  }, [src]);

  return (
    <div className="column is-4-tablet is-3-desktop">
      <Link href={url} target="_blank" rel="noopener">
        <div className="card">
          <div style={{ height: '230px' }}>
            <Image
              src={src}
              onError={() => setSrc(fallbackImageSrc)}
              onLoadingComplete={(result) => {
                if (result.naturalWidth === 0) {
                  setSrc(fallbackImageSrc);
                }
              }}
              alt={title}
              width={0}
              height={0}
              priority={true}
              fetchPriority="high"
              sizes="100vw"
              style={{ width: '100%', height: '230px', objectFit: 'cover' }}
              onLoad={() => setIsLoaded(true)}
            />
            {!isLoaded && (
              <div className="loader-overlay Loader-overlay">
                <Loader />
              </div>
            )}
          </div>
          <div className="card-content">
            <p className="title is-size-6">{title}</p>
            <p className="text-center is-size-7">{formatDate(publishedAt)}</p>
          </div>
          <footer className="card-footer">
            <p className="card-footer-item has-text-grey">Read More</p>
          </footer>
        </div>
      </Link>
    </div>
  );
};

export default NewsCard;
