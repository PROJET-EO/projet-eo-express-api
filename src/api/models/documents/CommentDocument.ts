import { UserDocument } from "./UserDocument";
import { React } from "./utils/interact";


export interface CommentDocument {
    id : string;
    owner : UserDocument;
    content : string;
    Reactor : Omit<UserDocument,React>[];
    respond : Comment[]
}