import {Landing} from "./Landing/Landing"
import { ErrorBoundary } from "./ErrorBoundary"
import { Routes, Route, Link } from 'react-router-dom';

export function App() {

  return (
    <>
      {/* <Shapka></Shapka> */}
      <ErrorBoundary fallback={<h2>Что-то пошло не так...</h2>}>
        <Routes>
          <Route path="/" element={<Landing />} />
        </Routes>
      </ErrorBoundary>
    </>

  )
}