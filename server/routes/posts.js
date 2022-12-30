import express from "express";
import createPost from "../controllers/posts/createPost.js";
import deletePost from "../controllers/posts/deletePost.js";
import getPosts from "../controllers/posts/getPosts.js";
import updatePost from "../controllers/posts/updatePost.js";
import validateUser from "../middleware/ValidateUser.js";

const router = express.Router();

router.get("/", [validateUser], getPosts);
router.post("/create", [validateUser], createPost);
router.put("/:id", [validateUser], updatePost);
router.delete("/:id", [validateUser], deletePost);

export default router;
