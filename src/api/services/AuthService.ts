import userService from "../services/UserService";
import authValidation from "../validations/AuthValidation";
const ApiError = require("../utils/ApiError");
const httpStatus = require("http-status");
import { ICreateUserDTO } from "../models/dtos/user/ICreateUserDTO";
import { ICreateLoginDTO } from "../models/dtos/user/ICreateLoginDTO";
import { UserDocument } from "../models";

const register = async (userBody: ICreateUserDTO) => {
  const { error } = authValidation.registerValidation(userBody);

  if (error) {
    throw new ApiError(httpStatus[400], error.details[0].message);
  }

  const emailExist = await userService.getUserByEmail(userBody.email);

  if (emailExist) {
    throw new ApiError(httpStatus[400], "Email already exists");
  }

  const newUser = await userService.createNewUser(userBody);

  return newUser;
};

const login = async (userBody: ICreateLoginDTO) => {
  const { error } = authValidation.loginValidation(userBody);

  if (error) {
    throw new ApiError(httpStatus[400], error.details[0].message);
  }

  const fetchedUser = await userService.getUserByEmail(userBody.email);

  if (!fetchedUser) {
    throw new ApiError(httpStatus[400], "Email is wrong");
  }

  const validPassword: string = await fetchedUser.comparePassword(
    userBody.password
  );

  if (!validPassword) {
    throw new ApiError(httpStatus[400], "Wrong password");
  }
  return fetchedUser;
};

const whoami = async (user: any) => {
  const userLogged = await userService.getUserByName(user);
  return userLogged;
};

const authService = {
  register,
  login,
  whoami,
};

export default authService;
