
import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import CarritoCompras from '../cartWidget/cartWidget';
import './navbar.css';

const BarraNavegacion = () => {
  return (
    <div className="navbar">
      <Navbar expand="lg">
        <div className="container-fluid">
          <NavLink className="navbar-brand" to="/">
            <svg xmlns="http://www.w3.org/2000/svg" width="60" height="45" fill="currentColor" className="bi bi-display-fill" viewBox="0 0 16 16">
              <path d="M6 12c0 .667-.083 1.167-.25 1.5H5a.5.5 0 0 0 0 1h6a.5.5 0 0 0 0-1h-.75c-.167-.333-.25-.833-.25-1.5h4c2 0 2-2 2-2V4c0-2-2-2-2-2H2C0 2 0 4 0 4v6c0 2 2 2 2 2h4z" />
            </svg>
          </NavLink>
          <Navbar.Toggle aria-controls="navbarText" />
          <Navbar.Collapse id="navbarText">
            <Nav className="me-auto navegacion">
              <Nav.Item>
                <Nav.Link as={NavLink} to="/">Home</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link as={NavLink} to="/categoria/Consolas" >Consolas</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link as={NavLink} to="/categoria/Computadoras">Computadoras</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link as={NavLink} to="/categoria/Celulares">Celulares</Nav.Link>
              </Nav.Item>
            </Nav>
          </Navbar.Collapse>
        </div>
      </Navbar>
      <CarritoCompras />
    </div>
  );
};

export default BarraNavegacion;
