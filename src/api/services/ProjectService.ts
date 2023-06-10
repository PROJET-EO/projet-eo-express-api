import mongoose, { FilterQuery } from "mongoose";
import { Project } from "../models/schemas/ProjectSchema";
import { ProjectDocument, UserDocument } from "../models";
import { ICreateProjectDTO } from "../models/dtos/project/ICreateProjectDTO";

const createNewProject = async (ProjectDomain: ICreateProjectDTO) => {
  const newProject = await Project.create(ProjectDomain);
  return newProject;
};

const getProjectById = async (id: mongoose.Types.ObjectId | string) => {
  const ProjectFinded = await Project.findById(id)
  return ProjectFinded;
};

const getProjectByQuery = async (query: UserDocument) => {
  const ProjectWithQuery = await Project.findOne({
    query
  });
  return ProjectWithQuery;
};
const UpdateProject =async (ProjectDomain : ICreateProjectDTO) => {
  const ProjectToUpdate = await Project.updateOne({ProjectDomain})
  return ProjectToUpdate;
}

const getAllProjectQueried =async (req : any = {}) => {
    const filteredQuery = {
        metadata: {
          $elemMatch: {
            $and: Object.entries(req).map(([key, value]) => ({ [key]: value }))
          }
        }
      };
  if(req){
    const queryiedProject = await Project.find(filteredQuery);
    return queryiedProject
  } 
    const ProjectAll = await Project.find();
  return ProjectAll;
}
const getAllProject =async () => {
    const ProjectAll = await Project.find();
    return ProjectAll;
  }
const removeProject =async (id : string) => {
     await Project.findByIdAndDelete(id);
  
}

const ProjectService = {
  createNewProject,
  getProjectById,
  getProjectByQuery,
  getAllProjectQueried,
  UpdateProject,
  removeProject,
  getAllProject
};

export default ProjectService;
