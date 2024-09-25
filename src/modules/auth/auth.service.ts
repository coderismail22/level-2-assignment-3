import { TLoginUser, TUser } from "../user/user.interface";
import { User } from "../user/user.model";

const signUp = async (payload: TUser) => {
  const result = await User.create(payload);
  return result;
};

const signIn = async (payload: TLoginUser) => {
  const { email, password } = payload;
  const userData = await User.find({ email }).select("-password");
  const token = "replaceWithActualToken";
  return {
    userData,
    token,
  };
};

export const AuthServices = {
  signUp,
  signIn,
};
