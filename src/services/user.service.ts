import { MongooseDocumentMiddleware } from "mongoose";
import { UserDocument } from "../types/user";
import UserModel from "../models/user.model";

export const createUser = async (input : UserDocument)=>{
    try {
        return await UserModel.create(input)
    } catch (e :any) {
        throw new Error(e)
    }
}
export const getAllUser =async () => {
    try {
        return await UserModel.find()
    } catch (e : any) {
        throw new Error(e)
    }
}
export const getUserById =async (id : number) => {
    try {
        return await UserModel.findById(id)
    } catch (e : any) {
        throw new Error(e)        
    }    
}
export const UpdateUse