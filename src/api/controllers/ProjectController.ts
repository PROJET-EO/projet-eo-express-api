import { NextFunction, Response } from "express";

import ProjectService from "../services/ProjectService";
import { ExtendedRequest } from "../models/util/IExtendedRequest";
import { ICreateProjectDTO, ProjectDocument, UserDocument } from "../models";
import { isEmpty } from "lodash";
import userService from "../services/UserService";
import ErrorResponse from "../utils/errorResponse";
import { projectValidation } from "../validations/ProjectValidation";
import { userMapper } from "./mapper/UserMapper";

import { projectToDomain } from "./mapper/ProjectMapper";


const getAllProject = async (
  req: ExtendedRequest,
  res: Response,
  next: NextFunction
) => {
  const filter = req.body;

  try {
    if (!isEmpty(filter)) {
      const AllProject = await ProjectService.getAllProjectQueried(filter);
      return res.json({ error: null, data: AllProject });
    } else {
      const AllProject = await ProjectService.getAllProject();
      return res.json({ error: null, data: AllProject });
    }
  } catch (error) {
    return res.status(400).json(error);
  }
  next();
};

const getProjectById = async (
  req: ExtendedRequest,
  res: Response,
  next: NextFunction
) => {
  const id = req.params.id;
  try {
    const ProjectFound = await ProjectService.getProjectById(id);
    return res.json({ ProjectFound });
  } catch (error) {
    return res.status(400).json(error);
  }
};

const UpdateProject = async (req: ExtendedRequest, res: Response) => {
  const { name, description, tag, url, owner } = req.body;
  const id = req.params.id;

  try {

    const ProjectTry = await ProjectService.getProjectById(id);
    if (ProjectTry) {
      const newProjectData: ICreateProjectDTO = {
        name: name ?? ProjectTry.name,
        owner: owner ?? ProjectTry.owner,
        description: description ?? ProjectTry.description,
        tag: tag ?? ProjectTry.description,
        url: url ?? ProjectTry.url,
      };
      const ToUpdateProject = await ProjectService.UpdateProject(
        newProjectData
      );
      return res.json({ error: null, data: ToUpdateProject });
    }
    throw new Error("404 Project not found ");
  } catch (error) {
    return res.status(400).json(error);
  }
};
const removeProject = async (req: ExtendedRequest, res: Response) => {
  const id = req.params.id;
  try {
    await ProjectService.removeProject(id);
    return res.status(202).json({
      data: {
        id,
      },
    });
  } catch (error) {}
};

const createProject = async (req: ExtendedRequest, res: Response) => {
  const { name, url, description, tag, owner } = req.body;
  projectValidation(req.body);
  try {
    const ownerUser = userService.getUserByName(owner);
    const user = await userMapper(ownerUser);
    const newProjectData: ICreateProjectDTO = {
      name: name,
      url: url,
      owner: user,
      description: description,
      tag: tag,
    };
    const data = await ProjectService.createNewProject(newProjectData);
    return res.status(201).json({
      data,
    });
  } catch (error) {
    
  }
}

const createProject =async (req:ExtendedRequest,res: Response) => {
  const {name,url,description,tag,owner} = req.body;
  projectValidation(req.body)
  try {
    const ownerUser = userService.getUserByName(owner);
    const user =await userMapper(ownerUser)
    const newProjectData : ICreateProjectDTO = {
        name : name,
        url : url,
        owner: user,
        description: description,
        tag : tag
    }
      await ProjectService.createNewProject(newProjectData)
      return res.status(202).json({ data : {
        newProjectData
      }})
  } catch (error) {
    throw new ErrorResponse("error occuered on creating project",500)
  }
};
const ProjectController = {
  getAllProject,
  UpdateProject,
  removeProject,
  getProjectById,
  createProject,
};
export default ProjectController;
