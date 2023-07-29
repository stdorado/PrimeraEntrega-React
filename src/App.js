import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import DetailContainer from './components/ItemDetailContainer/itemDetailContainer';
import BarraNavegacion from './components/navbar/navbar';


function App() {
  return (
    <div className='App'>
      <BrowserRouter>
        <BarraNavegacion/>
        <Routes>
          <Route path="/" element={<ItemListContainer />} />
          <Route path="/categoria/:categoriaId" element={<ItemListContainer />} />
          <Route path="/Detalle/:itemId" element={<DetailContainer />} />
          <Route path="*" element={<h1>ERROR 404 PAGE NOT FOUND</h1>} />
          
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

