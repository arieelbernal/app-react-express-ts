import React from 'react';
import { Entidad } from '../interfaces/Entidad';
interface CardEntidadProps {
  entidad: Entidad;
}

const CardEntidad: React.FC<CardEntidadProps> = ({ entidad }) => {
  // Extraer los datos específicos
  const { id, nombre, anioFundacion, proposito, activa } = entidad;

  return (
    <div className="card">
      <h2 key={nombre}>{id}. {nombre}</h2>
      {proposito !== null && proposito &&<p>Proposito: {proposito}</p>}
      {anioFundacion !== null && anioFundacion &&<p>Año: {anioFundacion}</p>}
      {activa !== null && <p>Estado activo: {activa ? <p>ACTIVA</p> : <p>INACTIVA</p>}</p>}
    </div>
  ); // Componente CardEntidad para mostrar las propiedades de la entidad.
};

export default CardEntidad;