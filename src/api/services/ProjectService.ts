import mongoose, { FilterQuery } from "mongoose";
import { Project } from "../models/schemas/ProjectSchema";
import { ProjectDocument, UserDocument } from "../models";
import { ICreateProjectDTO } from "../models/dtos/project/ICreateProjectDTO";
import { descriptionSetter } from "./utils/description";

const createNewProject = async (ProjectDomain: ICreateProjectDTO) => {
  ProjectDomain.createdAt = new Date().toString();
  const newProject = await Project.create(ProjectDomain);
  return newProject;
};

const getProjectById = async (id: mongoose.Types.ObjectId | string) => {
  const ProjectFinded = await Project.findById(id);
  descriptionSetter(ProjectFinded!);
  return ProjectFinded;
};
const getProjectByName = async (name: string) => {
  const ProjectFinded = await Project.findOne({ name: name });
  descriptionSetter(ProjectFinded!);
  return ProjectFinded;
};

const getProjectByQuery = async (query: UserDocument) => {
  const ProjectWithQuery = await Project.findOne({
    query,
  });

  descriptionSetter(ProjectWithQuery!);
  return ProjectWithQuery;
};
const UpdateProject = async (ProjectDomain: ICreateProjectDTO) => {
  ProjectDomain.createdAt = new Date().toString();
  const ProjectToUpdate = await Project.updateOne({ ProjectDomain });
  return ProjectToUpdate;
};

const getAllProjectQueried = async (req: any) => {
  const filteredQuery = {
    metadata: {
      $elemMatch: {
        $and: Object.entries(req).map(([key, value]) => ({ [key]: value }))[0],
      },
    },
  };
  if (req) {
    const queryiedProject = await Project.find(req);
    queryiedProject.forEach((e) => descriptionSetter(e!));
    return queryiedProject;
  }
};
const getAllProject = async () => {
  const ProjectAll = await Project.find()
    .exec()
    .then((users) => {
      const response = {
        count: users.length,
        users: users.map((user) => {
          return {
            _id: user._id,
            name: user.name,
            url: user.url,
          };
        }),
      };
      return response;
    });

  return ProjectAll;
};
const removeProject = async (id: string) => {
  await Project.findByIdAndDelete(id);
};

const ProjectService = {
  createNewProject,
  getProjectById,
  getProjectByQuery,
  getAllProjectQueried,
  UpdateProject,
  removeProject,
  getAllProject,
};

export default ProjectService;
