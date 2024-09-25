import { Model } from "mongoose";

// User Type
export type TUser = {
  name: string;
  email: string;
  role: "user" | "admin";
  password: string;
  phone: string;
  address: string;
};

// Login
export type TLoginUser = {
  email: string;
  password: string;
};

// Extending TUser
export interface UserModel extends Model<TUser> {
  // static methods

  // password matcher
  doPasswordsMatch(
    plainPassword: string,
    hashedPassword: string,
  ): Promise<boolean>;
}
