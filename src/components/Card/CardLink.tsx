import { useNavigate, generatePath } from "react-router-dom";
import { ROUTES } from "@/constants/routes";
import { CARD_HISTORY_KEY } from "@/constants/constants";

type CardLinkProps = {
  cardId: number;
  children: React.ReactNode;
};
type HistoryStorageProps = number[];

export function CardLink({ cardId, children }: CardLinkProps) {
  const navigate = useNavigate();
  const handleSaveInHistory = () => {
    const historyStorage = JSON.parse(
      localStorage.getItem(CARD_HISTORY_KEY) || "[]"
    ) as HistoryStorageProps;

    const updateHistory = historyStorage.filter((id) => id !== cardId);
    
    updateHistory.push(cardId);

    if (updateHistory.length > 12) {
      updateHistory.shift();
    }

    localStorage.setItem(CARD_HISTORY_KEY, JSON.stringify(updateHistory));
  };

  const handleCardClick = () => {
    handleSaveInHistory();
    const path = generatePath(ROUTES.INCARD, { cardId: cardId.toString() }); //generatePath принимает строку
   
    void navigate(path);
  };

  return <div onClick={handleCardClick}>{children}</div>;
}
