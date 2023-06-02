import express from "express";
import userController from "../controllers/UserController";
import authController from "../controllers/AuthController";
const router = express.Router();

// route: /api/users for getting all users
router.route('/users').get(userController.getAllUser);


export = router;
