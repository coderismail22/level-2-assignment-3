import { TLoginUser, TUser } from '../user/user.interface';

const signUp = async (payload: TUser) => {
  // logic
};

const signIn = async (payload: TLoginUser) => {
  // logic
};

export const AuthServices = {
  signUp,
  signIn,
};
