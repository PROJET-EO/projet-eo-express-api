import { UserDocument } from "../../documents";
import { React } from "../../documents/utils/interact";

export interface ICreateCommentDTO{
    owner : UserDocument;
    content : string;
    reactor ?: Reactor[];
    respond ?: ICreateCommentDTO
}
export interface Reactor {
    id : string,
    react : React
}