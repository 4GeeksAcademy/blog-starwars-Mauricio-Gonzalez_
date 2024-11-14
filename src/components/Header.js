import React from 'react';
import { useFavorites } from '../context/FavoritesContext';
import { Link } from 'react-router-dom';
import starWarsLogo from '../assets/star_wars_logo.png';

const Header = () => {
  const { favorites, removeFavorite } = useFavorites();

  return (
    <nav className="navbar navbar-light bg-light">
      <Link to="/" className="navbar-brand logo-container">
        <img src={starWarsLogo} alt="Star Wars" className="logo" />
      </Link>
      
      <div className="dropdown favorites-dropdown" style={{ marginRight: '10px' }}>
        <button
          className="btn btn-primary dropdown-toggle header-favorites-button"
          type="button"
          id="favoritesDropdown"
          data-bs-toggle="dropdown"
          aria-expanded="false"
        >
          Favoritos ({favorites.length})
        </button>
        <ul className="dropdown-menu dropdown-menu-right" aria-labelledby="favoritesDropdown">
          {favorites.length === 0 ? (
            <li className="dropdown-item">No hay favoritos</li>
          ) : (
            favorites.map((fav) => (
              <li key={fav.id} className="dropdown-item">
                {fav.name}
                <button
                  className="btn btn-danger btn-sm ms-2"
                  onClick={() => removeFavorite(fav.id)}
                >
                  <i className="fas fa-trash-alt"></i>
                </button>
              </li>
            ))
          )}
        </ul>
      </div>
    </nav>
  );
};

export default Header;