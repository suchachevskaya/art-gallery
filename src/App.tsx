import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import Favorites from "./favorites/Favorites";
import History from "./history/History";
import Header from "./header/Header";
const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <>
        <Header /> <h1>main</h1>
      </>
    ),
  },
  {
    path: "/history",
    element: (
      <>
        <Header /> <History />
      </>
    ),
  },
  {
    path: "/favorites",
    element: (
      <>
        <Header /> <Favorites />
      </>
    ),
  },
  {
    path: "/login",
    element: (
      <>
        <Header /> <h1>login</h1>
      </>
    ),
  },
  {
    path: "/registration",
    element: (
      <>
        <Header /> <h1>registration</h1>
      </>
    ),
  },
]);
function App() {
  return (
    <React.StrictMode>
      <RouterProvider router={router} />
    </React.StrictMode>
  );
}

export default App;
