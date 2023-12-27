"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getSolicitudes = void 0;
const handlerError_1 = require("../utils/handlerError");
const getSolicitudes = (req, res) => {
    try {
        console.log("getSolicitudes");
    }
    catch (e) {
        (0, handlerError_1.handlerHttpError)(res, 'ERROR_GET_SOLICITUDES', e);
    }
};
exports.getSolicitudes = getSolicitudes;
//# sourceMappingURL=solicitudesController.js.map