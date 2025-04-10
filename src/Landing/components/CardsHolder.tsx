import { useState } from "react";
import Card from "../../components/Card";

export default function CardsHolder() {
  const cardsData = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  const [showAll, setShowAll] = useState(false);

  const visibleCards = showAll ? cardsData : cardsData.slice(0, 3);

  return (
    <div className="cards-holder-wrapper">
      <div className="card-holder">
        {visibleCards.map((data, index) => (
          <Card
            key={index}
            title="The Starry Night"
            author="Vincent van Gogh"
            imageUrl="https://upload.wikimedia.org/wikipedia/commons/e/ea/Van_Gogh_-_Starry_Night_-_Google_Art_Project.jpg"
          />
        ))}
      </div>

      {!showAll && (
        <button
          className="show-all-button"
          onClick={() => setShowAll(true)}
        >
          Показать все
        </button>
      )}
    </div>
  );
}
