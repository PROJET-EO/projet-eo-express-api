import express from "express";
import userController from "../controllers/UserController";
const router = express.Router();

// route: /api/users for all users
router.route('/users').get(userController.getAllUser);

// route: /api/user/create for creating new user
router.route('/user/update/:id').put(userController.UpdateUser)
router.route('/user/:id').delete(userController.removeUser)
router.route('/user/:id').get(userController.getUserById)


export = router;
