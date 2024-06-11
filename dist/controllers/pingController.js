"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.pingCheck = void 0;
const pingCheck = (req, res) => {
    console.log(req.url);
    return res.status(200).json({
        message: 'ping check ok',
    });
};
exports.pingCheck = pingCheck;
