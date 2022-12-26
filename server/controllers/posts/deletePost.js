import Post from "../../models/Post.js";

const deletePost = async (req, res) => {
  try {
    const { id } = req.params;

    if (!id) {
      throw new Error("Missing post id");
    }

    const post = await Post.findById(id);

    if (!post) {
      throw new Error("Post not found");
    }

    await Post.deleteOne({ _id: id });

    return res.status(200).send("Post deleted successfully");
  } catch (error) {
    console.log(error);
    return res.status(500).send(error.message || "Server error");
  }
};

export default deletePost;
