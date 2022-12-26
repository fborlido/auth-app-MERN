import React from "react";
import { Link } from "react-router-dom";

const Post = ({ post }) => {
  return (
    <Link
      to={`/${post._id}`}
      state={post}
      className="bg-white shadow-[0_0_10px_0] shadow-slate-400 p-4 rounded-md hover:shadow-sky-500 cursor-pointer transition-shadow"
    >
      <h2 className="text-sky-600 font-semibold text-xl mb-1">{post.title}</h2>
      <p>{post.content}</p>
    </Link>
  );
};

export default Post;
