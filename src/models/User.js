import Sequelize, {Model} from 'sequelize';
import bcryptjs from 'bcryptjs';

export default class User extends Model {
  static init(sequelize) {
    super.init({
      nome: {
        type: Sequelize.STRING,
        defaultValue: '',
        validate: {
          len: {
            args: [3, 255],
            msg: 'Campo nome deve ter entre 3 e 255 caracteres',
          }
        }
      },
      email: {
          type: Sequelize.STRING,
            validate: {
              isEmail: {
                msg: 'Campo email deve ter um email valido',
              }
            }
        },
      password_hash: Sequelize.STRING,
      password: {
        type: Sequelize.VIRTUAL,
        validate: {
          len: {
            args: [6, 50],
            msg: 'A senha deve ter entre 6 e 50 caracteres',
          }
        }
      }
    },
    {
    sequelize,
    });
    this.addHook('beforeSave', async (user) => {
      if(user.password) user.password_hash = await bcryptjs.hash(user.password, 8);
    })
  return this;
  }
}
