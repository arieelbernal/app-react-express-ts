"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.registroSolicitud = void 0;
const logger_1 = __importDefault(require("../utils/logger"));
const registroSolicitud = (req, res, next) => {
    logger_1.default.http(`SOLICITUD - METODO ${req.method}`); // Registro de Solicitud HTTP con su metodo.
    next(); // Funcion necesaria para continuar con el flujo de la aplicación.
};
exports.registroSolicitud = registroSolicitud;
//# sourceMappingURL=registroSolicitudMiddleware.js.map