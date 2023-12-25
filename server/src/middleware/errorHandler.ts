import { NextFunction, Request, Response } from "express";

const ErrorHandler = (
  err: Error,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  let errorTitle = "Something went wrong!\n";
  // Handle other types of errors here
  res.status(500).send(`${errorTitle}${err}`);
};

export default ErrorHandler;
