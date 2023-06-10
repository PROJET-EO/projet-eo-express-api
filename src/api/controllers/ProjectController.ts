import { NextFunction, Response } from "express";

import ProjectService from "../services/ProjectService";
import { ExtendedRequest } from "../models/util/IExtendedRequest";
import { ICreateProjectDTO, ProjectDocument } from "../models";
import { isEmpty } from "lodash";

const getAllProject = async (req:ExtendedRequest, res: Response,next : NextFunction) => {
  const filter = req.body

  try {
    if(!isEmpty(filter)){
        const AllProject = await ProjectService.getAllProjectQueried(filter);
      return res.json({ error: null, data: AllProject });
    }
    else{
        const AllProject = await ProjectService.getAllProject();
        return res.json({ error: null, data: AllProject });
    }
    
      
    } catch (error) {
      return res.status(400).json(error);
    }
   
  };

  const getProjectById = async (req:ExtendedRequest, res: Response,next : NextFunction) => {
      const id = req.params.id
    try {
      const ProjectFound = await ProjectService.getProjectById(id);
      return res.json({ProjectFound });
      
    } catch (error) {
      return res.status(400).json(error);
    }
   
  };


const UpdateProject =async (req: ExtendedRequest,res : Response) => {
  const {name,description,tag,url,owner}= req.body;
  const  id = req.params.id;
  
  try {
      const ProjectTry = await ProjectService.getProjectById(id);
      if(ProjectTry){
        const newProjectData : ICreateProjectDTO = {
          name : name ?? ProjectTry.name,
          description : description ?? ProjectTry.description,
          tag : tag ?? ProjectTry.description,
          url : url ?? ProjectTry.url
          
      }
        const ToUpdateProject = await ProjectService.UpdateProject(newProjectData)
        return res.json({error: null,data : ToUpdateProject})
      }
  throw new Error("404 Project not found ")
  } catch (error) {
    return res.status(400).json(error);
  }}
const removeProject =async (req:ExtendedRequest,res: Response) => {
  const id = req.params.id;
  try {
      await ProjectService.removeProject(id)
      return res.status(202).json({ data : {
        id 
      }})
  } catch (error) {
    
  }
}
  const ProjectController ={
    getAllProject ,
    UpdateProject,
    removeProject,
    getProjectById
  }
  export default ProjectController;