import { ICreateProjectDTO } from "../models";



const Joi = require("joi");

export const projectValidation = (data: ICreateProjectDTO) => {
  const schema = Joi.object({
    name : Joi.string().min(3).max(255).required("name is required"),
    url: Joi.string().min(3).max(255).required("proejct url is required"),
    owner: Joi.string().min(3).max(255).required("owner is required"),
  });
  return schema.validate(data);
};