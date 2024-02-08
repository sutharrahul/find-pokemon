import React from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Route from "./Route";
import Home from "./Home";
import Searchbar from "./Searchbar";

export default function App() {
  const appRouter = createBrowserRouter([
    {
      path: "/",
      element: <Route />,
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "/Search",
          element: <Searchbar />,
        },
      ],
    },
  ]);
  return (
    <>
      <RouterProvider router={appRouter} />
    </>
  );
}
