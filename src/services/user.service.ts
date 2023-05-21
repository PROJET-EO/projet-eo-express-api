import { MongooseDocumentMiddleware } from "mongoose";
import { UserDocument } from "../types/user";
import UserModel from "../models/user.model";

// FIXME : get the current version of DocumentDefinition
export const createUser = async (input : DocumentDefinition<Omit< UserDocument , "createdAt"| "updatedAt"|"comparePasswords">>)=>{
    try {
        return await UserModel.create(input)
    } catch (e :any) {
        throw new Error(e)
    }
}