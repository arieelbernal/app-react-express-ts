import { Router} from 'express';
import { getEntidad, getEntidades, getEntidadesFiltradas, updateEntidad } from '../controllers/entidadesController';

const router = Router();

// Definiciones de rutas para los metodos GET y PUT de Entidades y los segundos argumentos son los controladores de las rutas. Los encargados de recibir la peticion y devolver la respuesta.

router.get('/', getEntidades); 
router.get('/filtrar', getEntidadesFiltradas);
router.get('/:id', getEntidad);
router.put('/:id', updateEntidad);

export { router };