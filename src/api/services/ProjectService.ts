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

const getAllProject =async (req : any) => {
  var filteredQuery : FilterQuery<ProjectDocument> = {},
  acceptableFields = ['tag', ' name', 'description','tag','contributors','comment']; 
  acceptableFields.forEach(function(field) {
    if (req.query[field]) {
      filteredQuery[field] = req.query[field];
    }
  });
  if(req){
    const queryiedProject = await Project.find(filteredQuery);
    return queryiedProject
  } 
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
  getAllProject,
  UpdateProject,
  removeProject
};

export default ProjectService;
