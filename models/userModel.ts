
import mongoose, { Schema } from "mongoose";

export interface User extends Document {
  username: string;
  email: string;
  password: string;
}
const UserSchema: Schema<User> = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    trim: true,
    unique: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
});

const UserModel =
  mongoose.models.User ||
  mongoose.model<User>("User", UserSchema);

export default UserModel;
