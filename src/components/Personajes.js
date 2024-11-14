import React from 'react';
import { useFavorites } from '../context/FavoritesContext';
import { useNavigate } from 'react-router-dom';

const Personajes = () => {
  const personajes = [
    { id: 1, name: 'Luke Skywalker', gender: 'male', hairColor: 'blond', eyeColor: 'blue', image: 'https://starwars-visualguide.com/assets/img/characters/1.jpg' },
    { id: 2, name: 'Darth Vader', gender: 'male', hairColor: 'none', eyeColor: 'yellow', image: 'https://starwars-visualguide.com/assets/img/characters/4.jpg' },
    { id: 3, name: 'Leia Organa', gender: 'female', hairColor: 'brown', eyeColor: 'brown', image: 'https://starwars-visualguide.com/assets/img/characters/5.jpg' },
    { id: 4, name: 'Han Solo', gender: 'male', hairColor: 'brown', eyeColor: 'brown', image: 'https://starwars-visualguide.com/assets/img/characters/14.jpg' },
    { id: 5, name: 'Yoda', gender: 'male', hairColor: 'white', eyeColor: 'green', image: 'https://starwars-visualguide.com/assets/img/characters/20.jpg' },
    { id: 6, name: 'Chewbacca', gender: 'male', hairColor: 'brown', eyeColor: 'blue', image: 'https://starwars-visualguide.com/assets/img/characters/13.jpg' },
    { id: 7, name: 'R2-D2', gender: 'n/a', hairColor: 'n/a', eyeColor: 'red', image: 'https://starwars-visualguide.com/assets/img/characters/3.jpg' },
    { id: 8, name: 'C-3PO', gender: 'n/a', hairColor: 'n/a', eyeColor: 'yellow', image: 'https://starwars-visualguide.com/assets/img/characters/2.jpg' },
    { id: 9, name: 'Obi-Wan Kenobi', gender: 'male', hairColor: 'auburn', eyeColor: 'blue-gray', image: 'https://starwars-visualguide.com/assets/img/characters/10.jpg' },
  ];

  const { favorites, toggleFavorite } = useFavorites();
  const navigate = useNavigate();

  return (
    <div className="scroll-container">
      {personajes.map((personaje) => (
        <div key={personaje.id} className="card">
          <img className="card-img-top" src={personaje.image} alt={personaje.name} />
          <div className="card-body">
            <h5 className="card-title">{personaje.name}</h5>
            <p>Gender: {personaje.gender}</p>
            <p>Hair Color: {personaje.hairColor}</p>
            <p>Eye Color: {personaje.eyeColor}</p>
            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
              <button className="btn-learn-more" onClick={() => navigate(`/character/${personaje.id}`)}>Learn more!</button>
              <button className="favoritos-button personaje" onClick={() => toggleFavorite(personaje)}>
                <i className={`fas fa-heart ${favorites.some(fav => fav.id === personaje.id) ? 'favorited' : ''}`}></i>
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Personajes;