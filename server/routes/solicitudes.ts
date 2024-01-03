import { Router} from 'express';
import { getSolicitudes } from '../controllers/solicitudesController';

const router: Router = Router();

router.get('/', getSolicitudes);

export { router };