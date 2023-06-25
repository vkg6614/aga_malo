import mongoose from "mongoose";

const userShema = new mongoose.Schema({
  tel: { type: Number, required: true },
  password: {
    type: String,
    required: true,
    min: [6, "password should be equal or more than 6 characters"],
  },
});

const User = mongoose.model("user", userShema);
export default User;
