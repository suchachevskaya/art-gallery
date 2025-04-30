// src/store/index.ts
import { configureStore } from '@reduxjs/toolkit';
import { cardsReducer } from './cardsSlice';
import { cardsApi } from './cardsApi';
import { redirectMiddleware } from './redirectMiddleware';

export const store = configureStore({
  reducer: {
    cards: cardsReducer,
    [cardsApi.reducerPath]: cardsApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(cardsApi.middleware).concat(redirectMiddleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
