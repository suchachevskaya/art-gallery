import { Link } from "react-router-dom";
import "../header/header.scss";
import { navItems } from "./constants";
import { ROUTES } from "@/constants/routes";
import logoMuseum from "@/layout/header/icon/logo-museum.png";
import { useDispatch } from "react-redux";


export function Header() {
  const dispatch=useDispatch();
  const handleProtectedClick =()=>{
    dispatch({ type: 'CHECK_AUTH' });
    
  }

  return (
    <header className="header">
      <Link to={ROUTES.HOME}>
        <figure className="header__logo">
          <img src={logoMuseum} alt="Logo" />
        </figure>
      </Link>
      <nav className="header__navigation">
        {navItems.map((item) => (
          <Link key={item.id} to={item.to} onClick={item.type==='CHECK_AUTH'? handleProtectedClick:undefined}>
            <h2 className={`header__link ${item.modifier}`}>{item.text}</h2>
          </Link>
        ))}
      </nav>
    </header>
  );
}
