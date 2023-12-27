import { Request, Response, NextFunction } from "express";
import Logger from "../utils/logger";


const registroSolicitud = (req: Request, res: Response, next: NextFunction) => {
    Logger.http(`SOLICITUD - METODO ${req.method}`); // Registro de Solicitud HTTP con su metodo.
    next(); // Funcion necesaria para continuar con el flujo de la aplicación.
}

export { registroSolicitud };