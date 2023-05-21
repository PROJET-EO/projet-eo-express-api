import { Request, Response } from "express";
import { createUser } from "../services/user.service";
import { CreateUserInput } from "../models/validator/user.schema";

// TODO: get lodash to get omit JSON for created user
export const createUserHandler = async(req: Request<{},{},CreateUserInput['body']>,res:Response)=>{
    try {
        const user = await createUser(req.body)
        return res.send(omit.(user.toJSON(),"password")) ; 
    } catch (e) {
        console.log(e); // TODO : remove this what if we want a prod version
        return res.status(409).send(e.message)
    }
}