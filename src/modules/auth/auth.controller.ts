import { TLoginUser, TUser } from '../user/user.interface';
import { AuthServices } from './auth.service';

const signUp = async () => {
  const result = await AuthServices.signUp;
  return result;
};

const signIn = async () => {
  const result = await AuthServices.signIn;
  return result;
};

export const AuthControllers = {
  signUp,
  signIn,
};
