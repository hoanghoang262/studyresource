import express, { Request, Response, NextFunction } from "express";
import cors from "cors";
import bodyParser from "body-parser";

import initRouter from "./module/init.routes";

import env from "./env";
import ErrorHandler from "./middleware/errorHandler";
import { DATE_TIME_FORMAT } from "./config/format.enum";

//NOTE - setup app
const PORT = env.PORT;
const app = express();

//NOTE - setup cors
app.use(
  cors({
    origin: "*",
  })
);

//NOTE - setup body parser json
app.use(bodyParser.json());

//NOTE - Time request report middleware (custom)
app.use("/", (req: Request, res: Response, next: NextFunction) => {
  const currentDate = new Date();
  const dateFormated = new Intl.DateTimeFormat(
    "es-US",
    DATE_TIME_FORMAT
  ).format(currentDate);
  console.log("Time: ", dateFormated);
  next();
});

//NOTE - init hello api
app.get("/", (req: Request, res: Response) => {
  res.send("Hello, World with TypeScript!");
});

//NOTE - router init
app.use("/api", initRouter);

//NOTE - Serve static files from the 'public' directory
app.use(express.static("public"));

//NOTE -  Error handling middleware
app.use(ErrorHandler);

//NOTE - Start listen port
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
