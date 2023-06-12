import { ICreateUserDTO } from "../models/dtos/user/ICreateUserDTO";
import mongoose, { FilterQuery } from "mongoose";
import { User } from "../models/schemas/UserSchema";
import { UserDocument } from "../models";
import ErrorResponse from "../utils/errorResponse";

const createNewUser = async (user: ICreateUserDTO) => {
  const newUser = await User.create(user);
  return newUser;
};

const getUserById = async (id: mongoose.Types.ObjectId | string) => {
  const user = await User.findById(id);
  return user;
};

const getUserByEmail = async (email: string) => {
  const user = await User.findOne({
    email: email,
  });
  return user;
};
const getUserByName = async (name: string) => {
 
  try {
    const user = await User.findOne(  {
      firstName : name
    });
    return user;
  } catch (error) {
    throw new ErrorResponse("User not found",404)
  }
};
const UpdateUser =async (user : ICreateUserDTO) => {
  const userToUpdate = await User.updateOne({user})
  return userToUpdate;
}

const getAllUser =async (req : any) => {
  const filteredQuery = {
    metadata: {
      $elemMatch: {
        $and: Object.entries(req).map(([key, value]) => ({ [key]: value }))
      }
    }
  };
  if(req){
    const queryiedUser = await User.find(filteredQuery);
    return queryiedUser
  } 
    const userAll = await User.find();
  return userAll;
}
const removeUser =async (id : string) => {
     await User.findByIdAndDelete(id);
  
}

const userService = {
  createNewUser,
  getUserById,
  getUserByEmail,
  getAllUser,
  UpdateUser,
  removeUser,
  getUserByName
};

export default userService;
