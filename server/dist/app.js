"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const env_1 = __importDefault(require("./env"));
const format_enum_1 = require("./config/format.enum");
const errorHandler_1 = __importDefault(require("./middleware/errorHandler"));
//NOTE - setup app
const PORT = env_1.default.PORT;
const app = (0, express_1.default)();
//NOTE - Time request report middleware (custom)
app.use("/", (req, res, next) => {
    const currentDate = new Date();
    const dateFormated = new Intl.DateTimeFormat("es-US", format_enum_1.DATE_TIME_FORMAT).format(currentDate);
    console.log("Time: ", dateFormated);
    next();
});
//NOTE - init hello api
app.get("/", (req, res) => {
    res.send("Hello, World with TypeScript!");
});
//NOTE - Serve static files from the 'public' directory
app.use(express_1.default.static("public"));
//NOTE -  Error handling middleware
app.use(errorHandler_1.default);
//NOTE - Start listen port
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
