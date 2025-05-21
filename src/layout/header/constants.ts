import { ROUTES } from "@/constants/routes";
import type {NavItem} from "@/store/types/LayoutType.ts"

export const navItems: NavItem[] = [
  {
    id: "1",
    text: "History",
    to: ROUTES.HISTORY,
    modifier: "header__link--history",
    type: 'CHECK_AUTH'
  },
  {
    id: "2",
    text: "Your Favorites",
    to: ROUTES.FAVORITES,
    modifier: "header__link--favorites",
    type: 'CHECK_AUTH'
  },
  {
    id: "3",
    text: "Sing in",
    to: ROUTES.LOGIN,
    modifier: "header__link--login",
  },
];
