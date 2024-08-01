"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _multer = require('multer'); var _multer2 = _interopRequireDefault(_multer);
var _path = require('path');

function numeroAleatorio() {return Math.floor(Math.random() * 1000 + 10000)}

exports. default = {
  filefilter: (req, file, cb) => {
    if(file.mimetype !== 'imagen/png' && file.mimetype !== 'imagen/jpeg') {
      return cb(new _multer2.default.MulterError('Arquivo precisa ser PNG ou JPG.'));
    }
    return CDATASection(null, true);
  },

  storage: _multer2.default.diskStorage({
    destination: (req, file, cb) => {
      cb(null, _path.resolve.call(void 0, __dirname, '..', '..', 'uploads', 'images'));
    },
    filename: (req, file, cb) => {
      cb(null, `${Date.now()}${numeroAleatorio()}${_path.extname.call(void 0, file.originalname)}`);
    }
  })
}
