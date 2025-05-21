import type { Filters } from "@/store/types/CardType";
import { useMemo } from "react";

export function useSafeTotalPages(filters: Filters, total_pages?: number, pageSize = 12, ) {
    const maxItems = 1000;
    const maxPages = Math.floor(maxItems / pageSize);

    const isSearchActive = useMemo(() => {
        return Object.values(filters).some(value => {

            if (Array.isArray(value)) return value.length > 0;

            return value !== '' && value !== null && value !== undefined;
        });
    }, [filters]);

    const safeTotalPages = isSearchActive
        ? Math.min(total_pages ?? 1, maxPages)
        : total_pages ?? 1;

    return safeTotalPages;
}