import multer from 'multer';
import multerConfig from '../config/multerConfig.js';

import Foto from '../models/Foto.js';

const upload = multer(multerConfig).single('foto');

class FotoController {
  create(req, res) {
    return  upload(req, res, async error => {
      if(error){
        return res.status(400).json({errors: [error.code]});
      }

      try{

      const {originalname, filename} = req.file;
      const {aluno_id} = req.body;
      const foto = await Foto.create({originalname, filename, aluno_id});
      return res.json(foto);
      } catch(e) {return res.status(400).json({errors: ['Aluno nao existe.']});}
    });
  }
}

export default new FotoController();
