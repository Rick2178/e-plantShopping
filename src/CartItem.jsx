export default function CartItem({ item }) {
  return (
    <div style={{ border: "1px solid #ddd", margin: "10px 0", padding: "10px" }}>
      <h4>{item.name}</h4>
      <p>Prezzo: {item.price} x {item.quantity}</p>
    </div>
  );
}
