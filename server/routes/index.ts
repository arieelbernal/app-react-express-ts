import { Router } from 'express';
import fs = require('fs');

const PATH_ROUTER = `${__dirname}`;
const router: Router  = Router();

const nombreSinExtension = (fileName: string): string => {
    let nombreArchivo = fileName.split('.').shift() ?? '';
    return nombreArchivo; // Retorna el nombre del archivo sin la extensión .js del para posterior poder usarlo como path
}

fs.readdirSync(PATH_ROUTER).filter((fileName) => {
    const nombreRuta = nombreSinExtension(fileName);
    
    if(nombreRuta !== 'index' && !fileName.includes('map') && nombreRuta !== ''){
        import(`./${nombreRuta}`).then((modulo) => {
            router.use(`/${nombreRuta}`, modulo.router); // Importacion dinámica de modulos con su router y seteo de ruta
        });
    }
})

export default router;