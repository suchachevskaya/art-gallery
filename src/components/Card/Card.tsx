import cardStyle from './Card.module.scss';
import favStyle from '@/components/FavIcon/FavIcon.module.scss';
import { ReactComponent as FavIcon } from '@/assets/FavIcon.svg?react';
import ArtImage from '../ArtImage/ArtImage';
import { DEFAULT_LQIP_PLACEHOLDER } from "@/constants/placeholders"
import {toggleFavorite} from "@/store/favoritesActions.ts";
import {useDispatch} from "react-redux";

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
  const dispatch = useDispatch();

  // Функция для получения избранных карточек из localStorage
  const getFavoritesFromLocalStorage = (): { image_id: string | null }[] => {
    const favorites = localStorage.getItem('favorites');
    return favorites ? JSON.parse(favorites) : [];
  };

  // Проверяем, является ли текущая карточка избранной
  const isFavorite = getFavoritesFromLocalStorage().some(
      (item) => item.image_id === card.image_id
  );

  const handleFavoriteToggle = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation(); // Чтобы не произошло навигации
    // Операция добавления/удаления карточки из избранного
    dispatch(toggleFavorite({ image_id: card.image_id, title, author }));
  };

  return (
      <div className={cardStyle.card} onClick={() => {/* Навигация на подробную карточку */}}>
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
            <button
                className={cardStyle.favButton}
                aria-label="Избранное"
                onClick={handleFavoriteToggle}
            >
              <div className={favStyle.svgWrapper}>
                <FavIcon
                    className={`${favStyle.favIcon} ${isFavorite ? favStyle.active : ''}`}
                />
              </div>
            </button>
          </div>
        </div>
      </div>
  );
}