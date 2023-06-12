const jwt = require("jsonwebtoken");
import { NextFunction, Response } from "express";
import { ExtendedRequest } from "../models/util/IExtendedRequest";
import { verifyTokenFromUser } from "../utils/jwt";
import ErrorResponse from "../utils/errorResponse";

export const verifyToken = async (
    req: ExtendedRequest,
    res: Response,
    next: NextFunction
) => {
  try {
    const {headers} = req

    const token = headers.authorization?.split(' ')[1];
    if (!token) return res.status(401).json({error: "Access Denied"});

    const verified = await verifyTokenFromUser(token)
    if (!verified) {
      res.status(401).json({error: "no token"})
    }
    next();
  } catch (error: any) {
    if (error.name === 'JsonWebTokenError') {
      return res.status(401).json({ error: "Token is not valid" });
    }
    return res.status(error.status).json({ error: error.message });
  }
};
