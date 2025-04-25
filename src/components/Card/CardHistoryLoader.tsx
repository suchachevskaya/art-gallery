import { CARD_HISTORY_KEY } from "@/constants/constants";
import { useGetCardsByIdsQuery } from "@/store/cardsApi";
import { getCards } from "@/store/selectors";
import type { CardData } from "@/store/types/CardType";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { History } from "@/pages/history/History";

function loadHistoryIds(): number[] {
  const storedHistory = JSON.parse(
    localStorage.getItem(CARD_HISTORY_KEY) || "[]"
  ) as number[];

  return storedHistory.filter((id) => id !== null);
}

function mergeCards(
  historyIds: number[],
  storedCards: CardData[],
  fetchedCards?: CardData[]
): CardData[] {
  const cardMap: { [key: number]: CardData } = {};

  storedCards
    .filter((card) => historyIds.includes(card.id))
    .forEach((card) => {
      cardMap[card.id] = card;
    });

  if (fetchedCards) {
    fetchedCards.forEach((card) => {
      cardMap[card.id] = card;
    });
  }

  return historyIds.map((id) => cardMap[id]).filter(Boolean);
}

export function CardHistoryLoader() {
  const [historyIds, setHistoryIds] = useState<number[]>([]);
  const storedCards = useSelector(getCards).cards;

  useEffect(() => {
    setHistoryIds(loadHistoryIds());
  }, []);

  const missingIds = historyIds.filter(
    (id) => !storedCards.some((card) => card.id === id)
  );
  const {
    data: newCards,
    error,
    isLoading,
  } = useGetCardsByIdsQuery(missingIds, { skip: missingIds.length === 0 });
  const allHistoryCards = mergeCards(historyIds, storedCards, newCards);



  if (isLoading) return <p>Loading cards...</p>;

  if (error) return <p>Error loading cards</p>;

  if (allHistoryCards.length === 0) return <p>No viewed content</p>;


  return <History cards={allHistoryCards||[]} />;
}
