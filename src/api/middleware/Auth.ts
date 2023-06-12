import { verifyToken } from "./TokenMiddleware";
import { NextFunction, Response } from "express";
import { ExtendedRequest } from "../models/util/IExtendedRequest";

export const protect = async (req: ExtendedRequest, res: Response, next: NextFunction) => {
    try {
        verifyToken(req, res, () => {
          next();
        });
      } catch (error) {
        return next(error);
      }
}