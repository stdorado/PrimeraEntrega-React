import 'bootstrap/dist/js/bootstrap.js';
import 'bootstrap/dist/css/bootstrap.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Navbar from './components/navbar/navbar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import DetailContainer from './components/ItemDetailContainer/itemDetailContainer';
import CarritoCompras from './components/cartWidget/cartWidget';

function App() {
  return (
    <div className='App'>
      <BrowserRouter>
  <Navbar />
  <Routes>
    <Route path="/" element={<ItemListContainer />} />
    <Route path="/categoria/:categoriaId" element={<ItemListContainer />} />
    <Route path="/cart" element={<CarritoCompras />} />
    <Route path="/Detalle/:itemId" element={<DetailContainer />} />
    <Route path="*" element={<h1>ERROR 404 PAGE NOT FOUND</h1>} />
  </Routes>
</BrowserRouter>
        
    </div>
);
}

export default App;
