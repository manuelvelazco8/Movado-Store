import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NavBar from "./Components/NavBar/NavBar";
import ItemListContainer from "./Components/Pages/ItemListContainer/ItemListContainer";
import ItemDetailContainer from "./Components/Pages/ItemDetailContainer/ItemDetailContainer";
import Cart from "./Components/Pages/Cart/Cart"
import CartProvider from './Context/CartProvider';

function App() {
  return (
    <BrowserRouter>
      {/* <CartProvider> */}
      <NavBar />
      <Routes>
        <Route path="/" element={<ItemListContainer />} />
        <Route path="/category/:categoryId" element={<ItemListContainer />} />
        <Route path="/item/:id" element={<ItemDetailContainer />} />
        <Route path="/cart" element={<cart/>} />
      </Routes>
        {/* </CartProvider>  */}
    </BrowserRouter>
  );
}

export default App;
