"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _Userjs = require('../models/User.js'); var _Userjs2 = _interopRequireDefault(_Userjs);
var _jsonwebtoken = require('jsonwebtoken'); var _jsonwebtoken2 = _interopRequireDefault(_jsonwebtoken);

class TokenController {
  async store(req, res) {
    const { email = '', password = '' } = req.body;

    if(!email || !password) {
      return res.status(401).json({
        errors: ['Credenciais invalidas'],
      });
    }

    const user = await _Userjs2.default.findOne({where: {email}});

    if(!user) {
      return res.status(401).json({
        errors: ['Usuario nao existe'],
      });
    }
    if(!(await user.passwordIsValid(password))){
      return res.status(401).json({
        errors: ['Senha invalida'],
      })
    }

    const { id } = user;
    const token = _jsonwebtoken2.default.sign({ id, email}, process.env.TOKEN_SECRET, {
      expiresIn: process.env.TOKEN_EXPIRATION,
    });

    res.json({seuToken: token});
  }
}

exports. default = new TokenController();
