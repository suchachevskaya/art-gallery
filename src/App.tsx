import { Routes, Route } from "react-router-dom";
import "./App.css";
import {Favorites} from "./favorites/Favorites";
import {History} from "./history/History";
import {Header} from "./header/Header";
import { ROUTES } from "./routes";
function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path={ROUTES.HOME} element={<h1>main</h1>} />
        <Route path={ROUTES.HISTORY} element={<History />} />
        <Route path={ROUTES.FAVORITES} element={<Favorites />} />
        <Route path={ROUTES.LOGIN} element={<div>login</div>} />
        <Route path={ROUTES.REGISTRATION} element={<div>registration</div>} />
      </Routes>
    </>
  );
}

export default App;
