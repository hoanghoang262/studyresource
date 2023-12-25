import Router from "express-promise-router";
import authRouter from "./auth/auth.routes";

const routes = Router();
routes.use("/auth", authRouter);

export default routes;
