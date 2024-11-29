import mongoose, { Schema, Document } from 'mongoose';

export interface IUser extends Document {
  clerkId: string;
  email: string;
  username: string;
  photo?: string;
  firstName: string;
  lastName: string;
  planId: Number;
  creditBalance: number;
  createdAt?: Date;
  updatedAt?: Date;
}

const UserSchema = new Schema<IUser>(
  {
    clerkId: { type: String, required: true, unique: true },
    email: { type: String, required: true, unique: true },
    username: { type: String, required: true, unique: true },
    photo: { type: String }, // Optional, can be a URL
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    planId: { type: Number, default:1 }, // Optional, e.g., a subscription plan ID
    creditBalance: { type: Number, required: true, default: 0 }, // Default to 0
  },
  {
    timestamps: true, // Automatically manages createdAt and updatedAt fields
  }
);

const UserModel = mongoose.model<IUser>('User', UserSchema);

export default UserModel;
