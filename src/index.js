import "./index.css";
import App from "./App";
import React from "react";
import ReactDOM from "react-dom/client";
// import Home from "./Home";
// import Error from "./error";
// import Products from "./Products";
// import NewProducts from "./NewProducts";
// import { products, newProducts } from "./db";

// import { createBrowserRouter, RouterProvider } from "react-router-dom";

// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <Home />,
//     errorElement: <Error />,
//   },
//   {
//     path: "/current-month",
//     element: <Products products={newProducts} />,
//   },
//   {
//     path: "/next-month",
//     element: <NewProducts newProducts={products} />,
//   },
// ]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
