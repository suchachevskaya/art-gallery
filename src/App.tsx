import { ErrorBoundary } from "./ErrorBoundary"
import { Routes, Route, Link } from 'react-router-dom';
import { Landing } from "./pages/Landing/Landing";
import { ROUTES } from "./constants/routes"

export function App() {


  return (
    <>
      {/* <Shapka></Shapka> */}
      <ErrorBoundary>
        <Routes>
          <Route path={ROUTES.home} element={<Landing />} />
        </Routes>
      </ErrorBoundary>
    </>

  )
}