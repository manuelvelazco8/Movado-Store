import ItemCount from "../ItemCount/ItemCount"
import { useState, useContext } from 'react';
import { useNavigate } from "react-router-dom"
import { CartContext } from "../../Context/CartContext";

const ItemDetail = ({ detail }) => {
  const navigate = useNavigate();
  const { addItem } = useContext(CartContext);
  const [count, setCount] = useState(detail?.stock === 0 ? 0 : 1);

  const agregarAlCarrito = (event) =>{
    event.preventDefult()
    console.log({ ...detail, quantity: count });
  }
  return ( <div  
    
    style={{
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    padding: '50px',
    flexDirection: 'column',
   }}
  >
    <img src={detail.image} alt={detail.name} width='500px'/>
    <h2>{detail.name}</h2>
    <h3>{detail.description}</h3>
    <h2>{detail.price}</h2>
    <ItemCount count={count} setCount={setCount}/>
    <button onClick={() => navigate("/")} variant="primary">Seguir Comprando</button>
    <button disaible={count > detail.stock} onClick={() => addItem(detail, count)} variant="primary">Agregar al Carrito</button>
    <button onClick={() => navigate("/cart")} variant="primary">Completar mi Compra</button>
    </div>
  );
};

export default ItemDetail;