import Header from "./Header";
import Products from "./Products";
import { products } from "./db";

function App() {
  return (
    <div className="App">
      <Header />
      <Products products={products} />
    </div>
  );
}

export default App;
