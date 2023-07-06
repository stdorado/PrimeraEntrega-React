import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';
import Navbar from './components/navbar/navbar';
import Contenedor from './components/contenedor/contenedor';








function App() {
  return (
    <div>
      <Navbar/>
      
      <Contenedor props_saludo={"Bienvenido al Curso de React"}/>

    </div>
  );
}

export default App;
