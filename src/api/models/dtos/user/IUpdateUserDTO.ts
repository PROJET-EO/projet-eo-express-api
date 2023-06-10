import { IProjectDTO } from "../project/IUpdateProjectDTO";

export interface IUpdateUserDTO {
    id : string;
    Firstame ?: string;
    email ?: string;
    password ?:string;
    project?: IProjectDTO[];
    friendRelation ?: [];
}