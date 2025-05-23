import { Link } from "react-router-dom";
import "../header/header.scss";
import { ROUTES } from "@/constants/routes";


export function Footer() {
  return (
    <footer className="header">
      <Link to={ROUTES.HOME}>
        <h2 className="header__logo">
          <span> Museum of</span> Art
        </h2>
      </Link>
      <nav className="header__navigation">
        <h2 className="header__link">Made by Suhachevskaya Catherine</h2>
      </nav>
    </footer>
  );
}
