import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addItem } from './CartSlice';

const plantsArray = [
  {
    category: "Piante Aromatiche",
    plants: [
      { name: "Basilico", image: "https://images.unsplash.com/photo-1586873594920-7c35c2c3f833?w=200", description: "Pianta aromatica", cost: "$5" },
      { name: "Rosmarino", image: "https://images.unsplash.com/photo-1588361221158-bbcdcd7a45cd?w=200", description: "Pianta aromatica", cost: "$6" }
    ]
  },
  {
    category: "Piante Medicinali",
    plants: [
      { name: "Aloe Vera", image: "https://images.unsplash.com/photo-1584224019064-cd3d2e4a3e58?w=200", description: "Pianta medicinale", cost: "$12" },
      { name: "Lavanda", image: "https://images.unsplash.com/photo-1452860605965-3a69da4b13f6?w=200", description: "Pianta medicinale", cost: "$8" }
    ]
  },
  {
    category: "Piante Decorative",
    plants: [
      { name: "Monstera", image: "https://images.unsplash.com/photo-1602580355092-2b976c689e4b?w=200", description: "Pianta decorativa", cost: "$20" },
      { name: "Pothos", image: "https://images.unsplash.com/photo-1558663200-5dd7a61927de?w=200", description: "Pianta decorativa", cost: "$12" },
      { name: "Snake Plant", image: "https://images.unsplash.com/photo-1558618047-3c8c76ca6e94?w=200", description: "Pianta decorativa", cost: "$15" }
    ]
  }
];

function ProductList() {
  const dispatch = useDispatch();
  const [addedToCart, setAddedToCart] = useState({});
  const cartItems = useSelector(state => state.cart?.items || []);

  const calculateTotalQuantity = () => {
    return cartItems.reduce((total, item) => total + item.quantity, 0);
  };

  const handleAddToCart = (product) => {
    dispatch(addItem(product));
    setAddedToCart(prevState => ({
      ...prevState,
      [product.name]: true
    }));
  };

  return (
    <div className="product-grid">
      {plantsArray.map((category, index) => (
        <div key={index}>
          <h1>{category.category}</h1>
          <div className="product-list">
            {category.plants.map((plant, plantIndex) => (
              <div className="product-card" key={plantIndex}>
                <img className="product-image" src={plant.image} alt={plant.name} />
                <div className="product-title">{plant.name}</div>
                <div className="product-description">{plant.description}</div>
                <div className="product-cost">{plant.cost}</div>
                <button
                  className="product-button"
                  disabled={addedToCart[plant.name]}
                  onClick={() => handleAddToCart(plant)}
                >
                  {addedToCart[plant.name] ? 'Aggiunto!' : 'Aggiungi al Carrello'}
                </button>
              </div>
            ))}
          </div>
        </div>
      ))}
      <div>🛒 Carrello: {calculateTotalQuantity()} items</div>
    </div>
  );
}

export default ProductList;
