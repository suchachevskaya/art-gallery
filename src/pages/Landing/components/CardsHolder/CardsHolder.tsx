import { useSelector } from 'react-redux';
import { Card } from "@/components/Card/Card";
import "./CardsHolder.scss"
import { useState } from 'react';
import { getCards } from '@/store/selectors';
import { CardLink } from "@/components/Card/CardLink";



export function CardsHolder() {

  const { cards, isLoading, error } = useSelector(getCards);
  const [showAll, setShowAll] = useState(false);

  if (isLoading) return <p>Loading...</p>;

  if (error) return <p>Error loading cards</p>;

  const handleShowAll = () => {
    setShowAll(true);
  };

  const visibleCards = showAll ? cards : cards.slice(0, 3);

  return (
    <div className="cards-holder-wrapper">
      <div className="card-holder">
        {visibleCards.map((card) => (
          <CardLink key={card.id} cardId={card.id}>
            <Card
              key={card.id}
              title={card.title}
              author={card.artist_title}
              card={card}
            />
          </CardLink>

        ))}
      </div>

      {!showAll && (
        <button
          className="show-all-button"
          onClick={handleShowAll}
        >
          Показать все
        </button>
      )}
    </div>
  );
}
