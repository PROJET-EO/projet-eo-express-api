import { Schema, model, Model } from "mongoose";
import { ProjectDocument } from "../documents";
import { ProjectModel } from "../types/ProjectModel";

let projectSchema = new Schema<ProjectDocument, ProjectModel>({
  name: {
    type: String,
    required: true,
    min: 3,
    max: 255,
  },
});

export const Project = model<ProjectDocument, ProjectModel>(
  "project",
  projectSchema
);
