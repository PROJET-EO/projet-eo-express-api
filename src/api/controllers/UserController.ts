import { Response } from "express";

import userService from "../services/UserService";
import { ExtendedRequest } from "../models/util/IExtendedRequest";
import { ICreateUserDTO } from "../models";

const getAllUser = async (req:ExtendedRequest, res: Response) => {
  const {user} = req.params
    try {
      const AllUser = await userService.getAllUser();
      return res.json({ error: null, data: AllUser });
    } catch (error) {
      return res.status(400).json(error);
    }
  };

const UpdateUser =async (req: ExtendedRequest,res : Response) => {
  const {firstName,LastName,email,password,birthdate}= req.body;
  const newUserData : ICreateUserDTO = {
      email : email ?? '',
      firstName : firstName ?? '',
      lastName: LastName ?? '',
      password : password ?? '',
      birthdate : birthdate ?? ''
  }
  try {
      
    const ToUpdateUser = await userService.UpdateUser(newUserData)
    return res.json({error: null,data : ToUpdateUser})
  } catch (error) {
    return res.status(400).json(error);
  }
}

  const userController ={
    getAllUser ,
    UpdateUser
  }
  export default userController;