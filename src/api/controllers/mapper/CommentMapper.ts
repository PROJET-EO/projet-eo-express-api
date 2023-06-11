import { CommentDocument, ICreateCommentDTO } from "../../models";
import { userDomain } from "./UserMapper";
import { CommentDomainType } from "./types/comment";

export const CommentDomain = (comment: ICreateCommentDTO, id: string) => {
  const domain: CommentDomainType = {
    id: id,
    owner: userDomain(comment.owner),
    content: comment.content,
  };
  return domain;
};
