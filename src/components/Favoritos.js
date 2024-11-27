import React from 'react';
import { useFavorites } from '../context/FavoritesContext';

const Favoritos = () => {
  const { favorites, toggleFavorite } = useFavorites(); // Usamos toggleFavorite en lugar de removeFavorite

  return (
    <div className="favoritos-container">
      <h2>Mis Favoritos</h2>
      {favorites.length === 0 ? (
        <p>No tienes elementos favoritos.</p>
      ) : (
        <ul>
          {favorites.map((favorite) => (
            <li key={favorite.id} className="favorito-item">
              <span>{favorite.name}</span>
              <button
                onClick={() => toggleFavorite(favorite)} // Usamos toggleFavorite para eliminar
                className="remove-favorite"
              >
                🗑️
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Favoritos;