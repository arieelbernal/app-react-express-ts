"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.editarEntidad = exports.getEntidadPorId = exports.getListaEntidades = exports.filtrarEntidadesPorCampos = exports.listaEntidades = void 0;
//Capa de servicio, encargada de la lógica de negocio y lógica de la aplicación. Capa encargada de interactuar con la capa de datos.
const listaEntidades = [
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
exports.listaEntidades = listaEntidades;
function filtrarEntidadesPorCampos(listaEntidades, campos) {
    const listaFiltrada = [];
    // Iterar sobre cada objeto del array de entrada
    for (const entidad of listaEntidades) {
        // Crear un nuevo objeto para almacenar los campos deseados
        const entidadFiltrada = {};
        // Iterar sobre cada campo deseado
        for (const campo of campos) {
            // Verificar si el campo existe en el objeto original antes de copiarlo
            if (campo !== '' && entidad.hasOwnProperty(campo)) {
                console.log(entidad[campo]);
                entidadFiltrada[campo] = entidad[campo];
            }
        }
        // Agregar el objeto filtrado al nuevo array
        listaFiltrada.push(entidadFiltrada);
    }
    return listaFiltrada; // Retorna lista de tipo Partial<Entidad> cuyos objetos pueden contener o no todas las propiedades de la Entidad
}
exports.filtrarEntidadesPorCampos = filtrarEntidadesPorCampos;
function getListaEntidades() {
    return listaEntidades; // Retorna lista de entidades.
}
exports.getListaEntidades = getListaEntidades;
function getEntidadPorId(id) {
    var _a;
    const entidadNoEncontrada = { id: -1,
        nombre: '',
        anioFundacion: 0,
        proposito: '',
        activa: false, };
    return (_a = listaEntidades.find(element => element.id === id)) !== null && _a !== void 0 ? _a : entidadNoEncontrada; // Como defino la lista en el mismo service, busco dentro del mismo array una entidad con el id recibido por parametro.
}
exports.getEntidadPorId = getEntidadPorId;
function editarEntidad(entidad) {
    const entidadIndice = listaEntidades.findIndex((elemento) => elemento.id === entidad.id); // Busca el indice de la entidad, si no lo encuentra devuelve -1
    console.log(entidadIndice);
    if (entidadIndice !== -1) {
        listaEntidades[entidadIndice] = entidad; // En caso de existir la entidad guarda el nuevo objeto sobreescribiendo el anterior.
    }
    return entidadIndice !== -1 ? listaEntidades[entidadIndice].id : -1; // Si pudo actualizar retorna el id de la entidad y sino retorna -1.
}
exports.editarEntidad = editarEntidad;
//# sourceMappingURL=entidadesService.js.map