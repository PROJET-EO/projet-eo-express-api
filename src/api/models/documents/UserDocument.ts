import { IProjectDTO } from "../dtos/project/IUpdateProjectDTO";
import { ProjectDocument } from "./ProjectDocument";

export interface UserDocument {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  birthdate: Date;
  JoinAt?: Date;
  project?: ProjectDocument[];
  friendRelation?: UserDocument[];
}
export interface LogUser {
  id: string;
  email: string;
}
export interface UserActionDomain {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
}

export interface UserMethods {
  comparePassword(password: string): Promise<string>;
}
