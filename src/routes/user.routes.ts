import { Router } from 'express';
import userContr from '../controllers/user.contr.js';

const router = Router();

router.post('/', userContr.createUser);
router.get('/', userContr.getUsers);
router.get('/:id', userContr.getUserById);
router.put('/:id', userContr.updateUser);
router.delete('/:id', userContr.deleteUser);
router.post('/users/login', userContr.login);
export default router;