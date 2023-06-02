import { Response } from "express";

import userService from "../services/UserService";
import { ExtendedRequest } from "../models/util/IExtendedRequest";

const getAllUser = async (req:ExtendedRequest, res: Response) => {
    try {
      const AllUser = await userService.getAllUser();
      return res.json({ error: null, data: AllUser });
    } catch (error) {
      return res.status(400).json(error);
    }
  };

  const userController ={
    getAllUser 
  }
  export default userController;