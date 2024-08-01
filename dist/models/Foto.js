"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _sequelize = require('sequelize'); var _sequelize2 = _interopRequireDefault(_sequelize);
var _appConfigjs = require('../config/appConfig.js'); var _appConfigjs2 = _interopRequireDefault(_appConfigjs);

 class Foto extends _sequelize.Model {
  static init(sequelize) {
    super.init({
      filename: {
        type: _sequelize2.default.STRING,
        defaultValue: '',
        validate: {
          notEmpty: {
            msg: 'Filename nao pode estar vazio.',
          },
        },},
        originalname: {
          type: _sequelize2.default.STRING,
          defaultValue: '',
          validate: {
            notEmpty: {
              msg: 'Originalname nao pode estar vazio.',
            }
          }
        },
        url: {
          type:_sequelize2.default.VIRTUAL,
          get() {
            return `${_appConfigjs2.default.url}/images/${this.getDataValue('filename')}`
          }
        }
    }, {
          sequelize,
        });
        return this;
  }

  static associate(models) {
    this.belongsTo(models.Aluno, {foreignKey: 'aluno_id'});
  }
} exports.default = Foto;
