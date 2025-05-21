import type { PreviewCard  } from "@/store/types/CardType";


export function getLSCards(LSKey: string): PreviewCard [] {
  try {
    const raw = localStorage.getItem(LSKey);

    return raw ? JSON.parse(raw) as PreviewCard [] : [];
  } catch {
    return [];
  }
}