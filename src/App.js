import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Personajes from './components/Personajes';
import Vehiculos from './components/Vehiculos';
import Planetas from './components/Planetas';
import CharacterDetail from './components/CharacterDetail';
import VehicleDetail from './components/VehicleDetail';
import PlanetDetail from './components/PlanetDetail';
import { FavoritesProvider } from './context/FavoritesContext'; 
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

const Home = () => (
  <div className="home-container">
    <h1 className="section-title">Personajes</h1>
    <Personajes />
    
    <h1 className="section-title">Planetas</h1>
    <Planetas />
    
    <h1 className="section-title">Vehículos</h1>
    <Vehiculos />
  </div>
);

const App = () => {
  return (
    <FavoritesProvider>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
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