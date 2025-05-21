import { describe, it, expect, beforeEach } from 'vitest';
import type { PreviewCard } from '@/store/types/CardType';
import { isInLS } from '@/utils/isInLS';

describe('isInLS', () => {
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

    it('should return true if item is in localStorage', () => {
        localStorage.setItem(LSKey, JSON.stringify([mockCard]));

        const result = isInLS(LSKey, mockCard);

        expect(result).toBe(true);
    });

    it('should return false if item is not in localStorage', () => {
        localStorage.setItem(LSKey, JSON.stringify([]));

        const result = isInLS(LSKey, mockCard);

        expect(result).toBe(false);
    });

    it('should return false if localStorage key does not exist', () => {
        const result = isInLS(LSKey, mockCard);

        expect(result).toBe(false);
    });

    it('should return false if localStorage contains malformed JSON', () => {
        localStorage.setItem(LSKey, 'not-json');

        const result = isInLS(LSKey, mockCard);

        expect(result).toBe(false);
    });
});