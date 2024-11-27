import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const CharacterDetail = () => {
  const { id } = useParams();
  const [character, setCharacter] = useState(null);
  const [loading, setLoading] = useState(true);

  const personajes = [
    { id: 1, name: 'Luke Skywalker', image: 'https://starwars-visualguide.com/assets/img/characters/1.jpg' },
    { id: 2, name: 'C-3PO', image: 'https://starwars-visualguide.com/assets/img/characters/2.jpg' },
    { id: 3, name: 'R2-D2', image: 'https://starwars-visualguide.com/assets/img/characters/3.jpg' },
    { id: 4, name: 'Darth Vader', image: 'https://starwars-visualguide.com/assets/img/characters/4.jpg' },
    { id: 5, name: 'Leia Organa', image: 'https://starwars-visualguide.com/assets/img/characters/5.jpg' },
    { id: 6, name: 'Owen Lars', image: 'https://starwars-visualguide.com/assets/img/characters/6.jpg' },
    { id: 7, name: 'Beru Whitesun lars', image: 'https://starwars-visualguide.com/assets/img/characters/7.jpg' },
    { id: 8, name: 'R5-D4', image: 'https://starwars-visualguide.com/assets/img/characters/8.jpg' },
    { id: 9, name: 'Biggs Darklighter', image: 'https://starwars-visualguide.com/assets/img/characters/9.jpg' },
    { id: 10, name: 'Obi-Wan Kenobi', image: 'https://starwars-visualguide.com/assets/img/characters/10.jpg' },
  ];

  useEffect(() => {
    const fetchCharacter = async () => {
      try {
        const response = await fetch(`https://www.swapi.tech/api/people/${id}`);
        if (!response.ok) {
          throw new Error("Error fetching character details");
        }
        const data = await response.json();

        // Buscar imagen por nombre
        const personajeStatic = personajes.find((p) => p.id === parseInt(id));
        setCharacter({
          ...data.result.properties,
          image: personajeStatic?.image || 'https://via.placeholder.com/400x600?text=Image+Not+Found',
        });
        setLoading(false);
      } catch (error) {
        console.error("Error fetching character data:", error);
        setLoading(false);
      }
    };

    fetchCharacter();
  }, [id]);

  if (loading) {
    return <p>Cargando detalles...</p>;
  }

  if (!character) {
    return <p>No se pudo cargar la información del personaje.</p>;
  }

  return (
    <div className="details-container">
      <img
        src={character.image}
        alt={character.name}
        className="details-image"
        onError={(e) => (e.target.src = 'https://via.placeholder.com/400x600?text=Image+Not+Found')}
      />
      <div className="details-info">
        <h1>{character.name}</h1>
        <p>
          {character.description || "No description available for this character."}
        </p>
        <div className="details-stats">
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
            <p>{character.height} cm</p>
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