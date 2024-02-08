import React from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import RouteOutlet from "./RouteOutlet";
import Home from "./Home";
import Search from "./Search";

export default function App() {
  const appRouter = createBrowserRouter([
    {
      path: "/",
      element: <RouteOutlet />,
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "/Search",
          element: <Search />,
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
