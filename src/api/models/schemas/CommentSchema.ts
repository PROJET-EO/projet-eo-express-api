import mongoose, { Schema, model } from "mongoose";
import { CommentDocument } from "../documents";
import { CommentModel } from "../types/CommentModel";
import { User } from "./UserSchema";

let commentSchema = new Schema<CommentDocument, CommentModel>({
  id: {
    type: String,
    required: true,
  },
  owner: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  content: {
    type: String,
    required: true,
  },
  reactor: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
  ],
  respond: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Comment",
    },
  ],
});

export const comment = model<CommentDocument, CommentModel>(
  "comment",
  commentSchema
);
