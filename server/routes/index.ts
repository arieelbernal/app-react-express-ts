import express = require('express');
import fs = require('fs');

const PATH_ROUTER = `${__dirname}`;
const router = express.Router();

const nombreSinExtension = (fileName: string) => {
    return fileName.split('.').shift(); // Retorna el nombre del archivo sin la extensión .js del para posterior poder usarlo como path
}

fs.readdirSync(PATH_ROUTER).filter((fileName) => {
    const nombreRuta = nombreSinExtension(fileName);
    
    if(nombreRuta !== 'index' && !fileName.includes('map')){
        import(`./${nombreRuta}`).then((modulo) => {
            router.use(`/${nombreRuta}`, modulo.router); // Importacion dinámica de modulos con su router y seteo de ruta
        });
    }
})

export default router;