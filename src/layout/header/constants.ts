import { ROUTES } from "@/constants/routes";
type NavItem = {
  id: string;
  text: string;
  to: string;
  modifier: string;
  type?: string; 
};

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
