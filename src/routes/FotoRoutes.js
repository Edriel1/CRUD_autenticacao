import {Router} from 'express';
import fotoController from '../controllers/FotoController.js';
import loginRequired from '../middlewares/loginRequired.js';

const route = new Router();

route.post('/', loginRequired, fotoController.create);

export default route;
