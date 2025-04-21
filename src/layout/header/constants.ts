import { ROUTES } from "@/constants/routes";
export const  navItems = [
  {
    id: "1",
    text: "History",
    to: ROUTES.HISTORY,
    modifier: "header__link--history",
  },
  {
    id: "2",
    text: "Your Favorites",
    to: ROUTES.FAVORITES,
    modifier: "header__link--favorites",
  },
  {
    id: "3",
    text: "Sing in",
    to: ROUTES.LOGIN,
    modifier: "header__link--login",
  },
] as const;