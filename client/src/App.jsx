import React from "react";
import { Routes, Route, Outlet } from "react-router-dom";
import Warpper from "./components/Warpper";
import Home from "./pages/Home";
import Login from "./pages/Login";
import NewPost from "./pages/NewPost";
import Post from "./pages/Post";
import Register from "./pages/Register";

const App = () => {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/" element={<Warpper />}>
        <Route index element={<Home />} />
        <Route path=":id" element={<Post />} />
        <Route path="new-post" element={<NewPost />} />
      </Route>
    </Routes>
  );
};

export default App;
