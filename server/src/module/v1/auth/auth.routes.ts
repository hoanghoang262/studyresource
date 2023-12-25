import { Request, Response } from "express";
import Router from "express-promise-router";

const routes = Router();
routes.get("/signin", (req: Request, res: Response) => res.json("hello"));

export default routes;
