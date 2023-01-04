import Post from "../../models/Post.js";

const getPosts = async (req, res) => {
  try {
    const posts = await Post.find().populate("author", "name email");
    if (!posts) {
      throw new Error("No posts were found");
    }
    return res.status(200).send(posts);
  } catch (error) {
    console.log(error);
    return res.status(500).send(error.message || "Server error");
  }
};

export default getPosts;
