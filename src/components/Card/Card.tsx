import cardStyle from './Card.module.scss';
import favStyle from '@/components/FavIcon/FavIcon.module.scss';
import { ReactComponent as FavIcon } from '@/assets/FavIcon.svg?react';
import ArtImage from '../ArtImage/ArtImage';
import { DEFAULT_LQIP_PLACEHOLDER } from "@/constants/placeholders"

type ArtCardProps = {
  title: string;
  author: string;
  card: {
    thumbnail: {
      lqip: string;
      width: number;
      height: number;
      alt_text: string;
    } | null;
    date_display: string;
    image_id: string | null;
  }
};

export function Card({ title, author, card }: ArtCardProps) {
  return (
    <div className={cardStyle.card}>
      <ArtImage
        imageId={card.image_id}
        alt={card.thumbnail?.alt_text || 'Image'}
        lqip={card.thumbnail?.lqip || DEFAULT_LQIP_PLACEHOLDER}
        width={300}
        height={200}
      />
      <div className={cardStyle.content}>
        <div className={cardStyle.header}>
          <div>
            <h2 title={title} className={cardStyle.title}>{title}</h2>
            <p className={cardStyle.author}>{author}</p>
          </div>
          <button className={cardStyle.favButton} aria-label="Добавить в избранное">
            <div className={favStyle.svgWrapper}>
              <FavIcon className={favStyle.favIcon} />
            </div>
          </button>
        </div>
      </div>
    </div>
  )
}

