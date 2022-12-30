import { useMutation } from "@tanstack/react-query";
import React from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { deletePost } from "../api/posts";

const Post = () => {
  const { state } = useLocation();

  const navigate = useNavigate();

  const { mutate } = useMutation({
    mutationFn: deletePost,
    onSuccess: () => navigate("/"),
  });

  return (
    <>
      <Link
        to=".."
        relative="path"
        className="border-2 border-sky-500 py-1 px-6 text-sky-500 rounded-md hover:bg-sky-500 hover:text-white transition-colors mb-4 block w-fit "
      >
        Back
      </Link>
      <div className="bg-white shadow-sm p-4 rounded-md border">
        <h2 className="text-sky-600 font-bold text-2xl mb-4">{state.title}</h2>
        <p>{state.content}</p>
      </div>
      <div className="flex justify-end gap-4">
        <Link
          to={`/new-post`}
          state={state}
          // onClick={() => mutate(state._id)}
          className="bg-amber-500 text-white py-2 px-8 rounded-md block mt-4 hover:bg-amber-600 transition-colors font-bold"
        >
          Update
        </Link>
        <button
          onClick={() => mutate(state._id)}
          className="bg-rose-500 text-white py-2 px-8 rounded-md block mt-4 hover:bg-rose-600 transition-colors font-bold"
        >
          Delete
        </button>
      </div>
    </>
  );
};

export default Post;
