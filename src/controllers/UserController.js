import User from '../models/User.js';

class UserControllers {
  async create(req, res) {
    try{
      const novoUser = await User.create(req.body);

      res.json(novoUser);

    } catch(e) {
      res.status(500).json({
        errors: e.errors?.map((err) => err.message),
        });
    };
  };

    async findAll(req, res) {
      try {
        const users = await User.findAll({attributes: ['id', 'nome', 'email']});
        return res.json(users);
      } catch(e) {
        return res.status(500).json(null);
      }
    };

    async findByID(req, res) {
      try {
        const user = await User.findByPk(req.params.id);

        const {id, nome, email} = user;
        return res.json({id, nome, email});
      } catch(e) {
        return res.status(500).json(null);
      }
    };

    async update(req, res) {
      try{

        const user = await User.findByPk(req.userId);

        if(!user) return res.status(500).json({error: ['Usuario nao existe']});

        const novosDados = await user.update(req.body);
        const {id, nome ,email} = novosDados;
        return res.json({id, nome, email});
      } catch(e) {
        console.log(e);
        return res.status(500).json({errors: e.errors?.map((err) => err.message)});
      }
    };

    async delete(req, res) {
      try{
        if(!req.params.id) return res.status(500).json({error: ['id nao enviado']});

        const user = await User.findByPk(req.params.id);

        if(!user) return res.status(500).json({error: ['usuario nao existe']});

        await user.destroy();

        return res.json(user);
      } catch(e) {
        return res.status(500).json(null);
      }
    }
  }

export default new UserControllers();
