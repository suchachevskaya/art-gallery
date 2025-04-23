import { useNavigate, generatePath } from "react-router-dom";
import { ROUTES } from "@/constants/routes";
import { CARD_HISTORY_KEY } from "@/constants/constants";
type CardLinkProps = {
  cardId: number;
  /* eslint-disable-next-line no-undef */
  children: React.ReactNode;
};

/* eslint-disable-next-line no-undef */
export const CardLink: React.FC<CardLinkProps> = ({ cardId, children }) => {
  const navigate = useNavigate();
  const handleSaveInHistory = () => {
    const historyStorage = JSON.parse(
      localStorage.getItem(CARD_HISTORY_KEY) || "[]"
    );

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
    navigate(path);
  };

  return <div onClick={handleCardClick}>{children}</div>;
};
