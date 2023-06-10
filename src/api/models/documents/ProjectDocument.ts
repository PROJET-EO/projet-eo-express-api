import { CommentDocument } from "./CommentDocument";
import { UserDocument } from "./UserDocument";
import { React } from "./utils/interact";

export interface ProjectDocument {
    id : string;
    name: string;
    description: string;
    url: string;
    tag : string;
    contributors: UserDocument[];
    comment : CommentDocument[];
    reactor: React[]
}