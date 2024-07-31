import Aluno from '../models/Aluno';
import Foto from '../models/Foto.js';

class AlunoController {
  async create(req, res) {
    try{

      const aluno = await Aluno.create(req.body);
      return res.json(aluno);

    } catch(e){return res.status(400).json({errors: ['Nao foi possivel criar o aluno', e]})};
  };

  async findByID(req, res) {
    try{
      const aluno = await Aluno.findByPk(req.params.id, {
        attributes: ['id', 'nome', 'email', 'peso', 'altura', 'idade'],
         order: [['id', 'DESC'], [Foto, 'id', 'DESC']],
         include: {
          model: Foto,
          attributes: ['url', 'filename']
         }
        });

      if(!aluno) return res.status(400).json({errors:['Aluno nao encontrado.']});

      return res.json(aluno);
    } catch(e){return res.status(500).json({errors: ['Nao foi possivel encontrar a informacao.', e]});}
  };

  async findAll(req, res) {
    try{
      return res.json( await Aluno.findAll({
        attributes: ['id', 'nome', 'email', 'peso', 'altura', 'idade'],
         order: [['id', 'DESC'], [Foto, 'id', 'DESC']],
         include: {
          model: Foto,
          attributes: ['url', 'filename'],
         }
        }));
    }catch(e){return res.status(500).json({errors: ['Nao foi possivel acessar as informacoes ou nao tem informacoes.']});}
  };

  async update(req, res) {
    try{
      const user = await Aluno.findByPk(req.params.id);
      if(!user) return res.status(400).json({errors: ['Aluno nao encontrado']});

      await user.update(req.body);
      return res.json('Aluno atualizado com sucesso.');
    } catch(e){return res.status(400).json({errors: ['Nao foi possivel atualizar este aluno', e]});}
  };

  async delete(req, res) {
    try{
      await (await Aluno.findByPk(req.params.id)).destroy();
      return res.json('Aluno deletado com sucesso.');
    } catch(e){return res.status(400).json({errors: ['Nao foi possivel deletar esse usuario.']});}
  };
  }

export default new AlunoController();
