import "../history/history.scss";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import {CARD_HISTORY_KEY} from "@/constants/constants"

export function History() {
  const { cardId } = useParams(); // После подключения API будет использоваться для доступа к полному описании карточки по её id
  const [history, setHistory] = useState<number[]>([]);
  useEffect(() => {
    const storedHistory = JSON.parse(
      localStorage.getItem(CARD_HISTORY_KEY) || "[]"
    );
    setHistory(storedHistory);
  }, []);
  return (
    <>
      <p>Viewed cards: {history.join(", ")}</p>
    </>
  );
}
