import type { PreviewCard } from "@/store/types/CardType";
import { getLSCards } from "./getLSCards";
import { CARD_HISTORY_KEY } from "@/constants/constants";
import { toggleItemInList } from "./toggleItemInList";
import { isInLS } from "./isInLS";

/**
 * Добавляет или удаляет карточку из localStorage по ключу.
 */
export function toggleCard(card: PreviewCard, LSKey: string, maxLength = 12) {
  
  const LSCard = getLSCards(LSKey);
  const exists = isInLS(LSKey, card);

  const updatedCards = exists
    ? LSCard.filter(item => item.image_id !== card.image_id)
    : [{
      id: card.id,
      title: card.title,
      artist_title: card.artist_title,
      image_id: card.image_id,
      thumbnail: card.thumbnail
    }, ...LSCard];

    toggleItemInList(LSCard, {
      id: card.id,
      title: card.title,
      artist_title: card.artist_title,
      image_id: card.image_id,
      thumbnail: card.thumbnail
    })

  if (LSKey === CARD_HISTORY_KEY && updatedCards.length > maxLength) {
    updatedCards.length = maxLength;
  }



  localStorage.setItem(LSKey, JSON.stringify(updatedCards));
}