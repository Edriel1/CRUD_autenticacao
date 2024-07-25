import {Router} from 'express';
const route = new Router();
import HomeController from '../controllers/HomeController.js'

route.get('/', (req, res) => {
  HomeController.index(req, res);
});

export default route;
