import { useNavigate, generatePath } from "react-router-dom";
import { ROUTES } from "@/constants/routes";
import { CARD_HISTORY_KEY } from "@/constants/constants";
type CardLinkProps = {
  cardId: number;
  children: React.ReactNode;
};

export const CardLink: React.FC<CardLinkProps> = ({ cardId, children }) => {
  const navigate = useNavigate();
  const handleSaveInHistory = () => {
    const historyStorage = JSON.parse(
      localStorage.getItem(CARD_HISTORY_KEY) || "[]"
    );
    
    if (!historyStorage.includes(cardId)) {
      historyStorage.push(cardId);
    }
    localStorage.setItem(CARD_HISTORY_KEY, JSON.stringify(historyStorage));
  };
  const handleCardClick = () => {
    handleSaveInHistory();
    const path = generatePath(ROUTES.INCARD, { cardId:cardId.toString() }); //generatePath принимает строку
    navigate(path);
  };

  return <div onClick={handleCardClick}>{children}</div>;
};
