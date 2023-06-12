import { NextFunction, Response } from "express";

import CommentService from "../services/CommentService";
import { ExtendedRequest } from "../models/util/IExtendedRequest";
import { CommentDocument, ICreateCommentDTO } from "../models";
import { isEmpty } from "lodash";
import userService from "../services/UserService";
import ErrorResponse from "../utils/errorResponse";
import { userMapper } from "./mapper/UserMapper";
import { CommentDomain } from "./mapper/CommentMapper";

const getAllComment = async (
  req: ExtendedRequest,
  res: Response,
  next: NextFunction
) => {
  const filter = req.body;

  try {
    if (!isEmpty(filter)) {
      const AllComment = await CommentService.getAllCommentQueried(filter);
      return res.json({ error: null, data: AllComment });
    } else {
      const AllComment = await CommentService.getAllComment();
      return res.json({ error: null, data: AllComment });
    }
  } catch (error) {
    return res.status(400).json(error);
  }
};

const getCommentById = async (
  req: ExtendedRequest,
  res: Response,
  next: NextFunction
) => {
  const id = req.params.id;
  try {
    const CommentFound = await CommentService.getCommentById(id);
    return res.json({ CommentFound });
  } catch (error) {
    return res.status(400).json(error);
  }
};

const UpdateComment = async (req: ExtendedRequest, res: Response) => {
  const { content, respond, reactor } = req.body;
  const id = req.params.id;

  try {
    const CommentTry = await CommentService.getCommentById(id);
    if (CommentTry) {
      const newCommentData: CommentDocument = {
        id: CommentTry.id,
        content: content ?? CommentTry.content,
        owner: CommentTry.owner,
        reactor: reactor ?? CommentTry.reactor,
        respond: respond ?? CommentTry.respond,
      };
      const data = await CommentService.UpdateComment(newCommentData);
      return res.json({ error: null, data });
    }
    throw new Error("404 Comment not found ");
  } catch (error) {
    return res.status(400).json(error);
  }
};
const removeComment = async (req: ExtendedRequest, res: Response) => {
  const id = req.params.id;
  try {
    await CommentService.removeComment(id);
    return res.status(202).json({
      data: {
        id,
      },
    });
  } catch (error) {}
};
const createComment = async (req: ExtendedRequest, res: Response) => {
  const { content, owner } = req.body;

  try {
    const ownerUser = userService.getUserByName(owner);
    const user = await userMapper(ownerUser);
    const newCommentData: ICreateCommentDTO = {
      owner: user,
      content: content,
    };
    const value = await CommentService.createNewComment(newCommentData);
    const result = CommentDomain(newCommentData, value._id.toString());
    return res.status(201).json({ result });
  } catch (error) {
    throw new ErrorResponse(`${error}`, 500);
  }
};
const CommentController = {
  getAllComment,
  UpdateComment,
  removeComment,
  getCommentById,
  createComment,
};
export default CommentController;
