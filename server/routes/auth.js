import express from "express";
import getUser from "../controllers/auth/getUser.js";
import loginUser from "../controllers/auth/loginUser.js";
import logoutUser from "../controllers/auth/logoutUser.js";
import registerUser from "../controllers/auth/registerUser.js";
import validateUser from "../middleware/ValidateUser.js";

const router = express.Router();

router.get("/user", [validateUser], getUser);
router.post("/register", registerUser);
router.post("/login", loginUser);
router.post("/logout", logoutUser);

export default router;
