
import { Routes, Route } from "react-router-dom";
import "./App.css";

import { Favorites } from "./pages/favorites/Favorites";
import { ROUTES } from "./constants/routes";
import { Landing } from "./pages/Landing/Landing";
import { LoginPage } from "./pages/LoginPage/LoginPage";
import { RegisterPage } from "./pages/RegisterPage/RegisterPage";
import { Header } from "./layout/header/Header";
import { CardPage } from "./pages/CardPage/CardPage";
import { CardHistoryLoader } from "./components/Card/CardHistoryLoader";

export function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path={ROUTES.HOME} element={<Landing />} />
        <Route path={ROUTES.HISTORY} element={<CardHistoryLoader />} />
        <Route path={ROUTES.FAVORITES} element={<Favorites />} />
        <Route path={ROUTES.LOGIN} element={<LoginPage/>} />
        <Route path={ROUTES.SIGNUP} element={<RegisterPage/>} />
        <Route path={ROUTES.INCARD} element={<CardPage/>}/>
      </Routes>
    </>
  );
}