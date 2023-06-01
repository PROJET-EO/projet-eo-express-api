import { User } from "../../user/IProjectUserDTO";
import { React } from "./utils/interact";

export interface ICommentDTO {
    id : string;
    owner : User;
    content : string;
    Reactor : Omit<User,React>[];
    respond : Comment[]
}