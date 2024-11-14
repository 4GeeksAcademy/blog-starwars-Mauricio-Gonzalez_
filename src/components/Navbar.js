import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container-fluid">
        <Link to="/" className="navbar-brand">Star Wars</Link>
        <div className="collapse navbar-collapse justify-content-center" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link className="nav-link" to="/">Personajes</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/vehiculos">Vehículos</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/planetas">Planetas</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;