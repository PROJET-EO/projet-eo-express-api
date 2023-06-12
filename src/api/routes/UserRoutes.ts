import express from "express";
import userController from "../controllers/UserController";
import {protect} from "../middleware/Auth";
const router = express.Router();

// route: /api/users for all users
router.route('/users').get(protect, userController.getAllUser);

// route: /api/user/create for creating new user
router.route('/user/update/:id').put(protect, userController.UpdateUser)
router.route('/user/:id').delete(protect, userController.removeUser)
router.route('/user/:id').get(protect, userController.getUserById)


export = router;
