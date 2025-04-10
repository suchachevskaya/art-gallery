import { Routes, Route } from "react-router-dom";
import "./App.css";
import Favorites from "./favorites/Favorites";
import History from "./history/History";
import Header from "./header/Header";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route
          path="/"
          element={
            <>
              <h1>main</h1>
            </>
          }
        />
        <Route
          path="/history"
          element={
            <>
              <History />
            </>
          }
        />
        <Route
          path="/favorites"
          element={
            <>
              <Favorites />
            </>
          }
        />
        <Route
          path="/login"
          element={
            <>
              <div>login</div>
            </>
          }
        />
        <Route
          path="/registration"
          element={
            <>
              <div>registration</div>
            </>
          }
        />
      </Routes>
    </>
  );
}

export default App;
