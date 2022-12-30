import React from "react";
import { Outlet } from "react-router-dom";
import Header from "./Header";

const Warpper = () => {
  return (
    <div className="bg-slate-100 min-h-screen flex flex-col justify-between">
      <Header />
      <main className="max-w-3xl w-full mx-auto p-8 flex-1">
        <Outlet />
      </main>
      <footer className=" bg-slate-500">
        <div className="max-w-3xl w-full mx-auto px-8 py-2 flex justify-between items-center">
          <p className="text-white font-medium text-sm">
            &copy; Copyright 2020
          </p>
          <p className="text-white text-sm">Frederico Borlido</p>
        </div>
      </footer>
    </div>
  );
};

export default Warpper;
