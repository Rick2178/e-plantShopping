import { useDispatch } from 'react-redux';
import { updateQuantity, removeItem } from './CartSlice';

function CartItem({ item }) {
  const dispatch = useDispatch();

  const calculateTotalCost = () => {
    const cost = parseFloat(item.cost.substring(1));
    return `$${(cost * item.quantity).toFixed(2)}`;
  };

  const handleIncrement = () => {
    dispatch(updateQuantity({ name: item.name, quantity: item.quantity + 1 }));
  };

  const handleDecrement = () => {
    if (item.quantity > 1) {
      dispatch(updateQuantity({ name: item.name, quantity: item.quantity - 1 }));
    } else {
      dispatch(removeItem(item.name));
    }
  };

  const handleRemove = () => {
    dispatch(removeItem(item.name));
  };

  return (
    <div className="cart-item" style={{border: '1px solid #ccc', margin: '10px', padding: '10px'}}>
      <img src={item.image} alt={item.name} width="80" />
      <h3>{item.name}</h3>
      <p>Prezzo: {item.cost}</p>
      <p>Quantità: {item.quantity}</p>
      <p><strong>Subtotale: {calculateTotalCost()}</strong></p>
      <button onClick={handleIncrement}>+</button>
      <button onClick={handleDecrement}>-</button>
      <button onClick={handleRemove}>Elimina</button>
    </div>
  );
}

export default CartItem;
