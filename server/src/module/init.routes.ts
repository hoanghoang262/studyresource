import Router from "express-promise-router";
import v1InitRouter from "./v1/initV1.routes";

const routes = Router();
routes.use("/v1", v1InitRouter);

export default routes;
