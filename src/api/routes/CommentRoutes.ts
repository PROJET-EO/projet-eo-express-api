import express from "express";
import commentController from "../controllers/CommentController";
import { verifyToken } from "../middleware/TokenMiddleware";
const router = express.Router();


// route: /api/comments for all comments
router.route('/comments').get(verifyToken, commentController.getAllComment);

// route: /api/comment/create for creating new comment
router.route('/comment/update/:id').put(verifyToken, commentController.UpdateComment)
router.route('/comment/:id').delete(verifyToken, commentController.removeComment)
router.route('/comment').post(verifyToken, commentController.createComment)


export = router;
