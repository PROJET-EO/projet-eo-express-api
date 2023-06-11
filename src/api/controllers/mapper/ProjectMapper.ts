import { ProjectDocument } from "../../models";
import { userDomain } from "./UserMapper";
import { ProjectDomain } from "./types/project";

export const projectToDomain = (project: ProjectDocument) => {
  const projectDomain: ProjectDomain = {
    id: project.id,
    name: project.name,
    owner: userDomain(project?.owner),
    url: project.url,
    tag: project.tag,
    createdAt: project.createdAt,
  };
  return projectDomain;
};
