import "reflect-metadata";
import express, { NextFunction, Request, Response } from "express";
import 'express-async-errors';
import './database';
import { router } from "./routes";
import { AppError } from "./errors/app-error";

const app = express();

app.use(express.json());

app.use(router);

app.use(
  (err: Error, request: Request, response: Response, next: NextFunction) => {
    console.log(err);
    if (err instanceof AppError) {
      return response
        .status(err.statusCode)
        .json({ errorMessage: err.message });
    }

    return response.status(500).json({
      status: "error",
      message: "Internal error",
    });
  }
);

app.listen(3333, () => console.log("Server is running"));
