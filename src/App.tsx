
import { Routes, Route } from "react-router-dom";
import "./App.css";

import { Favorites } from "./pages/favorites/Favorites";
import { History } from "./pages/history/History";
import { ROUTES } from "./routes";
import { Landing } from "./pages/Landing/Landing";
import { LoginPage } from "./pages/LoginPage/LoginPage";
import { RegisterPage } from "./pages/RegisterPage/RegisterPage";
import { Header } from "./layout/header/Header";
import { CardPage } from "./pages/CardPage/CardPage";

export function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path={ROUTES.HOME} element={<Landing />} />
        <Route path={ROUTES.HISTORY} element={<History />} />
        <Route path={ROUTES.FAVORITES} element={<Favorites />} />
        <Route path={ROUTES.LOGIN} element={<LoginPage/>} />
        <Route path={ROUTES.SIGNUP} element={<RegisterPage/>} />
        <Route path={ROUTES.INCARD} element={<CardPage/>}/>
      </Routes>
    </>
  );
}