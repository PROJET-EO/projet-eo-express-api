
import { comment } from "../models/schemas/CommentSchema";
import {  CommentDocument, UserDocument } from "../models";
import { ICreateCommentDTO } from "../models/dtos/comment/ICreateCommentDTO";
import mongoose from "mongoose";


const createNewComment = async (CommentDomain: ICreateCommentDTO) => {
  const newComment = await comment.create(CommentDomain);
  return newComment;
};


const getCommentByQuery = async (query: UserDocument) => {
  const CommentWithQuery = await comment.findOne({
    query
  });
  return CommentWithQuery;
};
const UpdateComment =async (CommentDomain : CommentDocument) => {
  const CommentToUpdate = await comment.updateOne({CommentDomain})
  return CommentToUpdate;
}
const getCommentById = async (id: mongoose.Types.ObjectId | string) => {
    const CommentFinded = await comment.findById(id)
    return CommentFinded;
  };
const getAllCommentQueried =async (req : any = {}) => {
    const filteredQuery = {
        metadata: {
          $elemMatch: {
            $and: Object.entries(req).map(([key, value]) => ({ [key]: value }))
          }
        }
      };
  if(req){
    const queryiedComment = await comment.find(filteredQuery);
    return queryiedComment
  } 
    const CommentAll = await comment.find();
  return CommentAll;
}
const getAllComment =async () => {
    const CommentAll = await comment.find();
    return CommentAll;
  }
const removeComment =async (id : string) => {
     await comment.findByIdAndDelete(id);
  
}

const CommentService = {
  createNewComment,
  getCommentByQuery,
  getAllCommentQueried,
  getCommentById,
  UpdateComment,
  removeComment,
  getAllComment
};

export default CommentService;
