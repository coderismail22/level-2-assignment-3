import httpStatus from "http-status";
import AppError from "../../errors/AppError";
import { TLoginUser, TUser } from "../user/user.interface";
import { User } from "../user/user.model";

const signUp = async (payload: TUser) => {
  const result = await User.create(payload);
  return result;
};

const signIn = async (payload: TLoginUser) => {
  const { email, password } = payload;
  const userData = await User.findOne({ email }).select("-password");

  // does the user exist
  if (!userData) {
    throw new AppError(httpStatus.NOT_FOUND, "User not found");
  }

  
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
