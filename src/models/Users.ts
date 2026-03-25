import mongoose, { Schema, Document } from "mongoose";

export interface Message extends Document {
  content: string;
  createdAt: Date;
}

const MessageSchema: Schema<Message> = new Schema({
  content: {
    type: String,
    required: true,
  },
  createdAt: {
    type: Date,
    required: true,
  },
});

export interface User extends Document {
  username: string;
  email: string;
  password: string;
  verificationCode: string;
  isVerified: boolean;
  verificationCodeExpiry: Date;
  isAcceptingMessages: boolean;
  createdAt: Date;
  message: Message[];
}

const UserSchema: Schema<User> = new Schema({
  username: {
    type: String,
    required: [true, "username required"],
    trim: true,
    unique: true,
  },
  email: {
    type: String,
    required: [true, "email is required"],
    unique: true,
    match: [
      /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
      "Please use a valid email",
    ],
  },
  password: {
    type: String,
    required: [true, "password is requried"],
  },
  verificationCode: {
    type: String,
    required: [true, "verify code is requried"],
  },
  verificationCodeExpiry: {
    type: Date,
    required: [true, "verify code expiry is requried"],
  },
  isVerified: {
    type: Boolean,
    required: [true, "verification is requried"],
    default: false,
  },
  isAcceptingMessages: {
    type: Boolean,
    default: true,
  },
  message: {
    type: [MessageSchema],
  },
  createdAt: {
    type: Date,
    required: true,
  },
});


const UserModel = (mongoose.models.User as mongoose.Model<User> )|| (mongoose.model<User>("User", UserSchema));
export default UserModel;