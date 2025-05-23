import cardStyle from './Card.module.scss';
import { ArtImage } from '../ArtImage/ArtImage';
import { DEFAULT_LQIP_PLACEHOLDER } from "@/constants/placeholders"
import { toggleCard } from '@/utils/toggleCard';
import type { PreviewCard  } from '@/store/types/CardType';
import { useEffect, useState } from 'react';
import { FAVORITES_LS_KEY } from '@/constants/constants';
import { FavIcon } from '../FavIcon/FavIcon';
import { isInLS } from '@/utils/isInLS';

type ArtCardProps = {
  card: PreviewCard; 
};

export function Card({ card }: ArtCardProps) {

  const [isFavorite, setIsFavorite] = useState(false);

  useEffect(() => {
    setIsFavorite(isInLS(FAVORITES_LS_KEY, card));
  }, [card]); // обновляется при монтировании и смене карточки

  const handleFavoriteToggle = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation(); 
    // Операция добавления/удаления карточки из избранного
    toggleCard(card, FAVORITES_LS_KEY);
    setIsFavorite((prev) => !prev); 
  };

  return (
    <div className={cardStyle.card} onClick={() => {/* Навигация на подробную карточку */ }}>
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
            <h2 title={card.title} className={cardStyle.title}>{card.title}</h2>
            <p title={card.artist_title} className={cardStyle.author}>{card.artist_title}</p>
          </div>
          <button
            className={cardStyle.favButton}
            aria-label="Избранное"
            onClick={handleFavoriteToggle}
          >
            <FavIcon isFavorite={isFavorite}/>
          </button>
        </div>
      </div>
    </div>
  );
}