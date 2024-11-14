// src/components/PlanetDetail.js
import React from 'react';
import { useParams } from 'react-router-dom';

const PlanetDetail = () => {
  const { id } = useParams();
  
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

  const planeta = planetas.find(p => p.id === parseInt(id));

  if (!planeta) return <p>Planeta no encontrado.</p>;

  return (
    <div className="details-container">
      <img src={planeta.image} alt={planeta.name} />
      <div className="details-info">
        <h1>{planeta.name}</h1>
        <p>Aquí puedes agregar una descripción del planeta.</p>
        <div className="details-stats">
          <div><h5>Climate</h5><p>{planeta.climate}</p></div>
          <div><h5>Population</h5><p>{planeta.population}</p></div>
          <div><h5>Terrain</h5><p>{planeta.terrain}</p></div>
          <div><h5>Rotation Period</h5><p>{planeta.rotation_period}</p></div>
          <div><h5>Orbital Period</h5><p>{planeta.orbital_period}</p></div>
        </div>
      </div>
    </div>
  );
};

export default PlanetDetail;