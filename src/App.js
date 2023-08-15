import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';

import BarraNavegacion from './components/navbar/navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import Cart from './components/Cart/cart';
import CartProvider from './Context/Context';
import ItemDetailContainer from './components/ItemDetailContainer/itemDetailContainer';
import CheckOut from './components/CheckOut/CheckOut';
import FooterDesing from './components/Footeer/footer';

function App() {
  return (
    <div className='App'>
      <BrowserRouter>
        <CartProvider>
          <BarraNavegacion />
          <Routes>
            <Route path="/" element={<ItemListContainer />} />
            <Route path="/categoria/:categoriaId" element={<ItemListContainer />} />
            <Route path="/Detalle/:itemId" element={<ItemDetailContainer/>} />
            <Route path="*" element={<h1>ERROR 404 PAGE NOT FOUND</h1>} />
            <Route path='/cart' element={<Cart />} />
            <Route path= "/CheckOut" element={<CheckOut/>} />
          </Routes>
        </CartProvider>
        <FooterDesing/>
      </BrowserRouter>
    </div>
  );
}

export default App;

