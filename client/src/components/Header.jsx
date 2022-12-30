import React from "react";
import logo from "/vite.svg";
import { useAuth } from "../context/AuthContext";

const Header = () => {
  const { logout } = useAuth();

  return (
    <div className="bg-white shadow-md p-4">
      <div className=" max-w-3xl mx-auto flex justify-between">
        <img src={logo} alt="" />
        <button
          onClick={() => logout()}
          className="text-sky-500 font-medium underline"
        >
          Log out
        </button>
      </div>
    </div>
  );
};

export default Header;
