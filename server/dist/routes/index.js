"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const fs = require("fs");
const PATH_ROUTER = `${__dirname}`;
const router = express.Router();
const nombreSinExtension = (fileName) => {
    return fileName.split('.').shift(); // Retorna el nombre del archivo sin la extensión .js del para posterior poder usarlo como path
};
fs.readdirSync(PATH_ROUTER).filter((fileName) => {
    const nombreRuta = nombreSinExtension(fileName);
    if (nombreRuta !== 'index' && !fileName.includes('map')) {
        Promise.resolve(`${`./${nombreRuta}`}`).then(s => __importStar(require(s))).then((modulo) => {
            router.use(`/${nombreRuta}`, modulo.router); // Importacion dinámica de modulos con su router y seteo de ruta
        });
    }
});
exports.default = router;
//# sourceMappingURL=index.js.map