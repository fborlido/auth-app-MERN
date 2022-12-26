import jwt from "jsonwebtoken";

const validateUser = (req, res, next) => {
  try {
    const token = req.cookies.access_token;

    if (!token) {
      throw new Error("No token provided");
    }

    const user = jwt.verify(token, process.env.JWT_SECRET);

    req.user = user;
    next();
  } catch (error) {
    console.log(error);
    return res.status(403).send(error.message || "Unauthorized");
  }
};

export default validateUser;
