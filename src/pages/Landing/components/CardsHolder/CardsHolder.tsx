import { useSelector } from 'react-redux';
import { RootState } from '@/store/store';
import { Card } from "@/components/Card/Card";
import "./CardsHolder.scss"
import { useState } from 'react';



export function CardsHolder() {

  const { cards, isLoading, error } = useSelector((state: RootState) => state.cards);
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
          <Card
            key={card.id}
            title={card.title}
            author={card.artist_title}
            card={card}
          />
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
