import authService from "../services/AuthService";
import tokenService from "../services/TokenService";
import { Response } from "express";
import { ExtendedRequest } from "../models/util/IExtendedRequest";
import userService from "../services/UserService";

const register = async (req: ExtendedRequest, res: Response) => {
  try {
    const savedUser = await authService.register(req.body);

    return res.json({ error: null, data: savedUser._id });
  } catch (error) {
    return res.status(400).json(error);
  }
};

const login = async (req: ExtendedRequest, res: Response) => {
  try {
    const loggedInUser = await authService.login(req.body);

    const username: string =
      loggedInUser.firstName + " " + loggedInUser.lastName;

    const token: string = await tokenService.generateToken(
      username,
      loggedInUser.id
    );

    return res.header("auth-token", token).json({
      error: null,
      data: { loggedInUser, token },
    });
  } catch (error) {
    return res.status(400).json(error);
  }
};
const whoami = async (req: ExtendedRequest, res: Response) => {
  const { name } = req.body;
  try {
    const loggedInUser = await authService.whoami(name);

    return res.status(200).json({
      error: null,
      user: { loggedInUser },
    });
  } catch (error) {
    return res.status(400).json(error);
  }
};

const authController = {
  register,
  login,
  whoami,
};

export default authController;
