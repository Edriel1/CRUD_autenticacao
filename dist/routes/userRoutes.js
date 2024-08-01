"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _express = require('express');
var _UserControllerjs = require('../controllers/UserController.js'); var _UserControllerjs2 = _interopRequireDefault(_UserControllerjs);
var _loginRequiredjs = require('../middlewares/loginRequired.js'); var _loginRequiredjs2 = _interopRequireDefault(_loginRequiredjs);
const router = new (0, _express.Router)();

router.post('/', _loginRequiredjs2.default, (req, res) => _UserControllerjs2.default.create(req, res));
router.get('/', _loginRequiredjs2.default, (req, res) => _UserControllerjs2.default.findAll(req, res));
router.get('/:id', (req, res) => _UserControllerjs2.default.findByID(req, res));
router.put('/', _loginRequiredjs2.default, (req, res) => _UserControllerjs2.default.update(req, res));
router.delete('/:id', (req, res) => _UserControllerjs2.default.delete(req, res));

exports. default = router;
