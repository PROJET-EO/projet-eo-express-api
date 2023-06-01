import { IProjectDTO } from "../project/IProjectDTO";

export interface User {
    id : string;
    name : string;
    project: IProjectDTO[];
    friendRelation : User[];
}