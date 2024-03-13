"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.notFoundMiddleware = exports.simpleLoggerMiddleware = void 0;
const common_1 = require("@nestjs/common");
function simpleLoggerMiddleware(req, res, next) {
    console.log(`Request ${req.method} ${req.url}`);
    next();
}
exports.simpleLoggerMiddleware = simpleLoggerMiddleware;
function notFoundMiddleware(req, res, next) {
    const error = new Error('Not Found');
    res.status(common_1.HttpStatus.NOT_FOUND).json({
        message: error.message,
        statusCode: common_1.HttpStatus.NOT_FOUND,
    });
}
exports.notFoundMiddleware = notFoundMiddleware;
//# sourceMappingURL=general-middleware.middleware.js.map