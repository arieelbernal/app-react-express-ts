"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const dotenv = require("dotenv");
const cors = require('cors');
// import swaggerJsdoc from "swagger-jsdoc";
// import swaggerUi from "swagger-ui-express";
const routes_1 = __importDefault(require("./routes"));
const registroSolicitudMiddleware_1 = require("./middlewares/registroSolicitudMiddleware");
const app = express();
const mRouter = express.Router();
dotenv.config();
const port = process.env.PORT || '5001'; // Implementacion de dotenv para establecer variables globales
// const swaggerOptions = require("./swaggerOptions.js");
// const specs = swaggerJsdoc(swaggerOptions);
app.use(cors()); // Middelware para permitir el intercambio de recursos entre diferentes dominios.
app.use(express.json()); // Middelware para procesar solicitudes con body JSON.
app.use(registroSolicitudMiddleware_1.registroSolicitud); // Middleware perzonalizado que registra cada Solicitud HTTP.
// app.use("/api/docs", swaggerUi.serve, swaggerUi.setup(specs)); Por cuestiones de tiempo no pude documentar con Swagger.
app.use('/api', routes_1.default), // Montaje del enrutador
    app.listen(port, () => {
        console.log(`Servidor escuchando en http://localhost:${port}`);
    });
//# sourceMappingURL=app.js.map