import "../history/history.scss";
import { useEffect, useState } from "react";
import { CARD_HISTORY_KEY } from "@/constants/constants";
import { useGetCardsByIdsQuery } from "@/store/cardsApi";
import { CardLink } from "@/components/Card/CardLink";
import { Card } from "@/components/Card/Card";

export function History() {
  const [historyIds, setHistoryIds] = useState<number[]>([]);

  useEffect(() => {
    const storedHistory = JSON.parse(
      localStorage.getItem(CARD_HISTORY_KEY) || "[]"
    );
    const filteredHistory = storedHistory.filter((id) => id !== null);
    // console.log("Filtered history IDs:", filteredHistory);
    setHistoryIds(filteredHistory);
  }, []);
  const {
    data: historyCards,
    error,
    isLoading,
  } = useGetCardsByIdsQuery(historyIds, { skip: historyIds.length === 0 });

  const sortedHistoryCards = historyCards?.slice().sort((cardA, cardB) => {
    return historyIds.indexOf(cardB.id) - historyIds.indexOf(cardA.id);
  });
  

  if (isLoading) return <p>Loading cards...</p>;
  if (error) return <p>Error loading cards</p>;
  if (!historyCards || historyCards === 0) return <p>No viewed content</p>;
  return (
    <div className="history-container">
      <h2 className="description-history">
        View <span> History</span>
      </h2>
      <div className="history-cards">
      {sortedHistoryCards?.map((card: CardData) => (
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
    </div>
  );
}
