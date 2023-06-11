import express from "express";
import commentController from "../controllers/CommentController";
import { verifyToken } from "../middleware/TokenMiddleware";
const router = express.Router();


// route: /api/comments for all comments
router.route('/comments').get(commentController.getAllComment);

// route: /api/comment/create for creating new comment
router.route('/comment/update/:id').put(commentController.UpdateComment)
router.route('/comment/:id').delete(commentController.removeComment)
router.route('/comment').post(commentController.createComment)


export = router;
