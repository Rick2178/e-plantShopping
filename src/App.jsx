import { useSelector } from "react-redux";
import ProductList from "./ProductList";
import "./App.css";

function App() {
  return (
    <div className="App">
      <nav className="navbar">
        <h1>🌱 Paradise Nursery</h1>
        <button className="start-btn">Inizia</button>
      </nav>
      <ProductList />
    </div>
  );
}
export default App;
