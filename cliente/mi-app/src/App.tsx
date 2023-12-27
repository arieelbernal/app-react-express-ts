import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar';
import Entidades from './pages/Entidades';
import { Home } from './pages/Home';
import Entidadesv2 from './pages/Entidadesv2';


const App: React.FC = () => {
  return (
    <Router>
      {
        <>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/entidades" element={<Entidades />} />
          <Route path="/entidadesv2" element={<Entidadesv2 />} />
        </Routes>
        </>
      }
    </Router>
  );
};

export default App;