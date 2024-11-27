import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, useNavigate, useLocation } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Personajes from "./components/Personajes";
import Vehiculos from "./components/Vehiculos";
import Planetas from "./components/Planetas";
import CharacterDetail from "./components/CharacterDetail";
import VehicleDetail from "./components/VehicleDetail";
import PlanetDetail from "./components/PlanetDetail";
import { FavoritesProvider } from "./context/FavoritesContext";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

const fetchEntities = async (endpoint) => {
  try {
    const response = await fetch(`https://www.swapi.tech/api/${endpoint}`);
    const data = await response.json();
    return data.results || [];
  } catch (error) {
    console.error(`Error fetching ${endpoint}:`, error);
    return [];
  }
};

const SearchBar = ({ data }) => {
  const [query, setQuery] = useState("");
  const [filteredResults, setFilteredResults] = useState([]);
  const navigate = useNavigate();
  const location = useLocation();

  const handleInputChange = (e) => {
    const value = e.target.value.toLowerCase();
    setQuery(value);

    const results = data.filter((item) =>
      item.name.toLowerCase().includes(value)
    );
    setFilteredResults(results);
  };

  const handleSelect = (item) => {
    navigate(`/${item.type}/${item.uid}`);
    setQuery("");
    setFilteredResults([]);
  };

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

const Home = ({ entities }) => (
  <div className="home-container">
    <SearchBar data={entities} />
    <h1 className="section-title">Personajes</h1>
    <Personajes />
    <h1 className="section-title">Planetas</h1>
    <Planetas />
    <h1 className="section-title">Vehículos</h1>
    <Vehiculos />
  </div>
);

const App = () => {
  const [entities, setEntities] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const characters = await fetchEntities("people");
      const planets = await fetchEntities("planets");
      const vehicles = await fetchEntities("vehicles");

      const combinedData = [
        ...characters.map((item) => ({ ...item, type: "character" })),
        ...planets.map((item) => ({ ...item, type: "planet" })),
        ...vehicles.map((item) => ({ ...item, type: "vehicle" })),
      ];

      setEntities(combinedData);
    };

    fetchData();
  }, []);

  return (
    <FavoritesProvider>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home entities={entities} />} />
          <Route path="/character/:id" element={<CharacterDetail />} />
          <Route path="/vehicle/:id" element={<VehicleDetail />} />
          <Route path="/planet/:id" element={<PlanetDetail />} />
        </Routes>
        <Footer />
      </Router>
    </FavoritesProvider>
  );
};

export default App;