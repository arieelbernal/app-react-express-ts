import { useState, useEffect} from 'react';
import type { Entidad } from '../interfaces/Entidad';
import '../assets/css/style.css';
import type { CampoFiltro } from '../interfaces/CampoFiltro';
import CardEntidad from './CardEntidad';

  // Componente funcional que recibe la lista de entidades como props
  const ListaEntidadesFiltradas = (): JSX.Element => {
    const [entidadesFiltradas, setEntidadesFiltradas] = useState<Entidad[]>([]);
    const [listaFiltros, setListaFiltros] = useState<CampoFiltro[]>([
      {label: 'Nombre', propiedad: 'nombre', selected: true}, {label: 'Descripcion', propiedad: 'proposito', selected: true}, {label: 'Año', propiedad: 'anioFundacion', selected: true}, {label: 'Estado activo', propiedad: 'activa', selected: true}
    ]);
    let filtro = '&filtro2=nombre&filtro3=proposito&filtro4=anioFundacion&filtro5=activa';
    
    const fetchData = async (filtro: string) => {
      console.log(filtro);
      const response = await fetch(`http://localhost:5000/api/entidades/filtrar?filtro1=id${filtro}`, {
        method: "GET",
      });
    
  
      if (response.status === 200) {
        setEntidadesFiltradas(await response.json());
      } else {
        setEntidadesFiltradas([]);
      }
    };

    const handleToggle = (campo: CampoFiltro) => {
        const filtrosActualizados: CampoFiltro[] = listaFiltros.map((e) =>
        e.propiedad === campo.propiedad ? { ...e, selected: !e.selected } : e);
        filtro = '';
        filtrosActualizados.forEach((e,i) => {
          i += 1;
          if(e.selected ===true){
            (i !== filtrosActualizados.length) 
            ? filtro += `&filtro${i+1}=${e.propiedad}`
            : filtro += `&filtro${i+1}=${e.propiedad}`
          }
        });
        setListaFiltros(filtrosActualizados);
        
        fetchData(filtro);
    }

  useEffect(() => {
    fetchData(filtro);
  }, [filtro]);

    return (
      <div>
        <h2 className='titulo'>Entidades con filtro de campos</h2>
        <div>{listaFiltros.map((e)=>( <button key={e.propiedad} className={e.selected? 'activado filtro-boton' : 'desactivado filtro-boton'} onClick={() => handleToggle(e)}>{e.label}</button>))}</div>
        {entidadesFiltradas.map((e) => (<CardEntidad key={e.id} entidad = {e}/>)
        )}
      </div>
    );
  };
  
  export default ListaEntidadesFiltradas;