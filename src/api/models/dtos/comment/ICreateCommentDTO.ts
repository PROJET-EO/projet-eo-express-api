import { UserDocument } from "../../documents";
import { React } from "../../documents/utils/interact";

export interface ICreateCommentDTO{
    owner : UserDocument;
    content : string;
}
export interface Reactor {
    react : React
}