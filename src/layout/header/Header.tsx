import { Link } from "react-router-dom";
import "../header/header.scss";
import { ROUTES } from "@/constants/routes";
const navItems = [
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
];

export function Header() {
  return (
    <header className="header">
      <Link to={ROUTES.HOME}>
        <figure className="header__logo">
          <img src="src/header/icon_header/logo-museum.png" alt="Logo" />
        </figure>
      </Link>
      <nav className="header__navigation">
        {navItems.map((item) => (
          <Link key={item.id} to={item.to}>
            <h4 className={`header__link ${item.modifier}`}>{item.text}</h4>
          </Link>
        ))}
      </nav>
    </header>
  );
}
