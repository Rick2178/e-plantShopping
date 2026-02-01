import { useDispatch, useSelector } from 'react-redux';
import { updateQuantity, removeItem } from './CartSlice';

export default function CartItem() {
  const dispatch = useDispatch();
  const cartItems = useSelector(state => state.cart?.items || []);

  const totalCart = cartItems.reduce((total, item) => {
    const price = parseFloat(item.price.replace('$', '')) * item.quantity;
    return total + price;
  }, 0);

  const handleIncrement = (item) => {
    dispatch(updateQuantity({ ...item, quantity: item.quantity + 1 }));
  };

  const handleDecrement = (item) => {
    if (item.quantity > 1) {
      dispatch(updateQuantity({ ...item, quantity: item.quantity - 1 }));
    }
  };

  const handleRemove = (item) => {
    dispatch(removeItem(item));
  };

  return (
    <div style={{ padding: '20px', maxWidth: '600px', margin: '0 auto' }}>
      <h2>🛒 Il Mio Carrello</h2>
      
      {cartItems.length === 0 ? (
        <p>Il carrello è vuoto</p>
      ) : (
        <>
          {cartItems.map((item, index) => (
            <div key={index} style={{ border: '1px solid #ddd', margin: '10px 0', padding: '15px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                <img 
                  src={`https://via.placeholder.com/80?text=${item.name}`} 
                  alt={item.name} 
                  style={{ width: '80px', height: '80px' }}
                />
                <div style={{ flex: 1 }}>
                  <h4>{item.name}</h4>
                  <p>Prezzo unitario: {item.price}</p>
                  <p>Totale: {item.price} x {item.quantity} = ${(parseFloat(item.price.replace('$', '')) * item.quantity).toFixed(2)}</p>
                </div>
                <div style={{ display: 'flex', gap: '5px', alignItems: 'center' }}>
                  <button onClick={() => handleDecrement(item)}>-</button>
                  <span>{item.quantity}</span>
                  <button onClick={() => handleIncrement(item)}>+</button>
                  <button onClick={() => handleRemove(item)}>Delete</button>
                </div>
              </div>
            </div>
          ))}
          
          <div style={{ marginTop: '20px', textAlign: 'right' }}>
            <h3>Totale Carrello: ${totalCart.toFixed(2)}</h3>
            <button 
              onClick={() => alert('Checkout - Coming Soon!')}
              style={{ background: '#4CAF50', color: 'white', padding: '10px 20px', border: 'none', marginRight: '10px' }}
            >
              Checkout
            </button>
            <button 
              style={{ background: '#2196F3', color: 'white', padding: '10px 20px', border: 'none' }}
              onClick={() => alert('Torna allo shopping!')}
            >
              Continua Shopping
            </button>
          </div>
        </>
      )}
    </div>
  );
}
