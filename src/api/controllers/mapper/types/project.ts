import { RestUser } from "../UserMapper";

export type ProjectDomain = {
  id: string;
  name: string;
  owner: RestUser;
  url: string;
  tag?: string;
  description?: string;
  createdAt?: string;
};
