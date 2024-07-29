import Sequelize, {Model} from 'sequelize';

export default class Aluno extends Model {
  static init(sequelize) {
    super.init({
      nome: {
        type: Sequelize.STRING,
        defaultValue: '',
        validate: {
          len:{
            args: [5, 255],
            msg: 'Nome deve ter entre 5 e 255 caracteres.'
          }
        }
      },
      sobrenome:{
        type: Sequelize.STRING,
        defaultValue: '',
        validate:{
          len: {
          args: [5, 255],
          msg: 'O sobrenome deve ter ente 5 e 255 caracteres'
          }}
      },
      email: {
        type:  Sequelize.STRING,
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
        type: Sequelize.INTEGER,
        defaultValue: '',
        validate: {
          isInt: {
            msg: 'idade tem que ser um numero inteiro.'
          }}
      },
      peso: {
        type: Sequelize.FLOAT,
        DefaultValue: '',
        validate: {
          isFloat: {
            msg: 'Peso deve ser um valor numerico.'
          }
        }
      },
      altura: {
        type: Sequelize.FLOAT,
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
}
