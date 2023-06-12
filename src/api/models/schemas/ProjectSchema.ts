import mongoose, { Schema, model, Model } from "mongoose";
import { ProjectDocument } from "../documents";
import { ProjectModel } from "../types/ProjectModel";

let projectSchema = new Schema<ProjectDocument, ProjectModel>({
  id: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  url: {
    type: String,
    required: true,
  },
  tag: {
    type: String,
    required: true,
  },
  owner: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },
  contributors: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
  ],
  comment: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Comment",
    },
  ],
  reactor: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "React",
    },
  ],
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

export const Project = model<ProjectDocument, ProjectModel>(
  "project",
  projectSchema
);
