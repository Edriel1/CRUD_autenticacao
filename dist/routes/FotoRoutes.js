"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _express = require('express');
var _FotoControllerjs = require('../controllers/FotoController.js'); var _FotoControllerjs2 = _interopRequireDefault(_FotoControllerjs);
var _loginRequiredjs = require('../middlewares/loginRequired.js'); var _loginRequiredjs2 = _interopRequireDefault(_loginRequiredjs);

const route = new (0, _express.Router)();

route.post('/', _loginRequiredjs2.default, _FotoControllerjs2.default.create);

exports. default = route;
