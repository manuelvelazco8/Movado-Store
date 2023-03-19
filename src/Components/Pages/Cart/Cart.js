import { useContext } from 'react';
import { CartContext } from "../../../Context/CartContext";
import { useNavigate } from 'react-router-dom';
import { collection, addDoc, getFirestore, doc, updateDoc, writeBatch } from 'firebase/firestore';

const Cart = () => {
  const { cart, clear, removeItem } = useContext(CartContext);
  const navigate =useNavigate();

  const createOrder = (event) => {
    event.preventDefault();
    const db = getFirestore();
    const batch = writeBatch(db);

    const querySnapshot = collection(db, 'orders'); 
    const querySnapshotUpdate = doc(db, 'prodcucts', )
    batch.set(querySnapshot, {
      buyer: {
        email: 'pedro@gmail.com',
        name: 'pedro',
        phone: '1164788689',
      },
    products: cart.map((product) => {
       return {
        title: product.name,
        price: product.price,
        id: product.id,
        quantity: product.quantity,
       };
    }),
   total: cart.reduce((acc, curr) => acc + curr.price * curr.quantity, 0),
  })
  batch.commit();

//   .then((response) => {
//     console.log(response.id);
//     alert(`orden con el id:${response.id} ha sido creada`);
//     updateStocks();
//   }) 
//   .catch((error) => console.log(error)); 
// };

const updateStocks = () => {
   cart.forEach ((product) => {
    const querySnapshot = doc(db, 'products', product.id);

    updateDoc(querySnapshot, {
      stock: product.stock - product.quantity,
    }).then((res) => {
      alert ('El stock de los productos ha sido actualizado');
      updateStocks();
    })
    .catch((error) => console.log(error));
   });
}; 

  return ( 
   <div>
    {cart.map((product) => (
    <div
      style={{
        display: 'flex',
        flexDirection: 'row',
        width: '600px',
        justifyContent: 'space-between',
      }}
      key={product.name}
      >
        <h2>{product.name}</h2>
        <h5>{product.quantity}</h5> 
        <button onClick={() => removeItem(product.id)}>x</button>
    </div>
  ))}
    {cart.length > 0 && <button onClick={clear}>Vaciar carrito</button>}
    {cart.length === 0 && <div>
      <h2>No hay Productos en el Carrito</h2>
      <button onClick={() => navigate("/")}>Seguir Comprando</button>
    </div>}
    </div>
  );
};
};
export default Cart;
