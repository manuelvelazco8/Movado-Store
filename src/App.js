import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NavBar from "./Components/NavBar/NavBar";
import ItemListContainer from "./Components/Pages/ItemListContainer/ItemListContainer";
import ItemDetailContainer from "./Components/Pages/ItemDetailContainer/ItemDetailContainer";

function App() {
  return (
    <BrowserRouter>
        <NavBar />
      <Routes>
        <Route path="/" element={<ItemListContainer />} />
        <Route path="/category/:categoryId" element={<ItemListContainer />} />
        <Route path="/item/:id" element={<ItemDetailContainer />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
