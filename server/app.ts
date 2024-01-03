import express = require('express');
import dotenv = require('dotenv');
const cors = require('cors');
// import swaggerJsdoc from "swagger-jsdoc";
// import swaggerUi from "swagger-ui-express";
import router  from './routes'
import { registroSolicitud } from './middlewares/registroSolicitudMiddleware';

const app = express();
const mRouter = express.Router();

dotenv.config();

const port: string = process.env.PORT || '5001'; // Implementacion de dotenv para establecer variables globales
// const swaggerOptions = require("./swaggerOptions.js");
// const specs = swaggerJsdoc(swaggerOptions);

app.use(cors()) // Middelware para permitir el intercambio de recursos entre diferentes dominios.
app.use(express.json()); // Middelware para procesar solicitudes con body JSON.
app.use(registroSolicitud); // Middleware perzonalizado que registra cada Solicitud HTTP.
// app.use("/api/docs", swaggerUi.serve, swaggerUi.setup(specs)); Por cuestiones de tiempo no pude documentar con Swagger.
app.use('/api', router), // Montaje del enrutador

app.listen(port, () => {
    console.log(`Servidor escuchando en http://localhost:${port}`);
  });