import { Express, Request, Response } from "express";
import { createUserHandler } from "../controllers";
import validate from "../middlewars/validator";
import { createUserSchema } from "../models/validator/user.schema";
const userRoutes=(app : Express)=>{
    app.post('/users',validate(createUserSchema),createUserHandler)
}
export default userRoutes;