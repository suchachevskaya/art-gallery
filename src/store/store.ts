import { configureStore } from '@reduxjs/toolkit';

export const store = configureStore({
  reducer: {

  },
//   middleware: (getDefaultMiddleware) =>
//     getDefaultMiddleware().concat(usersApi.middleware),
});

// Типы стора
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;