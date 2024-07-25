import dotenv from 'dotenv';
dotenv.config();
import './src/database';
import express from 'express';
import homeRoutes from './src/routes/homeRoutes.js';
import userRoutes from './src/routes/userRoutes.js';

class App {
  constructor() {
    this.app = express();
    this.middlewares();
    this.route();
  }

  middlewares() {
    this.app.use(express.urlencoded({extended: true}));
    this.app.use(express.json());
  }

  route() {
    this.app.use('/', homeRoutes);
    this.app.use('/user/', userRoutes);
  }
}

export default new App().app;
