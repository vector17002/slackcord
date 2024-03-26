import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
  nickname: {
    type: String,
    required: true,
  },
  username: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
    minlength: 6,
  },
  gender: {
    type: String,
    requied: true,
    enum: ["male", "female"],
  },
  profilePic: {
    type: String,
    default: "",
  },
});

const User = mongoose.model("User", UserSchema);

export default User;
