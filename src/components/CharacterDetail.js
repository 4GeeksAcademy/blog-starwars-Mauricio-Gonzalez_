// src/components/CharacterDetail.js
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const CharacterDetail = () => {
  const { id } = useParams();
  const [character, setCharacter] = useState(null);

  useEffect(() => {
    const fetchCharacter = async () => {
      try {
        const response = await fetch(`https://swapi.tech/api/people/${id}`);
        const data = await response.json();
        setCharacter(data.result.properties);
      } catch (error) {
        console.error('Error fetching character data:', error);
      }
    };

    fetchCharacter();
  }, [id]);

  if (!character) {
    return <p>Loading...</p>;
  }

  return (
    <div className="details-container">
      <img 
        src={`https://starwars-visualguide.com/assets/img/characters/${id}.jpg`} 
        alt={character.name} 
        className="details-image"
      />
      <div className="details-info">
        <h1>{character.name}</h1>
        <p>{character.description || "No description available for this character."}</p>
        <div className="details-stats">
          <div>
            <h5>Name</h5>
            <p>{character.name}</p>
          </div>
          <div>
            <h5>Birth Year</h5>
            <p>{character.birth_year}</p>
          </div>
          <div>
            <h5>Gender</h5>
            <p>{character.gender}</p>
          </div>
          <div>
            <h5>Height</h5>
            <p>{character.height}</p>
          </div>
          <div>
            <h5>Skin Color</h5>
            <p>{character.skin_color}</p>
          </div>
          <div>
            <h5>Eye Color</h5>
            <p>{character.eye_color}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CharacterDetail;