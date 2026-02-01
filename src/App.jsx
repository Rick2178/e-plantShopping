import { useSelector } from "react-redux";
import ProductList from "./ProductList";
import CartItem from "./CartItem";
import "./App.css";
import { useState } from "react";

function App() {
  const cartItems = useSelector(state => state.cart?.items || []);
  const totalItems = cartItems.reduce((total, item) => total + item.quantity, 0);
  const [showCart, setShowCart] = useState(false);

  return (
    <div className="App">
      <nav className="navbar">
        <h1>🌱 Paradise Nursery</h1>
        <div>
          🛒 Carrello: {totalItems} items 
          <button onClick={() => setShowCart(!showCart)} style={{marginLeft: '10px'}}>
            {showCart ? 'Prodotti' : 'Carrello'}
          </button>
        </div>
      </nav>
      
      {showCart ? <CartItem /> : <ProductList />}
    </div>
  );
}

export default App;
