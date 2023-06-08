import { Router } from 'express';
import PostController from '../controllers/post.contr.js';
import authMiddleware from '../middleware/auth.js';
const router = Router();

router.post('/', authMiddleware, PostController.createPost);
router.get('/', authMiddleware, PostController.getPosts);
router.get('/:id', authMiddleware, PostController.getPostById);
router.put('/:id', authMiddleware, PostController.updatePost);
router.delete('/:id', authMiddleware, PostController.deletePost);
export default router;
