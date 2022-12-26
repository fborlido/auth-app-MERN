import Post from "../../models/Post.js";

const createPost = async (req, res) => {
  try {
    const { title, content } = req.body;

    if (!title || !content) {
      throw new Error("Missing params");
    }

    const newPost = new Post({ title, content });

    await newPost.save();

    return res.status(200).send("Post created successfully");
  } catch (error) {
    console.log(error);
    return res.status(500).send(error.message || "Server error");
  }
};

export default createPost;
