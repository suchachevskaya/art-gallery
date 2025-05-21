import type { RootState } from './store';

export const getFilters = (state: RootState) => state.cards.filters;
export const getAuthorIdFilter = (state: RootState) => state.cards.filters.artist_id;
export const getCards = (state: RootState) => state.cards;