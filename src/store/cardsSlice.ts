import type { PayloadAction, SerializedError } from '@reduxjs/toolkit';
import { createSlice } from '@reduxjs/toolkit';
import type { CardData, CardsState, Filters, Pagination,  } from './types/CardType';
import type { FetchBaseQueryError } from '@reduxjs/toolkit/query';

const initialState: CardsState = {
  filters: {
    searchValue: '',
    artist_id: [],
    places: [],
    types: [],
  },
  cards: [],
  pagination: {
    total: 0,
    limit: 0,
    offset: 0,
    total_pages: 0,
    current_page: 0,
    next_url: '',
  },
  isLoading: false,
  isFetching: false,
  error: null,
};

const cardsSlice = createSlice({
  name: 'cards',
  initialState,
  reducers: {
    // Обновление всех фильтров разом (если нужно)
    setFilters: (state, action: PayloadAction<Filters>) => {
      state.filters = action.payload;
    },

    // Обновление по отдельности:
    setSearchValue: (state, action: PayloadAction<string>) => {
      state.filters.searchValue = action.payload;
    },
    setAuthors: (state, action: PayloadAction<number[]>) => {
      state.filters.artist_id = action.payload;
    },
    setPlaces: (state, action: PayloadAction<string[]>) => {
      state.filters.places = action.payload;
    },
    setTypes: (state, action: PayloadAction<string[]>) => {
      state.filters.types = action.payload;
    },

    setCards: (state, action: PayloadAction<CardData[]>) => {
      state.cards = action.payload;
    },
    setPagination: (state, action: PayloadAction<Pagination>) => {
      state.pagination = action.payload;
    },
    
    setLoading: (state, action: PayloadAction<boolean>) => {
      state.isLoading = action.payload;
    },
    setFetching: (state, action: PayloadAction<boolean>) => {
      state.isFetching = action.payload;
    },
    setError: (state, action: PayloadAction<FetchBaseQueryError | SerializedError>) => {
      state.error = action.payload;
    },
    clearError: (state) => {
      state.error = null;
    }
    
  },
});

export const {
  setFilters,
  setSearchValue,
  setAuthors,
  setPlaces,
  setTypes,
  setCards,
  setPagination,
  setLoading,
  setFetching,
  setError,
  clearError
} = cardsSlice.actions;

export const cardsReducer = cardsSlice.reducer;