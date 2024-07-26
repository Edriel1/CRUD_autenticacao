import {Router} from 'express';
import userController from '../controllers/UserController.js';

const router = new Router();

router.post('/', (req, res) => userController.create(req, res));
router.get('/', (req, res) => userController.findAll(req, res));
router.get('/:id', (req, res) => userController.findByID(req, res));
router.put('/:id', (req, res) => userController.update(req, res));
router.delete('/:id', (req, res) => userController.delete(req, res));

export default router;
