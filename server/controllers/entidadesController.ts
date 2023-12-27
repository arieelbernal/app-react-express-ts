import { Request, Response } from 'express';
import { handlerHttpError } from '../utils/handlerError';
import { filtrarEntidadesPorCampos, listaEntidades, getListaEntidades, getEntidadPorId, editarEntidad } from '../services/entidadesService';

// Capa de controlador encargada de gestionar las solicitudes y de enviar las respuestas correspondientes.
// Retorna la lista completa de las entidades
const getEntidades = (req: Request, res: Response) => {

    try {
        console.log('getEntidades');
        
        res.send(JSON.stringify(getListaEntidades()));
        
    } catch (e) {
        handlerHttpError(res, 'GET_ENTIDADES', e); // Cuando se dispara el catch devuelve un tipo de error 500 con la descripcion enviada en la llamada.
    }
}

// Retorna la entidad que coincida con el id recibido como parametro
const getEntidad = (req: Request, res: Response) => {
    try {
        const entidad = getEntidadPorId(Number(req.params.id)); // Se llama a una funcion del service que retorna la entidad.
        // Si encuentra la entidad la retorna y devuelve un 200, en caso de no encontrarla devuelve un 404 junto a un error.
        if(entidad !== undefined){ 
            res.send(JSON.stringify(entidad));
            res.status(200);
        }
        else{
            res.status(404).json({ error: 'Recurso no encontrado' });
        }
        
    } catch (e) {
        handlerHttpError(res, 'GET_ENTIDAD', e);
    }
}

// Retorna una lista de Entidades cuyos campos seran filtrados y los campos que deseo mostrar lo recibo por query parms.
const getEntidadesFiltradas = (req: Request, res: Response) => {
    try {
        const campo1: string = req.query.filtro1 ? req.query.filtro1 as string : '';
        const campo2: String = req.query.filtro2 ? req.query.filtro2 as string : '';
        const campo3: String = req.query.filtro3 ? req.query.filtro3 as string : '';
        const campo4: String = req.query.filtro4 ? req.query.filtro4 as string : '';
        const campo5: String = req.query.filtro4 ? req.query.filtro5 as string : '';

        const entidades = filtrarEntidadesPorCampos(listaEntidades, [campo1,campo2,campo3,campo4,campo5]);
        res.send(JSON.stringify(entidades));

    } catch (e) {
        handlerHttpError(res, 'GET_ENTIDADES_FILTRADAS_POR_CAMPOS', e);
    }
}

// Edita una entidad, como es un metodo PUT recibe el id como parámetro y el objeto en el body.
const updateEntidad = (req: Request, res: Response) => {
    try {
        const id = editarEntidad(req.body);
        if(id !== -1){
            res.send(JSON.stringify({id: id, message:"Entidad actualizada con éxito."}));
        }
        else{
            res.status(404).json({ error: 'Recurso no encontrado' });
        }
        
    } catch (e) {
        handlerHttpError(res, 'UPDATE_ENTIDAD', e);
    }
}

export { getEntidades, getEntidad, getEntidadesFiltradas, updateEntidad }
