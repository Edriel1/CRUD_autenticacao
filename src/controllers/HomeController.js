import Aluno from '../models/Aluno';

class Home {
  async index(req, res) {
    try{
      const novoAluno = await Aluno.create({
      nome: 'Luiz',
      sobrenome: 'Otavio',
      email: 'luiz@gmail.com',
      idade: 112,
      peso: 300,
      altura:2.5,
    });

      res.json(novoAluno);

    } catch(e) {
      console.log(e);
      res.status(500).json(e);
    };

    };
  }

export default new Home();
