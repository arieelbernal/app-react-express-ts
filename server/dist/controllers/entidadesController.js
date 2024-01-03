"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateEntidad = exports.getEntidadesFiltradas = exports.getEntidad = exports.getEntidades = void 0;
const handlerError_1 = require("../utils/handlerError");
const entidadesService_1 = require("../services/entidadesService");
// Capa de controlador encargada de gestionar las solicitudes y de enviar las respuestas correspondientes.
// Retorna la lista completa de las entidades
const getEntidades = (req, res) => {
    try {
        console.log('getEntidades');
        const listaEntidades = (0, entidadesService_1.getListaEntidades)();
        res.send(JSON.stringify(listaEntidades));
    }
    catch (e) {
        (0, handlerError_1.handlerHttpError)(res, 'GET_ENTIDADES', e); // Cuando se dispara el catch devuelve un tipo de error 500 con la descripcion enviada en la llamada.
    }
};
exports.getEntidades = getEntidades;
// Retorna la entidad que coincida con el id recibido como parametro
const getEntidad = (req, res) => {
    try {
        const entidad = (0, entidadesService_1.getEntidadPorId)(Number(req.params.id)); // Se llama a una funcion del service que retorna la entidad.
        // Si encuentra la entidad la retorna y devuelve un 200, en caso de no encontrarla devuelve un 404 junto a un error.
        if (entidad !== undefined && entidad.id !== -1) {
            res.send(JSON.stringify(entidad));
            res.status(200);
        }
        else {
            res.status(404).json({ error: 'Recurso no encontrado' });
        }
    }
    catch (e) {
        (0, handlerError_1.handlerHttpError)(res, 'GET_ENTIDAD', e);
    }
};
exports.getEntidad = getEntidad;
// Retorna una lista de Entidades cuyos campos seran filtrados y los campos que deseo mostrar lo recibo por query parms.
const getEntidadesFiltradas = (req, res) => {
    try {
        const campo1 = req.query.filtro1 ? req.query.filtro1 : '';
        const campo2 = req.query.filtro2 ? req.query.filtro2 : '';
        const campo3 = req.query.filtro3 ? req.query.filtro3 : '';
        const campo4 = req.query.filtro4 ? req.query.filtro4 : '';
        const campo5 = req.query.filtro5 ? req.query.filtro5 : '';
        const entidades = (0, entidadesService_1.filtrarEntidadesPorCampos)(entidadesService_1.listaEntidades, [campo1, campo2, campo3, campo4, campo5]);
        res.send(JSON.stringify(entidades));
    }
    catch (e) {
        (0, handlerError_1.handlerHttpError)(res, 'GET_ENTIDADES_FILTRADAS_POR_CAMPOS', e);
    }
};
exports.getEntidadesFiltradas = getEntidadesFiltradas;
// Edita una entidad, como es un metodo PUT recibe el id como parámetro y el objeto en el body.
const updateEntidad = (req, res) => {
    try {
        const id = (0, entidadesService_1.editarEntidad)(req.body);
        if (id !== -1) {
            res.send(JSON.stringify({ id: id, message: "Entidad actualizada con éxito." }));
        }
        else {
            res.status(404).json({ error: 'Recurso no encontrado' });
        }
    }
    catch (e) {
        (0, handlerError_1.handlerHttpError)(res, 'UPDATE_ENTIDAD', e);
    }
};
exports.updateEntidad = updateEntidad;
//# sourceMappingURL=entidadesController.js.map