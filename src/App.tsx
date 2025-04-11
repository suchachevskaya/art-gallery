import { ErrorBoundary } from "./ErrorBoundary"
import { Routes, Route, Link } from 'react-router-dom';
import { Landing } from "./pages/Landing/Landing";

export function App() {
  const ROUTES = { home: '/'}

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