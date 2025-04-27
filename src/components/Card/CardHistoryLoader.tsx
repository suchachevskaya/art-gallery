import { CARD_HISTORY_KEY } from "@/constants/constants";
import type { CardData } from "@/store/types/CardType";
import { History } from "@/pages/history/History";

export function CardHistoryLoader() {
  const storedHistory = JSON.parse(
    localStorage.getItem(CARD_HISTORY_KEY) || "[]"
  ) as CardData[];

  return <History cards={storedHistory || []} />;
}
