import "./index.css";

import React from "react";
import ReactDOM from "react-dom/client";
import Home from "./Home";
import Error from "./error";
import Products from "./Products";
import { products } from "./db";

import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    errorElement: <Error />,
  },
  {
    path: "/current-month",
    element: <Products products={products} />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
