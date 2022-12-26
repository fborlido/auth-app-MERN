import React from "react";
import { Outlet } from "react-router-dom";
import Header from "./Header";

const Warpper = () => {
  return (
    <div className="bg-slate-100 min-h-screen">
      <Header />
      <div className="max-w-3xl mx-auto py-8">
        <Outlet />
      </div>
    </div>
  );
};

export default Warpper;
