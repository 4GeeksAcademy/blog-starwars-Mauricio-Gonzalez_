// src/components/VehicleDetail.js
import React from 'react';
import { useParams } from 'react-router-dom';

const VehicleDetail = () => {
  const { id } = useParams();
  
  const vehiculos = [
    { id: 4, name: 'Sand Crawler', model: 'Digger Crawler', manufacturer: 'Corellia Mining Corporation', passengers: '30', image: 'https://starwars-visualguide.com/assets/img/vehicles/4.jpg' },
    { id: 6, name: 'T-16 Skyhopper', model: 'T-16 skyhopper', manufacturer: 'Incom Corporation', passengers: '1', image: 'https://starwars-visualguide.com/assets/img/vehicles/6.jpg' },
    { id: 7, name: 'X-34 Landspeeder', model: 'X-34 landspeeder', manufacturer: 'SoroSuub Corporation', passengers: '1', image: 'https://starwars-visualguide.com/assets/img/vehicles/7.jpg' },
    { id: 8, name: 'TIE Fighter', model: 'Twin Ion Engine/Ln Starfighter', manufacturer: 'Sienar Fleet Systems', passengers: '0', image: 'https://starwars-visualguide.com/assets/img/vehicles/8.jpg' },
    { id: 14, name: 'Snowspeeder', model: 't-47 airspeeder', manufacturer: 'Incom corporation', passengers: '0', image: 'https://starwars-visualguide.com/assets/img/vehicles/14.jpg' },
    { id: 16, name: 'AT-AT', model: 'All Terrain Armored Transport', manufacturer: 'Kuat Drive Yards, Imperial Department of Military Research', passengers: '40', image: 'https://starwars-visualguide.com/assets/img/vehicles/16.jpg' },
    { id: 18, name: 'Imperial Speeder Bike', model: '74-Z speeder bike', manufacturer: 'Aratech Repulsor Company', passengers: '1', image: 'https://starwars-visualguide.com/assets/img/vehicles/18.jpg' },

  ];

  const vehiculo = vehiculos.find(v => v.id === parseInt(id));

  if (!vehiculo) return <p>Vehículo no encontrado.</p>;

  return (
    <div className="details-container">
      <img src={vehiculo.image} alt={vehiculo.name} />
      <div className="details-info">
        <h1>{vehiculo.name}</h1>
        <p>Aquí puedes agregar una descripción del vehículo.</p>
        <div className="details-stats">
          <div><h5>Model</h5><p>{vehiculo.model}</p></div>
          <div><h5>Manufacturer</h5><p>{vehiculo.manufacturer}</p></div>
          <div><h5>Cost</h5><p>{vehiculo.cost_in_credits}</p></div>
          <div><h5>Length</h5><p>{vehiculo.length}</p></div>
          <div><h5>Max Speed</h5><p>{vehiculo.max_atmosphering_speed}</p></div>
        </div>
      </div>
    </div>
  );
};

export default VehicleDetail;