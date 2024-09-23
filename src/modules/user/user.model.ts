// User Schema
import mongoose, { Schema } from 'mongoose';
import { TUser } from './user.interface';

const UserSchema: Schema = new Schema(
  {
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    role: { type: String, enum: ['user', 'admin'], default: 'user' },
    password: { type: String, required: true },
    phone: { type: String, required: true },
    address: { type: String, required: true },
  },
  { timestamps: true },
);

export const User = mongoose.model<TUser & mongoose.Document>(
  'User',
  UserSchema,
);
