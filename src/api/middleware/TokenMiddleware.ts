const jwt = require("jsonwebtoken");
import { NextFunction, Response } from "express";
import { ExtendedRequest } from "../models/util/IExtendedRequest";
import { verifyTokenFromUser } from "../utils/jwt";
import ErrorResponse from "../utils/errorResponse";

export const verifyToken = (
  req: ExtendedRequest,
  res: Response,
  next: NextFunction
) => {
  const {headers}= req
  const token = headers.authorization ;
  if (!token) return res.status(401).json({ error: "Access Denied" });

  try {
    const verified =verifyTokenFromUser(token)
    if(!verified){
     res.status(401).json({ error: "no token" })
    }
    next();
  } catch (error) {
    res.status(400).json({ error: "Token is not valid" });
  }
};
