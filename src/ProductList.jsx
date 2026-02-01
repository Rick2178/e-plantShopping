import { useDispatch } from 'react-redux';
import { addItem } from './CartSlice';

export default function ProductList() {
  const dispatch = useDispatch();
  
  const plants = [
    { name: "Basilico", price: "$5" },
    { name: "Rosmarino", price: "$6" },
    { name: "Piante da appartamento", price: "$15" }
  ];

  return (
    <div>
      <h2>🌱 Piante Disponibili</h2>
      {plants.map((plant, index) => (
        <div key={index} style={{margin: '10px 0'}}>
          <span>{plant.name} - {plant.price}</span>
          <button onClick={() => dispatch(addItem(plant))}>Aggiungi</button>
        </div>
      ))}
    </div>
  );
}
