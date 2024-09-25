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
  const user = await User.findOne({ email });

  // does the user exist
  if (!user) {
    throw new AppError(httpStatus.NOT_FOUND, "User not found");
  }

  // hashed password from db
  const hashedPassword = user?.password;

  // do passwords match (from statics)
  const doPasswordsMatch = await User.doPasswordsMatch(
    password,
    hashedPassword,
  );

  if (!doPasswordsMatch) {
    throw new AppError(httpStatus.FORBIDDEN, "Passwords do not match.");
  }

  const userData = user.toObject() as Partial<TUser>;
  delete userData.password;
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
