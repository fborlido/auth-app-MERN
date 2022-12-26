import { useQuery } from "@tanstack/react-query";
import React from "react";
import { Link } from "react-router-dom";
import { getPosts } from "../api/posts";
import Post from "../components/Post";
import { useAuth } from "../context/AuthContext";

const Home = () => {
  const { user } = useAuth();

  const { data: posts, isLoading } = useQuery(["posts"], getPosts, {
    retry: false,
  });

  return (
    <>
      <div className="flex items-center justify-between">
        <h1 className="font-bold text-3xl">
          Welcome, <span className="text-sky-500">{user?.name}</span>!
        </h1>
        <Link to="/new-post" className="btn">
          New Post
        </Link>
      </div>
      {isLoading ? (
        <>Loading...</>
      ) : (
        <>
          <div className="mt-8 grid grid-cols-3 gap-4">
            {posts.map((post) => (
              <Post post={post} />
            ))}
          </div>
        </>
      )}
    </>
  );
};

export default Home;
