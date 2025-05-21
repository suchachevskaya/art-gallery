import type { PreviewCard } from "@/store/types/CardType";
import { getLSCards } from "./getLSCards";

export function isInLS(LSKey: string, list: PreviewCard) {
    return getLSCards(LSKey).some((item) => item.image_id === list.image_id)
}
