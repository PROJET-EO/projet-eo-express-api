import express from "express";
import projectController from "../controllers/ProjectController";
import {verifyToken} from "../middleware/TokenMiddleware";
//import { verifyToken } from "../middleware/TokenMiddleware";
// import verifyToken to make jwt signing
const router = express.Router();


// route: /api/projects for all projects
router.route('/projects').get(verifyToken, projectController.getAllProject);

// route: /api/project/create for creating new project
router.route('/project/update/:id').put(verifyToken, projectController.UpdateProject)
router.route('/project/:id').delete(verifyToken, projectController.removeProject)
router.route('/project/:id').get(verifyToken, projectController.getProjectById)
router.route('/project').post(verifyToken, projectController.createProject)


export = router;
