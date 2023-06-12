import express from "express";
import authController from "../controllers/AuthController";
import { verifyToken } from "../middleware/TokenMiddleware";
const router = express.Router();

// route: /api/user/register/
router.post("/register", authController.register);

// route: /api/user/login/
router.post("/login", authController.login);
router.route("/whoami").get(verifyToken, authController.whoami);

export = router;
