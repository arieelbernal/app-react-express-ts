import type { CardEntidadProps } from '../interfaces/CardEntidadProps';

const CardEntidad = ({ entidad }: CardEntidadProps): JSX.Element => {
  // Extraer los datos específicos
  const { id, nombre, anioFundacion, proposito, activa } = entidad;

  return (
    <>
      <div className="card">
        <h2 key={nombre}>{id}. {nombre}</h2>
        {proposito !== null && proposito &&<p>Proposito: {proposito}</p>}
        {anioFundacion !== null && anioFundacion &&<p>Año: {anioFundacion}</p>}
        {activa !== null && <p>Estado activo: {activa ? 'ACTIVA' : 'INACTIVA'}</p>}
      </div>
    </>
  ); // Componente CardEntidad para mostrar las propiedades de la entidad.
};

export default CardEntidad;