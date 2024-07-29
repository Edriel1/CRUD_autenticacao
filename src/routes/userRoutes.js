import {Router} from 'express';
import userController from '../controllers/UserController.js';
import loginRequired from '../middlewares/loginRequired.js';
const router = new Router();

router.post('/', (req, res) => userController.create(req, res));
router.get('/', loginRequired, (req, res) => userController.findAll(req, res));
router.get('/:id', (req, res) => userController.findByID(req, res));
router.put('/', loginRequired, (req, res) => userController.update(req, res));
router.delete('/:id', (req, res) => userController.delete(req, res));

export default router;
