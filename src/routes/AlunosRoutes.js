import {Router} from 'express';
const route = new Router();
import AlunoController from '../controllers/AlunoController.js';
import loginRequired from '../middlewares/loginRequired.js';

route.post('/', AlunoController.create);
route.get('/', loginRequired, AlunoController.findAll);
route.get('/:id', loginRequired, AlunoController.findByID);
route.put('/:id', loginRequired, AlunoController.update);
route.delete('/:id', loginRequired, AlunoController.delete);

export default route;
