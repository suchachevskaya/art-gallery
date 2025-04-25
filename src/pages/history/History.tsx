import "../history/history.scss";
import { CardLink } from "@/components/Card/CardLink";
import { Card } from "@/components/Card/Card";
import type { CardData } from "@/store/types/CardType";

type HistoryProps = {
  cards: CardData[];
};

export function History({ cards=[] }: HistoryProps) {
  return (
    <div className="history-container">
      <h2 className="description-history">
        View <span> History</span>
      </h2>
      <div className="history-cards">
        {cards.map((card: CardData) => (
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
