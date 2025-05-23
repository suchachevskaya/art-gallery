import { ROUTES } from "@/constants/routes";
import type { Middleware } from "redux";

export const redirectMiddleware: Middleware = (_store) => (next) => (action) => {
  const pageAccessRequested = { type: 'CHECK_AUTH' };

  if ((action as { type: string }).type === pageAccessRequested.type) {
    const storedIsLoggedIn = localStorage.getItem('isLoggedIn');

    if (storedIsLoggedIn === 'true') {
      return next(action);
    } else {
      // Переадресация пользователя на страницу логина
      return (window.location.href = ROUTES.LOGIN);
    }
  }

  return next(action);
};

