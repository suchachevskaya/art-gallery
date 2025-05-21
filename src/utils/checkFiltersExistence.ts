import type { Filters } from "@/store/types/CardType";

// Проверка наличия активных фильтров
export const hasFilters = (filters: Filters): boolean => {
    return [
        filters.artist_id,
        filters.places,
        filters.types,
    ].some(field => {
        if (Array.isArray(field)) return field.length > 0;

        return false;
    });
} 