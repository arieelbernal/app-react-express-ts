import { Response } from 'express';

const handlerHttpError = (res: Response, error: String,  errorCatched?: Error) => {
    console.log(errorCatched, 'asdasda');
    res.status(500).json({error: error});
}

export { handlerHttpError };