import bc from "bcrypt";
import jwt from "jsonwebtoken";

import User from "../../models/User.js";

const loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      throw new Error("Missing parameters");
    }

    const user = await User.findOne({ email: email });

    if (!user) {
      throw new Error("User does not exist");
    }

    const isPwCorrect = await bc.compare(password, user.password);

    if (!isPwCorrect) {
      throw new Error("Invalid credentials");
    }

    const accessToken = jwt.sign(
      { name: user.name, email: user.email },
      process.env.JWT_SECRET
    );

    if (!accessToken) {
      throw new Error("Error creating token");
    }

    return res
      .status(200)
      .cookie("access_token", accessToken, { maxAge: 900000, httpOnly: true })
      .send("User logged in successfully");
  } catch (error) {
    console.log(error);
    return res.status(500).send(error.message || "Server error");
  }
};

export default loginUser;
