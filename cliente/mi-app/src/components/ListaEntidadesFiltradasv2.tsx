import React, { useState, useEffect } from 'react';
import type { Entidad } from '../interfaces/Entidad';
import '../assets/css/style.css';
import CardEntidad from './CardEntidad';

const ListaEntidadesFiltradasv2 = (): JSX.Element => {
    const [listaEntidades, setListaEntidades] = useState<Entidad[]>([]);
    const [entidadesFiltradas, setEntidadesFiltradas] = useState<Entidad[]>([]);
    const [filtro, setFiltro] = useState<string>('');

    const handleKeyUp = (e: React.KeyboardEvent<HTMLInputElement>) => {
        setEntidadesFiltradas(filteredList); // Escucho el evento de teclado keyUp y cada vez que se produzca ese evento actualizo la lista filtrada.
    }

    const filteredList = listaEntidades.filter((item) => {
        return item.nombre.toLowerCase().includes(filtro.toLowerCase()); // Devuelve un array con los items que cumplan la condicion de contener al texto de filtro.
    });

    const fetchData = async () => {
        const response = await fetch(`http://localhost:5000/api/entidades/`, {
            method: "GET",
        }); // Decidí utilizar fetch para la llada a API pero se puede utilizar Axios.

        if (response.status === 200) {
            let respuesta = await response.json();
            setListaEntidades(respuesta);
            setEntidadesFiltradas(respuesta); // Se hace uso de los callbacks de los hooks useState para acutalizar las listas con los datos devueltos de la api.
        } else {
            setListaEntidades([]); // En caso que de se produzca un error en la API seteo la lista vacia.
        }
    };

    useEffect(() => {
        console.log('useEffect');
        fetchData();
    }, []);

    return (
        <>
            <h2 className='titulo'>Entidades filtradas por nombre</h2>
            <input
                type="text"
                placeholder="Filtrar por nombre"
                className='input-filtrar'
                value={filtro}
                onChange={(e) => setFiltro(e.target.value)}
                onKeyUp={handleKeyUp}
            />
            {entidadesFiltradas.map((e) => (<CardEntidad key={e.id} entidad={e} />) // Se utiliza el metodo .map de arrays para devolver un array nuevo cuyos elementos son del tipo CardEntidad y con la prop {entidad} que es el cada elemento.
            )}
        </>
    );
};

export default ListaEntidadesFiltradasv2;