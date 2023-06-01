import { IProjectDTO } from "../project/IProjectDTO";

export interface IUpdateUserDTO {
    id : string;
    name ?: string;
    email ?: string;
    password ?:string;
    project?: IProjectDTO[];
    friendRelation ?: [];
}