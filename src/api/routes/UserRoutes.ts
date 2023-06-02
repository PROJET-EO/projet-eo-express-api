import express from "express";
import userController from "../controllers/UserController";
const router = express.Router();

// route: /api/users for all users
router.route('/users').get(userController.getAllUser);

// route: /api/user/create for creating new user
router.route('/user/update').put(userController.UpdateUser)


export = router;
