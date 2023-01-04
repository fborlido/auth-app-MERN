import Post from "../../models/Post.js";
import User from "../../models/User.js";

const createPost = async (req, res) => {
  try {
    const { email } = req.user;
    const { title, content } = req.body;

    if (!title || !content) {
      throw new Error("Missing params");
    }

    const user = await User.findOne({ email: email });

    if (!user) throw new Error("User not found")

    const newPost = new Post({ title, content, author: user._id });

    await newPost.save();

    return res.status(200).send("Post created successfully");
  } catch (error) {
    console.log(error);
    return res.status(500).send(error.message || "Server error");
  }
};

export default createPost;
