"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _Aluno = require('../models/Aluno'); var _Aluno2 = _interopRequireDefault(_Aluno);
var _Fotojs = require('../models/Foto.js'); var _Fotojs2 = _interopRequireDefault(_Fotojs);

class AlunoController {
  async create(req, res) {
    try{

      const aluno = await _Aluno2.default.create(req.body);
      return res.json(aluno);

    } catch(e){return res.status(400).json({errors: ['Nao foi possivel criar o aluno', e]})};
  };

  async findByID(req, res) {
    try{
      const aluno = await _Aluno2.default.findByPk(req.params.id, {
        attributes: ['id', 'nome', 'email', 'peso', 'altura', 'idade'],
         order: [['id', 'DESC'], [_Fotojs2.default, 'id', 'DESC']],
         include: {
          model: _Fotojs2.default,
          attributes: ['url', 'filename']
         }
        });

      if(!aluno) return res.status(400).json({errors:['Aluno nao encontrado.']});

      return res.json(aluno);
    } catch(e){return res.status(500).json({errors: ['Nao foi possivel encontrar a informacao.', e]});}
  };

  async findAll(req, res) {
    try{
      return res.json( await _Aluno2.default.findAll({
        attributes: ['id', 'nome', 'email', 'peso', 'altura', 'idade'],
         order: [['id', 'DESC'], [_Fotojs2.default, 'id', 'DESC']],
         include: {
          model: _Fotojs2.default,
          attributes: ['url', 'filename'],
         }
        }));
    }catch(e){return res.status(500).json({errors: ['Nao foi possivel acessar as informacoes ou nao tem informacoes.']});}
  };

  async update(req, res) {
    try{
      const user = await _Aluno2.default.findByPk(req.params.id);
      if(!user) return res.status(400).json({errors: ['Aluno nao encontrado']});

      await user.update(req.body);
      return res.json('Aluno atualizado com sucesso.');
    } catch(e){return res.status(400).json({errors: ['Nao foi possivel atualizar este aluno', e]});}
  };

  async delete(req, res) {
    try{
      await (await _Aluno2.default.findByPk(req.params.id)).destroy();
      return res.json('Aluno deletado com sucesso.');
    } catch(e){return res.status(400).json({errors: ['Nao foi possivel deletar esse usuario.']});}
  };
  }

exports. default = new AlunoController();
