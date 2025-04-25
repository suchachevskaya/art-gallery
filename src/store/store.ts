// src/store/index.ts
import { configureStore } from '@reduxjs/toolkit';
import { cardsReducer } from './cardsSlice';
import { cardsApi } from './cardsApi';
import {favoritesSlice} from "@/store/favoritesSlice";

export const store = configureStore({
  reducer: {
    cards: cardsReducer,
    [cardsApi.reducerPath]: cardsApi.reducer,
    favorites: favoritesSlice,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(cardsApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
