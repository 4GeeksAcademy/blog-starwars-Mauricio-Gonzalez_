import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const Detalle = () => {
  const { type, id } = useParams();
  const [details, setDetails] = useState(null);

  useEffect(() => {

    const baseUrl = `https://www.swapi.tech/api/${type}/${id}`;
    
    fetch(baseUrl)
      .then((response) => response.json())
      .then((data) => setDetails(data.result.properties))
      .catch((error) => console.log(error));
  }, [type, id]);

  if (!details) return <p>Loading...</p>;

  return (
    <div className="detalle-container">
      <h2>{details.name}</h2>
      <ul>
        {Object.keys(details).map((key) => (
          <li key={key}><strong>{key}:</strong> {details[key]}</li>
        ))}
      </ul>
    </div>
  );
};

export default Detalle;