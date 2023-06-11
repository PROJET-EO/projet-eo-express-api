import { UserDocument } from "../../documents";

export interface ICreateProjectDTO {
  name: string;
  owner: UserDocument;
  url: string;
  tag?: string;
  description?: string;
  createdAt?: string;
}
