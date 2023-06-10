import { Schema, model } from "mongoose";
import { CommentDocument } from "../documents";
import { CommentModel } from "../types/CommentModel";
import { User } from "./UserSchema";

let commentSchema = new Schema<CommentDocument, CommentModel>({
    content: {
      type: String,
      required: true
    },
  });
  
  export const comment = model<CommentDocument, CommentModel>(
    "comment",
    commentSchema
  );
  