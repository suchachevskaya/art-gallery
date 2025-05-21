// toggleCard.test.ts
import { describe, it, expect, beforeEach } from 'vitest';
import { toggleCard } from '@/utils/toggleCard';
import { CARD_HISTORY_KEY } from '@/constants/constants';
import type { PreviewCard } from '@/store/types/CardType';
import { getLSCards } from '@/utils/getLSCards';

const mockCard = (id: number): PreviewCard => ({
  id,
  title: `Title ${id}`,
  artist_title: `Artist ${id}`,
  image_id: `img_${id}`,
  thumbnail: {
    alt_text: `Alt ${id}`,
    lqip: `url_${id}`,
  },
});

describe('toggleCard', () => {
  const TEST_KEY = 'TEST_KEY';

  beforeEach(() => {
    localStorage.clear();
  });

  it('should add a card to empty localStorage', () => {
    toggleCard(mockCard(1), TEST_KEY);

    const stored = getLSCards(TEST_KEY)

    expect(stored).toHaveLength(1);
    expect(stored[0].image_id).toBe('img_1');
  });

  it('should remove card if it already exists', () => {
    localStorage.setItem(TEST_KEY, JSON.stringify([mockCard(1)]));
    toggleCard(mockCard(1), TEST_KEY);

    const stored = getLSCards(TEST_KEY)

    expect(stored).toHaveLength(0);
  });

  it('should not exceed maxLength for CARD_HISTORY_KEY', () => {
    const cards = Array.from({ length: 15 }, (_, i) => mockCard(i));

    localStorage.setItem(CARD_HISTORY_KEY, JSON.stringify(cards));
    toggleCard(mockCard(999), CARD_HISTORY_KEY, 12);

    const stored = getLSCards(CARD_HISTORY_KEY)

    expect(stored).toHaveLength(12);
  });

  it('should prepend card when added', () => {
    const initial = [mockCard(2)];

    localStorage.setItem(TEST_KEY, JSON.stringify(initial));

    toggleCard(mockCard(1), TEST_KEY);

    const stored = getLSCards(TEST_KEY)
    
    expect(stored[0].image_id).toBe('img_1'); // новый должен быть первым
  });
});
