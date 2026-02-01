import { useSelector } from "react-redux";
import ProductList from "./ProductList";
import "./App.css";

function App() {
  const cartItems = useSelector(state => state.cart?.items || []);
  const totalItems = cartItems.reduce((total, item) => total + item.quantity, 0);

  return (
    <div className="App">
      <nav className="navbar">
        <h1>🌱 Paradise Nursery</h1>
        <div>🛒 Carrello: {totalItems} items</div>
      </nav>
      <ProductList />
    </div>
  );
}

export default App;
