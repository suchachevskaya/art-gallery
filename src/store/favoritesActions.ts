// src/store/favoritesActions.ts
import { AppDispatch } from './store'; // Импортируем тип AppDispatch
import { addToFavorites, removeFromFavorites } from './favoritesSlice';

interface Card {
    image_id: string | null;
    title: string;
    author: string;
}

export const toggleFavorite = (card: Card) => (dispatch: AppDispatch) => {
    const favorites = localStorage.getItem('favorites');
    const updatedFavorites: Card[] = favorites ? JSON.parse(favorites) : [];

    const isFavorite = updatedFavorites.some((item) => item.image_id === card.image_id);

    if (isFavorite) {
        // Если карточка уже в избранном, удаляем её
        const filteredFavorites = updatedFavorites.filter((item) => item.image_id !== card.image_id);
        localStorage.setItem('favorites', JSON.stringify(filteredFavorites)); // Обновляем в localStorage
        // Обновляем состояние Redux
        dispatch(removeFromFavorites(card.image_id as string));
    } else {
        // Если карточка не в избранном, добавляем её
        updatedFavorites.push(card);
        localStorage.setItem('favorites', JSON.stringify(updatedFavorites)); // Обновляем в localStorage
        // Обновляем состояние Redux
        dispatch(addToFavorites(card));
    }
};

