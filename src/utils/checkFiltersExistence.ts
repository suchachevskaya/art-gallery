import type { Filters } from "@/store/types/CardType";

// Проверка наличия активных фильтров
export const hasFilters = (filters: Filters): boolean => {
    return [
        filters.searchValue,
        filters.artist_id,
        filters.places,
        filters.types,
    ].some(field => {
        if (Array.isArray(field)) return field.length > 0;

        if (typeof field === 'string') return field.trim() !== '';

        return false;
    });
} 