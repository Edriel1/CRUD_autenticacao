"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _sequelize = require('sequelize'); var _sequelize2 = _interopRequireDefault(_sequelize);

 class Aluno extends _sequelize.Model {
  static init(sequelize) {
    super.init({
      nome: {
        type: _sequelize2.default.STRING,
        defaultValue: '',
        validate: {
          len:{
            args: [5, 255],
            msg: 'Nome deve ter entre 5 e 255 caracteres.'
          }
        }
      },
      sobrenome:{
        type: _sequelize2.default.STRING,
        defaultValue: '',
        validate:{
          len: {
          args: [5, 255],
          msg: 'O sobrenome deve ter ente 5 e 255 caracteres'
          }}
      },
      email: {
        type:  _sequelize2.default.STRING,
        defaultValue: '',
        unique: {
          msg: 'Esse email ja existe.'
        },
        validate: {
          isEmail: {
            msg: 'O email deve ser valido'
          }
        }
      },
      idade: {
        type: _sequelize2.default.INTEGER,
        defaultValue: '',
        validate: {
          isInt: {
            msg: 'idade tem que ser um numero inteiro.'
          }}
      },
      peso: {
        type: _sequelize2.default.FLOAT,
        DefaultValue: '',
        validate: {
          isFloat: {
            msg: 'Peso deve ser um valor numerico.'
          }
        }
      },
      altura: {
        type: _sequelize2.default.FLOAT,
        defaultValue: '',
        validate: {
          isFloat: {
            msg: 'Altura deve ser um valor numerico.'
          }
        }
      },
    },
    {
    sequelize,
    });
  return this;
  }

  static associate(models) {
    this.hasMany(models.Foto, {foreignKey: 'aluno_id'});
  }
} exports.default = Aluno;
