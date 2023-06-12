import { NextFunction, Response } from "express";

import userService from "../services/UserService";
import { ExtendedRequest } from "../models/util/IExtendedRequest";
import { ICreateUserDTO, UserDocument } from "../models";
import { FilterQuery } from "mongoose";
import { isEmpty } from "lodash";
import { userDomain, userMapper } from "./mapper/UserMapper";
import { resolve } from "path";

const getAllUser = async (
  req: ExtendedRequest,
  res: Response,
  next: NextFunction
) => {
  const filter = req.body;

  try {
    if (!isEmpty(filter)) {
      const AllUser = await userService.getAllUserQueried(filter);
      const user = AllUser.map((e) => userDomain(e));
      return res.json({ error: null, data: user });
    } else {
      const AllUser = await userService.getAllUser();
      const user = AllUser.map((e) => userDomain(e));
      return res.json({ error: null, data: user });
    }
  } catch (error) {
    return res.status(400).json(error);
  }
};
const getUserById = async (
  req: ExtendedRequest,
  res: Response,
  next: NextFunction
) => {
  const id = req.params.id;
  try {
    const userFound = await userService.getUserById(id);
    return res.json({ error: null, data: userFound });
  } catch (error) {
    return res.status(400).json(error);
  }
};

const getUserByName = async (
  req: ExtendedRequest,
  res: Response,
  next: NextFunction
) => {
  const { name } = req.query;
  try {
    if (name) {
      const userFound = await userService.getUserByName(name.toString());
      return res.json({ error: null, data: userFound });
    }
  } catch (error) {
    return res.status(400).json(error);
  }
};

const UpdateUser = async (req: ExtendedRequest, res: Response) => {
  const { firstName, LastName, email, password, birthdate } = req.body;
  const id = req.params.id;

  try {
    const userTry = await userService.getUserById(id);
    if (userTry) {
      const newUserData: ICreateUserDTO = {
        email: email ?? userTry.email,
        firstName: firstName ?? userTry.firstName,
        lastName: LastName ?? userTry.lastName,
        password: password ?? userTry.password,
        birthdate: birthdate ?? userTry.birthdate,
      };
      const ToUpdateUser = await userService.UpdateUser(newUserData);
      return res.json({ error: null, data: ToUpdateUser });
    }
    throw new Error("404 User not found ");
  } catch (error) {
    return res.status(400).json(error);
  }
};
const removeUser = async (req: ExtendedRequest, res: Response) => {
  const id = req.params.id;
  try {
    await userService.removeUser(id);
    return res.status(202).json({
      data: {
        id,
      },
    });
  } catch (error) {}
};
const userController = {
  getAllUser,
  UpdateUser,
  removeUser,
  getUserById,
  getUserByName,
};
export default userController;
