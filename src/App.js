import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Home";
// import Error from "./error";
import Products from "./Products";
import NewProducts from "./NewProducts";
import { products, newProducts } from "./db";

function App() {
  return (
    <div className="main">
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route
            exact
            path="/current-month"
            element={<Products products={newProducts} />}
          />
          <Route
            exact
            path="/next-month"
            element={<NewProducts newProducts={newProducts} />}
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
