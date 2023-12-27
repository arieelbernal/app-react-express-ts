"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.router = void 0;
const express_1 = require("express");
const solicitudesController_1 = require("../controllers/solicitudesController");
const router = (0, express_1.Router)();
exports.router = router;
router.get('/', solicitudesController_1.getSolicitudes);
//# sourceMappingURL=solicitudes.js.map