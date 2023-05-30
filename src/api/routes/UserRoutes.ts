import express from "express";
import userController from "../controllers/UserController";

const router = express.Router();

// route: /api/users for getting all users by userController
router.get("/users");

export = router;
