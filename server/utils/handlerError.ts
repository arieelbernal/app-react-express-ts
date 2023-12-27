import { log } from 'console';
import { Response } from 'express';

const handlerHttpError = (res: Response,error: String,  errorCatched?: any) => {
    console.log(errorCatched);
    res.status(500).json({error: error});
}

export { handlerHttpError };