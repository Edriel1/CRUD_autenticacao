import dotenv from 'dotenv';
dotenv.config();
import './src/database';
import express from 'express';
import alunoRoutes from './src/routes/AlunosRoutes.js';
import userRoutes from './src/routes/userRoutes.js';
import tokenRoutes from './src/routes/tokenRoutes.js'

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
    this.app.use('/aluno/', alunoRoutes);
    this.app.use('/user/', userRoutes);
    this.app.use('/tokens/', tokenRoutes);
  }
}

export default new App().app;
