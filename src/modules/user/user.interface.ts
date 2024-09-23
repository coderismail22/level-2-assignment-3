// User Type
export type TUser = {
  name: string;
  email: string;
  role: 'user' | 'admin';
  password: string;
  phone: string;
  address: string;
};

// Login
export type TLoginUser = {
  email: string;
  password: string;
};
