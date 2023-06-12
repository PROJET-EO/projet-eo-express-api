import express from "express";
import projectController from "../controllers/ProjectController";
import {protect} from "../middleware/Auth";
const router = express.Router();

// route: /api/projects for all projects
router.route('/projects').get(protect, projectController.getAllProject);

// route: /api/project/create for creating new project
router.route('/project/update/:id').put(protect, projectController.UpdateProject)
router.route('/project/:id').delete(protect, projectController.removeProject)
router.route('/project/:id').get(protect, projectController.getProjectById)


export = router;
