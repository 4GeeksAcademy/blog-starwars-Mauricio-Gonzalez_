import React from 'react';
import { useFavorites } from '../context/FavoritesContext';
import { useNavigate } from 'react-router-dom';

const Planetas = () => {
  const planetas = [
    { id: 2, name: 'Alderaan', climate: 'temperate', population: '2000000000', image: 'https://starwars-visualguide.com/assets/img/planets/2.jpg' },
    { id: 3, name: 'Yavin IV', climate: 'temperate, tropical', population: '1000', image: 'https://starwars-visualguide.com/assets/img/planets/3.jpg' },
    { id: 4, name: 'Hoth', climate: 'frozen', population: 'unknown', image: 'https://starwars-visualguide.com/assets/img/planets/4.jpg' },
    { id: 5, name: 'Dagobah', climate: 'murky', population: 'unknown', image: 'https://starwars-visualguide.com/assets/img/planets/5.jpg' },
    { id: 6, name: 'Bespin', climate: 'temperate', population: '6000000', image: 'https://starwars-visualguide.com/assets/img/planets/6.jpg' },
    { id: 7, name: 'Endor', climate: 'temperate', population: '30000000', image: 'https://starwars-visualguide.com/assets/img/planets/7.jpg' },
    { id: 8, name: 'Naboo', climate: 'temperate', population: '4500000000', image: 'https://starwars-visualguide.com/assets/img/planets/8.jpg' },
    { id: 9, name: 'Coruscant', climate: 'temperate', population: '1000000000000', image: 'https://starwars-visualguide.com/assets/img/planets/9.jpg' },
    { id: 10, name: 'Kamino', climate: 'temperate', population: '1000000000', image: 'https://starwars-visualguide.com/assets/img/planets/10.jpg' },
  ];
  const { favorites, toggleFavorite } = useFavorites();
  const navigate = useNavigate();

  return (
    <div className="scroll-container">
      {planetas.map((planeta) => (
        <div key={planeta.id} className="card">
          <img className="card-img-top" src={planeta.image} alt={planeta.name} />
          <div className="card-body">
            <h5 className="card-title">{planeta.name}</h5>
            <p>Climate: {planeta.climate}</p>
            <p>Population: {planeta.population}</p>
            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
              <button className="btn-learn-more" onClick={() => navigate(`/planet/${planeta.id}`)}>Learn more!</button>
              <button className="favoritos-button planeta" onClick={() => toggleFavorite(planeta)}>
                <i className={`fas fa-heart ${favorites.some(fav => fav.id === planeta.id) ? 'favorited' : ''}`}></i>
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Planetas;