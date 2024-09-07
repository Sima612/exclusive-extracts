import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from "./NavBar";
import Home from "./Home";
import Products from "./Products";
import NewProducts from "./NewProducts";
import { products } from "./db";

export default function App() {
  return (
    <div className="main">
      <NavBar />
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route
            exact
            path="/current-month"
            element={<Products products={products} />}
          />
          <Route exact path="/next-month" element={<NewProducts />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
