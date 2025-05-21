import { Link } from "react-router-dom";
import "../header/header.scss";
import { navItems } from "./constants";
import { ROUTES } from "@/constants/routes";
import logoMuseum from "@/layout/header/icon/logo-museum.png";

import {useAuth} from "@/context/AuthContext.tsx";
import {LogoutButton} from "@/pages/Logout/Logout.tsx";


export function Header() {
    const { isLoggedIn, logout } = useAuth();

    return (
        <header className="header">
            <Link to={ROUTES.HOME}>
                <figure className="header__logo">
                    <img src={logoMuseum} alt="Logo"/>
                </figure>
            </Link>
            <nav className="header__navigation">
                {navItems.map((item) => {
                    if (item.to === ROUTES.LOGIN) {
                        return isLoggedIn ? (
                            <LogoutButton key="logout" onLogout={logout}/>
                        ) : (
                            <Link key={item.id} to={item.to}>
                                <h2 className={`header__link ${item.modifier}`}>{item.text}</h2>
                            </Link>
                        );
                    }
                    return (
                        <Link key={item.id} to={item.to}>
                            <h2 className={`header__link ${item.modifier}`}>{item.text}</h2>
                        </Link>
                    );
                })}
            </nav>
        </header>
    );

}
