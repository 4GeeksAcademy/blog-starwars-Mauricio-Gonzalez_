import React, { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";

const SearchBar = ({ data }) => {
  const [query, setQuery] = useState("");
  const [filteredResults, setFilteredResults] = useState([]);
  const navigate = useNavigate();
  const location = useLocation();

  const handleInputChange = (e) => {
    const value = e.target.value;
    setQuery(value);

    // Filtrar datos según la búsqueda
    const results = data.filter((item) =>
      item.name.toLowerCase().includes(value.toLowerCase())
    );
    setFilteredResults(results);
  };

  const handleSelect = (item) => {
    // Redirigir a la página detallada
    navigate(`/${item.type}/${item.uid}`);
    setQuery("");
    setFilteredResults([]);
  };

  // Limpiar la barra de búsqueda al navegar a la página principal
  useEffect(() => {
    if (location.pathname === "/") {
      setQuery("");
      setFilteredResults([]);
    }
  }, [location.pathname]);

  return (
    <div className="search-bar">
      <input
        type="text"
        value={query}
        onChange={handleInputChange}
        placeholder="Busca personajes, planetas o vehículos..."
        className="form-control"
      />
      {filteredResults.length > 0 && (
        <ul className="list-group position-absolute mt-2">
          {filteredResults.map((item) => (
            <li
              key={item.uid}
              className="list-group-item list-group-item-action"
              onClick={() => handleSelect(item)}
            >
              {item.name} ({item.type})
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default SearchBar;