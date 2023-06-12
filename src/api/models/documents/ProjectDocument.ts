import { CommentDocument } from "./CommentDocument";
import { UserDocument } from "./UserDocument";
import { React } from "./utils/interact";

export interface ProjectDocument {
  _id: any;
  id: string;
  name: string;
  description: string;
  url: string;
  tag: string;
  owner: UserDocument;
  contributors: UserDocument[];
  comment: CommentDocument[];
  reactor: React[];
  createdAt: string;
}
