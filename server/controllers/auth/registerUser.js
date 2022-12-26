import bc from "bcrypt";

import User from "../../models/User.js";

const registerUser = async (req, res) => {
  try {
    const { name, email, password } = req.body;

    if (!name || !email || !password) {
      throw new Error("Missing parameters");
    }

    const user = await User.findOne({ email: email });

    if (user) {
      throw new Error("User already exists");
    }

    const hashedPw = await bc.hash(password, 10);

    const newUser = new User({
      name,
      email,
      password: hashedPw,
    });

    await newUser.save();

    return res.status(200).send("User registered Successfully");
  } catch (error) {
    console.log(error);
    return res.status(500).send(error.message || "Server error");
  }
};

export default registerUser;
