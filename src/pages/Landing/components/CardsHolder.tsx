import { Card } from "@/components/Card/Card";
import { useState } from "react";
import { CardLink } from "@/components/Card/CardLink";

const cardsData = [1, 2, 3, 4, 5, 6, 7, 8, 9];

export function CardsHolder() {

  const [showAll, setShowAll] = useState(false);

  const handleShowAll = () => {
    setShowAll(true);
  };
  
  const visibleCards = showAll ? cardsData : cardsData.slice(0, 3);

  return (
    <div className="cards-holder-wrapper">
      <div className="card-holder">
      {visibleCards.map((cardId, index, data) => (
          <CardLink key={index} cardId={cardId}>
            <Card
              key={index}
              title="The Starry Night"
              author="Vincent van Gogh"
              imageUrl="https://upload.wikimedia.org/wikipedia/commons/e/ea/Van_Gogh_-_Starry_Night_-_Google_Art_Project.jpg"
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
