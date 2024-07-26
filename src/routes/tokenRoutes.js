import { Router } from 'express';
import userController from '../controllers/TokenController.js';

const router = new Router();

router.post('/', userController.store);

export default router;
