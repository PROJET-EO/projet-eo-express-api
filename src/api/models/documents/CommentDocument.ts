import { UserDocument } from "./UserDocument";
import { React } from "./utils/interact";


export interface CommentDocument {
    id : string;
    owner : UserDocument;
    content : string;
    reactor : Omit<UserDocument,React>[];
    respond : Comment[]
}