import express from "express";
import userController from "../controllers/UserController";
import { verifyToken } from "../middleware/TokenMiddleware";
const router = express.Router();

// route: /api/users for all users
router.route('/users').get(verifyToken, userController.getAllUser);

// route: /api/user/create for creating new user
router.route('/user/update/:id').put(verifyToken, userController.UpdateUser)
router.route('/user/:id').delete(verifyToken, userController.removeUser)
router.route('/user/:id').get(verifyToken, userController.getUserById)
router.route('/user').get(verifyToken, userController.getUserByName)


export = router;
