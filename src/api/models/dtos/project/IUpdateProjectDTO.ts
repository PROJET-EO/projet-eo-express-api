import { CommentDocument, UserDocument } from "../../documents";



export interface IProjectDTO{
    id : string;
    name : string;
    url : string;
    description: string;
    contributors: UserDocument[];
    comment : CommentDocument[]
}