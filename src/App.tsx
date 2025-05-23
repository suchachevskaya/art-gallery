import { Routes, Route } from "react-router-dom";
import "./App.scss";
import { ROUTES } from "./constants/routes";
import { Landing } from "./pages/Landing/Landing";
import { LoginPage } from "./pages/LoginPage/LoginPage";
import { RegisterPage } from "./pages/RegisterPage/RegisterPage";
import { Header } from "./layout/header/Header";
import { CardPage } from "./pages/CardPage/CardPage";
import { ErrorBoundary } from "./ErrorBoundary";
import { CardHistoryLoader } from "./components/Card/CardHistoryLoader";
import { Footer } from "./layout/header/Footer";
import { Suspense, lazy } from "react";
import { LoadingIndicator } from "./components/AsyncStatus/LoadingIndicator";

const FavoritesLazy = lazy(() => import("./pages/favorites/Favorites"));

export function App() {
  return (
    <div className="app-container">
      <Header />
      <main className="app-content">
        <ErrorBoundary>
          <Routes>
            <Route path={ROUTES.HOME} element={<Landing />} />
            <Route path={ROUTES.HISTORY} element={<CardHistoryLoader />} />
            <Route
              path={ROUTES.FAVORITES}
              element={
                <Suspense fallback={<LoadingIndicator />}>
                  <FavoritesLazy />
                </Suspense>
              }
            />
            <Route path={ROUTES.LOGIN} element={<LoginPage />} />
            <Route path={ROUTES.SIGNUP} element={<RegisterPage />} />
            <Route path={ROUTES.INCARD} element={<CardPage />} />
          </Routes>
        </ErrorBoundary>
      </main>
      <Footer />
    </div>
  );
}
