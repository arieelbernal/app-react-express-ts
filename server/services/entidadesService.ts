import { Entidad } from "../interfaces/Entidad";

//Capa de servicio, encargada de la lógica de negocio y lógica de la aplicación. Capa encargada de interactuar con la capa de datos.

const listaEntidades: Entidad[] = [
    {
        "id": 1,
        "nombre": "Entidad1",
        "anioFundacion": 1985,
        "proposito": "Propósito1",
        "activa": true
    },
    {
        "id": 2,
        "nombre": "Entidad2",
        "anioFundacion": 2002,
        "proposito": "Propósito2",
        "activa": false
    },
    {
        "id": 3,
        "nombre": "Entidad3",
        "anioFundacion": 1978,
        "proposito": "Propósito3",
        "activa": true
    },
    {
        "id": 4,
        "nombre": "Entidad4",
        "anioFundacion": 1995,
        "proposito": "Propósito4",
        "activa": false
    },
    {
        "id": 5,
        "nombre": "Entidad5",
        "anioFundacion": 2010,
        "proposito": "Propósito5",
        "activa": true
    },
    {
        "id": 6,
        "nombre": "Entidad6",
        "anioFundacion": 1988,
        "proposito": "Propósito6",
        "activa": true
    },
    {
        "id": 7,
        "nombre": "Entidad7",
        "anioFundacion": 2005,
        "proposito": "Propósito7",
        "activa": false
    },
    {
        "id": 8,
        "nombre": "Entidad8",
        "anioFundacion": 1972,
        "proposito": "Propósito8",
        "activa": true
    },
    {
        "id": 9,
        "nombre": "Entidad9",
        "anioFundacion": 2018,
        "proposito": "Propósito9",
        "activa": false
    },
    {
        "id": 10,
        "nombre": "Entidad10",
        "anioFundacion": 1990,
        "proposito": "Propósito10",
        "activa": true
    }
];

function filtrarEntidadesPorCampos(listaEntidades: Entidad[], campos: String[],): Partial<Entidad>[] {
    const listaFiltrada: Partial<Entidad>[] = [];

    // Iterar sobre cada objeto del array de entrada
    for (const entidad of listaEntidades) {
        // Crear un nuevo objeto para almacenar los campos deseados

        const entidadFiltrada: Partial<Entidad> = {};

        // Iterar sobre cada campo deseado
        for (const campo of campos) {
            // Verificar si el campo existe en el objeto original antes de copiarlo
            if (campo !== '' && entidad.hasOwnProperty(campo as keyof Entidad)) {
                console.log(entidad[campo as keyof Entidad]);
                entidadFiltrada[campo as keyof Entidad] = entidad[campo as keyof Entidad] as never;
            }
        }

        // Agregar el objeto filtrado al nuevo array
        listaFiltrada.push(entidadFiltrada);
    }
    return listaFiltrada // Retorna lista de tipo Partial<Entidad> cuyos objetos pueden contener o no todas las propiedades de la Entidad
}

function getListaEntidades(): Entidad[] {
    return listaEntidades; // Retorna lista de entidades.
}

function getEntidadPorId(id: Number): any {
    return listaEntidades.find(element => element.id === id); // Como defino la lista en el mismo service, busco dentro del mismo array una entidad con el id recibido por parametro.
}

function editarEntidad(entidad: Entidad){
    const entidadIndice = listaEntidades.findIndex((elemento) => elemento.id === entidad.id); // Busca el indice de la entidad, si no lo encuentra devuelve -1
    console.log(entidadIndice);
    if(entidadIndice !== -1){
        listaEntidades[entidadIndice] = entidad; // En caso de existir la entidad guarda el nuevo objeto sobreescribiendo el anterior.
    }
  

  return entidadIndice !== -1 ? listaEntidades[entidadIndice].id : -1; // Si pudo actualizar retorna el id de la entidad y sino retorna -1.
}

export { listaEntidades, filtrarEntidadesPorCampos, getListaEntidades, getEntidadPorId, editarEntidad };