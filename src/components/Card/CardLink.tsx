import { useNavigate } from "react-router-dom";

type CardLinkProps = {
  cardId: number;
  children: React.ReactNode;
};

export const CardLink: React.FC<CardLinkProps> = ({ cardId, children }) => {
  const navigate = useNavigate();
  const handleSaveInHistory = () => {
    const historyStorage = JSON.parse(
      localStorage.getItem("cardHistory") || "[]"
    );
    if (!historyStorage.includes(cardId)) {
      historyStorage.push(cardId);
    }
    localStorage.setItem("cardHistory",JSON.stringify(historyStorage))
  };
  const handleCardClick = () => {
    handleSaveInHistory();
    navigate(`/cards/${cardId}`);
  };

  return <div onClick={handleCardClick}>{children}</div>;
};
