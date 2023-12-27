import React from 'react';
const logo = require('../assets/img/gtt-logo.png');

const Navbar: React.FC = () => {
  return (
    <nav className = "navbar">
      <div className="logo">
        <a  href="/"><img src={logo} alt="Logo" width="30" height="30" /><p>Prueba Tecnica</p></a>
      </div>
      <ul>
          <li>
          <a href="/">Inicio</a>
        </li>
        <li>
          <a href="/entidades">Entidades</a>
        </li>
        <li>
          <a href="/entidadesv2">EntidadesV2</a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;