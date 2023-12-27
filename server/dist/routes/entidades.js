"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.router = void 0;
const express_1 = require("express");
const entidadesController_1 = require("../controllers/entidadesController");
const router = (0, express_1.Router)();
exports.router = router;
// Definiciones de rutas para los metodos GET y PUT de Entidades y los segundos argumentos son los controladores de las rutas. Los encargados de recibir la peticion y devolver la respuesta.
router.get('/', entidadesController_1.getEntidades);
router.get('/filtrar', entidadesController_1.getEntidadesFiltradas);
router.get('/:id', entidadesController_1.getEntidad);
router.put('/:id', entidadesController_1.updateEntidad);
//# sourceMappingURL=entidades.js.map