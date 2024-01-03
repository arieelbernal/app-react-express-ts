import { Request, Response } from 'express';
import { handlerHttpError } from '../utils/handlerError';

const getSolicitudes = (req: Request, res: Response) => {

    try {
        console.log("getSolicitudes");
    } catch (e) {
        handlerHttpError(res, 'ERROR_GET_SOLICITUDES', e as Error);
    }
}

export { getSolicitudes }