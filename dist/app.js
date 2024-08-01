"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _dotenv = require('dotenv'); var _dotenv2 = _interopRequireDefault(_dotenv);
_dotenv2.default.config();
require('./database/index.js');
var _express = require('express'); var _express2 = _interopRequireDefault(_express);
var _path = require('path');

var _AlunosRoutesjs = require('./routes/AlunosRoutes.js'); var _AlunosRoutesjs2 = _interopRequireDefault(_AlunosRoutesjs);
var _userRoutesjs = require('./routes/userRoutes.js'); var _userRoutesjs2 = _interopRequireDefault(_userRoutesjs);
var _tokenRoutesjs = require('./routes/tokenRoutes.js'); var _tokenRoutesjs2 = _interopRequireDefault(_tokenRoutesjs);
var _FotoRoutesjs = require('./routes/FotoRoutes.js'); var _FotoRoutesjs2 = _interopRequireDefault(_FotoRoutesjs);

class App {
  constructor() {
    this.app = _express2.default.call(void 0, );
    this.middlewares();
    this.route();
  }

  middlewares() {
    this.app.use(_express2.default.urlencoded({extended: true}));
    this.app.use(_express2.default.json());
    this.app.use(_express2.default.static(_path.resolve.call(void 0, __dirname, 'uploads')));
  }

  route() {
    this.app.use('/aluno/', _AlunosRoutesjs2.default);
    this.app.use('/user/', _userRoutesjs2.default);
    this.app.use('/tokens/', _tokenRoutesjs2.default);
    this.app.use('/fotos/', _FotoRoutesjs2.default);
  }
}

exports. default = new App().app;
