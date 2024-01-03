import React, { useState, useEffect } from 'react';
import type { ReactElement } from 'react';
import type { Entidad } from '../interfaces/Entidad';
import ListaEntidades from '../components/ListaEntidades';
import ListaEntidadesFiltradas from '../components/ListaEntidadesFiltradas';
import { FaSpinner } from 'react-icons/fa';

const Entidades = (): JSX.Element => {
    const [listaEntidades, setListaEntidades] = useState<Entidad[]>([]);
    const [componenteRenderizado, setComponenteRenderizado] = useState<React.ReactElement>(<div>
        <h2>Cargando...</h2>
        <FaSpinner className="spinner" />
      </div>);
    const [cargado, setCargado] = useState<Boolean>(false);
    const [error, setError] = useState<Boolean>(false);

    const cambiarComponente = (nuevoComponente: ReactElement) => {
        setComponenteRenderizado(nuevoComponente);
      };

    useEffect(() => {
        try {
            fetch('http://localhost:5000/api/entidades')
          .then(results => results.json())
          .then(data => {
            setListaEntidades(data);
            setCargado(true);
            cambiarComponente(<ListaEntidades entidades={data} />);
          });
        } catch (e) {
            setError(true);
        }
    }, []); 

    if(!cargado){
        return <div>
        <h2>Cargando...</h2>
        <FaSpinner className="spinner" />
      </div>;
    }

    if(error){
        return <div> Error</div>;
    }

    return <div>
        <div className='opciones'>
            <button onClick={() => cambiarComponente(<ListaEntidades entidades={listaEntidades} />)}>Lista de Entidades</button>
            <button onClick={() => cambiarComponente(<ListaEntidadesFiltradas />)}>Entidades Filtradas por campo</button>
        </div>
        {componenteRenderizado}
  </div>;
  }; // Puedo renderizar 2 componentes uno muestra una tabla de entidades pudiendo editar cada una y el segundo muestra una lista de entidades a las que puedo filtrar según los campos que desee.
  
  export default Entidades;

    