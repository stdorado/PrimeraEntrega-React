import CarritoCompras from './cartWidget/cartWidget';
import './navbar.css';
const Navbar = () => {
    return(
<div>
<nav className="navbar navbar-expand-lg">
    <div className="container-fluid">
      <a className="navbar-brand" href="#"><svg xmlns="http://www.w3.org/2000/svg" width="60" height="45" fill="currentColor" className="bi bi-display-fill" viewBox="0 0 16 16">
        <path d="M6 12c0 .667-.083 1.167-.25 1.5H5a.5.5 0 0 0 0 1h6a.5.5 0 0 0 0-1h-.75c-.167-.333-.25-.833-.25-1.5h4c2 0 2-2 2-2V4c0-2-2-2-2-2H2C0 2 0 4 0 4v6c0 2 2 2 2 2h4z"/>
        </svg>
        </a>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarText">
        <ul className="navbar-nav  navegacion">
          <li className="nav-item">
            <a className="nav-link" aria-current="page" href="*">Home</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="*">Contacto</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="*">Sobre nosotros</a>
          </li>
          <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Productos
          </a>
          <ul className="dropdown-menu">
            <li><a className="dropdown-item" href="#">Accesorios</a></li>
            <li><a className="dropdown-item" href="#">Computadoras</a></li>
            <li><a className="dropdown-item" href="#">Notebook</a></li>
            <li><a className="dropdown-item" href="#">Celulares</a></li>
          </ul>
        </li>
        </ul>
      </div>
    </div>
  </nav>


  <CarritoCompras/>
</div>





);
}

export default Navbar;