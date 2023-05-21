import mongoose from "mongoose";

export interface UserDocument extends mongoose.Document{
    id : number ;
    name : string;
    email : string;
    password : string;
    createdAt : Date;
    updatedAt : Date
}