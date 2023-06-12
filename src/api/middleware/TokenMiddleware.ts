import { NextFunction, Response } from "express";
import { ExtendedRequest } from "../models/util/IExtendedRequest";
import { verifyTokenFromUser } from "../utils/jwt";
import userService from "../services/UserService";

export const verifyToken = async (
  req: ExtendedRequest,
  res: Response,
  next: NextFunction
) => {
  const {headers}= req
  if (!headers.authorization) return res.status(401).json({ error: "Access Denied" });
  const token = headers.authorization.split(" ")[1]
  if (!token) return res.status(401).json({ error: "Access Denied" });

  
  try {
    const verified = await verifyTokenFromUser(token)
    if(!verified){
      res.status(401).json({ error: "no token" })
    }

    const user = await userService.getUserById(verified.id)
    req.loggedUsed = user as any;
    next();
  } catch (error) {
    res.status(400).json({ error: "Token is not valid" });
  }
};