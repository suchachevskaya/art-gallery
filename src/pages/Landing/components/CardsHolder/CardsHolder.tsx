import { useSelector } from 'react-redux';
import { Card } from "@/components/Card/Card";
import "./CardsHolder.scss"
import { useEffect, useRef, useState } from 'react';
import { getCards } from '@/store/selectors';
import { CardLink } from "@/components/Card/CardLink";
import { LoadingIndicator } from '@/components/AsyncStatus/LoadingIndicator';
import { ErrorIndicator } from '@/components/AsyncStatus/ErrorIndicator';



export function CardsHolder() {
  const { cards, isFetching, error } = useSelector(getCards);
  const [showAll, setShowAll] = useState(false);
  const [delayedLoading, setDelayedLoading] = useState(false);

  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    if (isFetching) {
      // запускаем таймер на показ loading
      timeoutRef.current = setTimeout(() => {
        setDelayedLoading(true);
      }, 1000);
    } else {
      // если данные пришли быстрее — не показываем loading
      setDelayedLoading(false);
      
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    }

    // на размонтирование или смену isFetching — чистим
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, [isFetching]);

  if (delayedLoading) return <LoadingIndicator/>;

  if (error) return <ErrorIndicator/>;

  const handleShowAll = () => {
    setShowAll(true);
  };

  const visibleCards = showAll ? cards : cards.slice(0, 3);

  return (
    <div className="cards-holder-wrapper">
      <div className="card-holder">
        {visibleCards.map((card) => (
          <CardLink key={card.id} cardHistory={card}>
            <Card
              key={card.id}
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
