import Post from "../../models/Post.js";

const updatePost = async (req, res) => {
  try {
    const { title, content } = req.body;
    const { id } = req.params;

    if (!title || !content || !id) {
      throw new Error("Missing params");
    }

    const post = await Post.findById(id);

    if (!post) {
      throw new Error("Post not found");
    }

    await Post.updateOne({ _id: id }, { title, content });

    return res.status(200).send("Post updated successfully");
  } catch (error) {
    console.log(error);
    return res.status(500).send(error.message || "Server error");
  }
};

export default updatePost;
