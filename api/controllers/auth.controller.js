import User from "../models/user.model.js";
import bcryptjs from "bcryptjs";
import { errorHandler } from "../utils/error.js";

export const signup = async (req, res, next) => {
  const { username, password, email } = req.body;
  if (
    !username ||
    !password ||
    !email ||
    username === "" ||
    password === "" ||
    email === ""
  ) {
    next(errorHandler(400, "All Fields Are Required"));
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
    next(error);
  }
};
