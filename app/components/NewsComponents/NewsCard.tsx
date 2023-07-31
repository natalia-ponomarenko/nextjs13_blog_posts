'use client';
import Link from 'next/link';
import { Article } from '@/types/News';
import Image from 'next/image';
import { formatDate, formatTitle } from '@/utils/helperFunctions';
import { useEffect, useState } from 'react';
import Loader from '../ui/Loader/Loader';
import '../../news/styles.scss';

const NewsCard: React.FC<{ article: Article }> = ({ article }) => {
  const [isLoaded, setIsLoaded] = useState<boolean>(false);
  const { title, publishedAt, urlToImage, url } = article;

  const fallbackImageSrc = '/images/no-image.jpg';

  const [src, setSrc] = useState<string>(
    urlToImage ? urlToImage : fallbackImageSrc
  );

  useEffect(() => {
    setSrc(src);
  }, [src]);

  return (
    <div className="column is-3-desktop is-4-tablet">
      <Link
        href={url}
        target="_blank"
        rel="noopener"
      >

        <div className="card">
          <div className="card_image_wrapper">
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
              className="card_image"
              unoptimized
              onLoad={() => setIsLoaded(true)}
            />
            {!isLoaded && (
              <div className="loader_overlay">
                <Loader />
              </div>
            )}
          </div>

          <div className="card-content">
            <p className="title is-size-6">{formatTitle(title)}</p>
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
