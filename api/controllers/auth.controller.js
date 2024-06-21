import User from "../models/user.model.js";
import bcryptjs from "bcryptjs";

export const signup = async (req, res) => {
  const { username, password, email } = req.body;
  if (
    !username ||
    !password ||
    !email ||
    username === "" ||
    password === "" ||
    email === ""
  ) {
    return res.status(400).json({ message: "All Fields Are Required" });
  }
  const hashedPassword = bcryptjs.hashSync(password, 10);

  const newUser = new User({
    username: username,
    password: hashedPassword,
    email: email,
  });
  try {
    await newUser.save();
    res.json("Signup Succesful");
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};
