import { CommentDocument, UserDocument } from "../../documents";
import { ICreateCommentDTO, Reactor } from "./ICreateCommentDTO";

export interface IUpdateCommentDTO{
    owner : UserDocument;
    content : string;
    reactor ?: Reactor[];
    respond ?: CommentDocument
}