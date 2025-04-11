import { Routes, Route } from "react-router-dom";
import "./App.css";
import {Favorites} from "./favorites/Favorites";
import {History} from "./history/History";
import {Header} from "./header/Header";
import { ROUTES } from "./routes";
import { Landing } from "./pages/Landing/Landing";
export function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path={ROUTES.HOME} element={<Landing />} />
        <Route path={ROUTES.HISTORY} element={<History />} />
        <Route path={ROUTES.FAVORITES} element={<Favorites />} />
        <Route path={ROUTES.LOGIN} element={<div>login</div>} />
        <Route path={ROUTES.REGISTRATION} element={<div>registration</div>} />
      </Routes>
    </>
  );
}



