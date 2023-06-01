import { ICommentDTO } from "./features/ICommentDTO";

export interface IProjectDTO{
    id : string;
    name : string;
    url : string;
    description: string;
    contributors: User[];
    comment : ICommentDTO[]
}