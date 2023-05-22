import mongoose from "mongoose";
import { number } from "zod";
import { UserDocument } from "../types/user";


const projectSchema = new mongoose.Schema({
    id : {type : number,require:true,unique: true},
    name : {type : String,require : true},
    email : {type : String, require : false},
    password :{type : String }
}
,{
    timestamps : true
});

const UserModel = mongoose.model("User",userSchema)
export default UserModel;