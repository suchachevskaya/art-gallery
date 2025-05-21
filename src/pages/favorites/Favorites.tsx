import "./favorites.scss"
import { useEffect, useState } from 'react';
import { Card } from '@/components/Card/Card';
import { getLSCards } from '@/utils/getLSCards';
import type { PreviewCard } from '@/store/types/CardType';
import { FAVORITES_LS_KEY } from '@/constants/constants';
import { CardLink } from '@/components/Card/CardLink';


export function Favorites() {
    const [favorites, setFavorites] = useState<PreviewCard[]>([]);

    useEffect(() => {
        const favoritesLS = getLSCards(FAVORITES_LS_KEY);

        setFavorites(favoritesLS);
    }, []);

    return (
        <div className="favorite-container">
            <h1 className='description-favorite'>Favorite cards</h1>
            {favorites.length === 0 ? (
                <p>У вас нет избранных карточек.</p>
            ) : (
                <div className="favorite-cards">
                    {favorites.map((card) => (
                        <CardLink key={card.id} cardHistory={card}>
                            <Card key={card.image_id} card={card} />
                        </CardLink>
                    ))}
                </div>
            )}
        </div>
    );

}
