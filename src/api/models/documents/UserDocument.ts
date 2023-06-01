import { IProjectDTO } from "../dtos/project/IUpdateProjectDTO";
import { ProjectDocument } from "./ProjectDocument";

export interface UserDocument {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  birthdate: Date;
  project?: ProjectDocument[];
  friendRelation ?: UserDocument[];
}

export interface UserMethods {
  comparePassword(password: string): Promise<string>;
}
