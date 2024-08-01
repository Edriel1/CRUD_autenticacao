"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _express = require('express');
const route = new (0, _express.Router)();
var _AlunoControllerjs = require('../controllers/AlunoController.js'); var _AlunoControllerjs2 = _interopRequireDefault(_AlunoControllerjs);
var _loginRequiredjs = require('../middlewares/loginRequired.js'); var _loginRequiredjs2 = _interopRequireDefault(_loginRequiredjs);

route.post('/', _AlunoControllerjs2.default.create);
route.get('/', _loginRequiredjs2.default, _AlunoControllerjs2.default.findAll);
route.get('/:id', _loginRequiredjs2.default, _AlunoControllerjs2.default.findByID);
route.put('/:id', _loginRequiredjs2.default, _AlunoControllerjs2.default.update);
route.delete('/:id', _loginRequiredjs2.default, _AlunoControllerjs2.default.delete);

exports. default = route;
