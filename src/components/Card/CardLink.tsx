import { useNavigate, generatePath } from "react-router-dom";
import { ROUTES } from "@/constants/routes";
import { CARD_HISTORY_KEY } from "@/constants/constants";
import type { CardData, PreviewCard } from "@/store/types/CardType";

type CardLinkProps = {
  cardHistory: CardData|PreviewCard;
  children: React.ReactNode;
};
type HistoryStorageProps = (CardData|PreviewCard)[];


export function CardLink({ cardHistory, children }: CardLinkProps) {
  const navigate = useNavigate();
  const handleSaveInHistory = () => {
    const historyStorage = JSON.parse(
      localStorage.getItem(CARD_HISTORY_KEY) || "[]"
    ) as HistoryStorageProps;

    const updateHistory = historyStorage.filter((card) => card.id !== cardHistory.id);
    
    updateHistory.unshift(cardHistory);

    if (updateHistory.length > 12) {
      updateHistory.pop();
    }

    localStorage.setItem(CARD_HISTORY_KEY, JSON.stringify(updateHistory));
  };

  const handleCardClick = () => {
    handleSaveInHistory();
    const path = generatePath(ROUTES.INCARD, { cardId: cardHistory.id.toString() }); //generatePath принимает строку
   
    void navigate(path);
  };

  return <div onClick={handleCardClick}>{children}</div>;
}
