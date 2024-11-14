import React from 'react';
import { useFavorites } from '../context/FavoritesContext';
import { useNavigate } from 'react-router-dom';

const Vehiculos = () => {
  const vehiculos = [
    { id: 4, name: 'Sand Crawler', model: 'Digger Crawler', manufacturer: 'Corellia Mining Corporation', passengers: '30', image: 'https://starwars-visualguide.com/assets/img/vehicles/4.jpg' },
    { id: 6, name: 'T-16 Skyhopper', model: 'T-16 skyhopper', manufacturer: 'Incom Corporation', passengers: '1', image: 'https://starwars-visualguide.com/assets/img/vehicles/6.jpg' },
    { id: 7, name: 'X-34 Landspeeder', model: 'X-34 landspeeder', manufacturer: 'SoroSuub Corporation', passengers: '1', image: 'https://starwars-visualguide.com/assets/img/vehicles/7.jpg' },
    { id: 8, name: 'TIE Fighter', model: 'Twin Ion Engine/Ln Starfighter', manufacturer: 'Sienar Fleet Systems', passengers: '0', image: 'https://starwars-visualguide.com/assets/img/vehicles/8.jpg' },
    { id: 14, name: 'Snowspeeder', model: 't-47 airspeeder', manufacturer: 'Incom corporation', passengers: '0', image: 'https://starwars-visualguide.com/assets/img/vehicles/14.jpg' },
    { id: 16, name: 'AT-AT', model: 'All Terrain Armored Transport', manufacturer: 'Kuat Drive Yards, Imperial Department of Military Research', passengers: '40', image: 'https://starwars-visualguide.com/assets/img/vehicles/16.jpg' },
    { id: 18, name: 'Imperial Speeder Bike', model: '74-Z speeder bike', manufacturer: 'Aratech Repulsor Company', passengers: '1', image: 'https://starwars-visualguide.com/assets/img/vehicles/18.jpg' },

  ];

  const { favorites, toggleFavorite } = useFavorites();
  const navigate = useNavigate();

  return (
    <div className="scroll-container">
      {vehiculos.map((vehiculo) => (
        <div key={vehiculo.id} className="card">
          <img className="card-img-top" src={vehiculo.image} alt={vehiculo.name} />
          <div className="card-body">
            <h5 className="card-title">{vehiculo.name}</h5>
            <p>Model: {vehiculo.model}</p>
            <p>Manufacturer: {vehiculo.manufacturer}</p>
            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
              <button className="btn-learn-more" onClick={() => navigate(`/vehicle/${vehiculo.id}`)}>Learn more!</button>
              <button className="favoritos-button vehiculo" onClick={() => toggleFavorite(vehiculo)}>
                <i className={`fas fa-heart ${favorites.some(fav => fav.id === vehiculo.id) ? 'favorited' : ''}`}></i>
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Vehiculos;