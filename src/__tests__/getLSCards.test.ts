import { describe, it, expect, beforeEach } from 'vitest';
import type { PreviewCard } from '@/store/types/CardType';
import { getLSCards } from '@/utils/getLSCards';

describe('getLSCards', () => {
  const LSKey = 'test_cards';

  const mockCard: PreviewCard = {
    id: 1,
    title: 'Card Title',
    artist_title: 'Artist',
    image_id: 'img123',
    thumbnail: {
      alt_text: 'Image alt',
      lqip: 'low-quality-preview'
    }
  };

  beforeEach(() => {
    localStorage.clear(); // Чистим перед каждым тестом
  });

  it('should return parsed array when valid JSON is stored', () => {
    localStorage.setItem(LSKey, JSON.stringify([mockCard]));

    const result = getLSCards(LSKey);

    expect(result).toEqual([mockCard]);
  });

  it('should return empty array when key does not exist', () => {
    const result = getLSCards(LSKey);

    expect(result).toEqual([]);
  });

  it('should return empty array when stored value is invalid JSON', () => {
    localStorage.setItem(LSKey, 'not-json');

    const result = getLSCards(LSKey);

    expect(result).toEqual([]);
  });
 
  it('should return empty array when value is an empty string', () => {
    localStorage.setItem(LSKey, '');
    const result = getLSCards(LSKey);

    expect(result).toEqual([]);
  });
});
