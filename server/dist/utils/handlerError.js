"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.handlerHttpError = void 0;
const handlerHttpError = (res, error, errorCatched) => {
    console.log(errorCatched, 'asdasda');
    res.status(500).json({ error: error });
};
exports.handlerHttpError = handlerHttpError;
//# sourceMappingURL=handlerError.js.map