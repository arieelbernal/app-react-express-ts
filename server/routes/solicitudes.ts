import { Request, Response, Router} from 'express';
import { getSolicitudes } from '../controllers/solicitudesController';

const router = Router();

router.get('/', getSolicitudes);

export { router };