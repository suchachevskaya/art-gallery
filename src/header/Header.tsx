import { Link } from "react-router-dom";
import "../header/header.css";
export default function Header() {
  return (
    <header className="header">
      <Link to="/">
        <figure className="header__logo">
          <img src="src/header/icon_header/logo-museum.png" alt="Logo" />
        </figure>
      </Link>
      <nav className="header__navigation">
        <Link to="/history">
          <h4 className="header__link header__link--history">History</h4>
        </Link>
        <Link to="/favorites">
          <h4 className="header__link header__link--favorites">Your Favorites</h4>
        </Link>
        <Link to="/login">
          <h4 className="header__link header__link--login">Sing in</h4>
        </Link>
      </nav>
    </header>
  );
}
