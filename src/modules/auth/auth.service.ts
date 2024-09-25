import { TLoginUser, TUser } from "../user/user.interface";
import { User } from "../user/user.model";

const signUp = async (payload: TUser) => {
  const result = await User.create(payload);
  return result;
};

const signIn = async (payload: TLoginUser) => {
  const result = await User.find(payload);
  return result;
};

export const AuthServices = {
  signUp,
  signIn,
};
