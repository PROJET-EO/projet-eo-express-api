import { RestUser } from "../../../controllers/mapper/UserMapper";
import { UserDocument } from "../../documents";

export interface ICreateProjectDTO {
  name: string;
  owner: RestUser;
  url: string;
  tag?: string;
  description?: string;
  createdAt?: string;
}
