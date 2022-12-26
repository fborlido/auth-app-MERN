import { useMutation } from "@tanstack/react-query";
import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { deletePost } from "../api/posts";

const Post = () => {
  const { state } = useLocation();

  const navigate = useNavigate();

  const {mutate} = useMutation({
    mutationFn: deletePost,
    onSuccess: () => navigate("/"),
  });

  return (
    <>
      <div className="bg-white shadow-sm p-4 rounded-md border">
        <h2 className="text-sky-600 font-bold text-2xl mb-4">{state.title}</h2>
        <p>{state.content}</p>
      </div>
      <button onClick={() => mutate(state._id)} className="bg-rose-500 text-white py-2 px-8 rounded-md ml-auto block mt-4 hover:bg-rose-600 transition-colors font-bold">
        Delete
      </button>
    </>
  );
};

export default Post;
