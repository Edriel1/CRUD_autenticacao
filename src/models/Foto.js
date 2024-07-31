import Sequelize, {Model} from 'sequelize';
import appConfig from '../config/appConfig.js';

export default class Foto extends Model {
  static init(sequelize) {
    super.init({
      filename: {
        type: Sequelize.STRING,
        defaultValue: '',
        validate: {
          notEmpty: {
            msg: 'Filename nao pode estar vazio.',
          },
        },},
        originalname: {
          type: Sequelize.STRING,
          defaultValue: '',
          validate: {
            notEmpty: {
              msg: 'Originalname nao pode estar vazio.',
            }
          }
        },
        url: {
          type:Sequelize.VIRTUAL,
          get() {
            return `${appConfig.url}/images/${this.getDataValue('filename')}`
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
}
