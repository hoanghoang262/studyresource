"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const ErrorHandler = (err, req, res, next) => {
    let errorTitle = "Something went wrong!\n";
    // Handle other types of errors here
    res.status(500).send(`${errorTitle}${err}`);
};
exports.default = ErrorHandler;
