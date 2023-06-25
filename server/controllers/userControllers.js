import User from "../models/userModel.js";
import bcrypt from "bcryptjs";

const registration = async (req, res) => {
  try {
    const { tel, password } = req.body;

    if (!tel || !password) {
      return res.status(422).send("all fields are required");
    }

    let checkPassword = await User.findOne({ tel: tel });
    if (checkPassword) {
      return res.status(422).send("User already exists");
    }

    const hashPassword = await bcrypt.hash(password, 10);
    let body = { ...req.body };
    body.password = hashPassword;

    const user = await User.create(body);
    res.status(200).send(user);
  } catch (error) {
    console.log(error);
  }
};

export { registration };
