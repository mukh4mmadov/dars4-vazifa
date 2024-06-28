import React from "react";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
//pages
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Articles from "./pages/Articles";
// import ErrorPage from "./pages/ErrorPage";
import RootLayout from "./layout/RootLayout";
import SinglePhone from "./pages/SinglePhone";

function App() {
  const routes = createBrowserRouter([
    {
      path: "/",
      element: <RootLayout />,
      children: [
        {
          index: true,
          element: <Home />,
        },
        {
          path: "about",
          element: <About />,
        },
        {
          path: "contact",
          element: <Contact />,
        },
        {
          path: "articles",
          element: <Articles />,
        },
        {
          path: "singlePhone/:id",
          element: <SinglePhone />,
        },
      ],
    },
  ]);
  return (
    <div className="max-w-[1000px] mx-auto px-[50px]">
      <RouterProvider router={routes} />
    </div>
  );
}

export default App;
