// src/pages/Favorites/Favorites.tsx
import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '@/store';  // Импортируем RootState, если используем Redux
import { Card } from '@/components/Card/Card';  // Импортируем компонент Card

export function Favorites() {
    // Используем Redux для получения списка избранных, если это необходимо.
    const favoritesFromRedux = useSelector((state: RootState) => state.cards.favoriteCards);

    // Если используем localStorage, можно получить данные оттуда:
    const getFavoritesFromLocalStorage = () => {
        const favorites = localStorage.getItem('favorites');
        return favorites ? JSON.parse(favorites) : [];
    };

    const [favorites, setFavorites] = useState<any[]>([]);

    useEffect(() => {
        // Получаем избранное, если нужно из Redux или из localStorage
        const favoritesList = Array.isArray(favoritesFromRedux) && favoritesFromRedux.length > 0
            ? favoritesFromRedux
            : getFavoritesFromLocalStorage();

        setFavorites(favoritesList); // Устанавливаем в состояние
    }, [favoritesFromRedux]);

    return (
        <div className="favorites-page">
            <h1>Избранное</h1>
            {favorites.length === 0 ? (
                <p>У вас нет избранных карточек.</p>
            ) : (
                <div className="favorites-list">
                    {favorites.map((card) => (
                        <Card key={card.image_id} title={card.title} author={card.author} card={card} />
                    ))}
                </div>
            )}
        </div>
    );
}
