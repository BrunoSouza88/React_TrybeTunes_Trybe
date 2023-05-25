import { ServiceResponse } from 'src/types/ServiceResponses';
import bcrypt from 'bcryptjs';
import UserModel from '../models/user.model';
import JWT from '../../utils/jWT';

type LoginServiceResponse = ServiceResponse<{ token: string }>;

const login = async (username: string, password: string): Promise<LoginServiceResponse> => {
  const user = await UserModel.findOne({ where: { username } });
  if (!user || !bcrypt.compareSync(password, user.dataValues.password)) {
    return { status: 'UNAUTHORIZED', data: { message: 'Username or password invalid' },
    };
  }
  const token = await JWT.sign({ 
    username: user?.dataValues.username,
    password: user?.dataValues.password,
  });
  return {
    status: 'SUCCESSFUL',
    data: {
      token,
    },
  };
};

export default { login };