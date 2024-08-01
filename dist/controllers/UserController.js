"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; } function _optionalChain(ops) { let lastAccessLHS = undefined; let value = ops[0]; let i = 1; while (i < ops.length) { const op = ops[i]; const fn = ops[i + 1]; i += 2; if ((op === 'optionalAccess' || op === 'optionalCall') && value == null) { return undefined; } if (op === 'access' || op === 'optionalAccess') { lastAccessLHS = value; value = fn(value); } else if (op === 'call' || op === 'optionalCall') { value = fn((...args) => value.call(lastAccessLHS, ...args)); lastAccessLHS = undefined; } } return value; }var _Userjs = require('../models/User.js'); var _Userjs2 = _interopRequireDefault(_Userjs);

class UserControllers {
  async create(req, res) {
    try{
      const novoUser = await _Userjs2.default.create(req.body);

      res.json(novoUser);

    } catch(e) {
      res.status(500).json({
        errors: _optionalChain([e, 'access', _ => _.errors, 'optionalAccess', _2 => _2.map, 'call', _3 => _3((err) => err.message)]),
        });
    };
  };

    async findAll(req, res) {
      try {
        const users = await _Userjs2.default.findAll({attributes: ['id', 'nome', 'email']});
        return res.json(users);
      } catch(e) {
        return res.status(500).json(null);
      }
    };

    async findByID(req, res) {
      try {
        const user = await _Userjs2.default.findByPk(req.params.id);

        const {id, nome, email} = user;
        return res.json({id, nome, email});
      } catch(e) {
        return res.status(500).json(null);
      }
    };

    async update(req, res) {
      try{

        const user = await _Userjs2.default.findByPk(req.userId);

        if(!user) return res.status(500).json({error: ['Usuario nao existe']});

        const novosDados = await user.update(req.body);
        const {id, nome ,email} = novosDados;
        return res.json({id, nome, email});
      } catch(e) {
        console.log(e);
        return res.status(500).json({errors: _optionalChain([e, 'access', _4 => _4.errors, 'optionalAccess', _5 => _5.map, 'call', _6 => _6((err) => err.message)])});
      }
    };

    async delete(req, res) {
      try{
        if(!req.params.id) return res.status(500).json({error: ['id nao enviado']});

        const user = await _Userjs2.default.findByPk(req.params.id);

        if(!user) return res.status(500).json({error: ['usuario nao existe']});

        await user.destroy();

        return res.json(user);
      } catch(e) {
        return res.status(500).json(null);
      }
    }
  }

exports. default = new UserControllers();
