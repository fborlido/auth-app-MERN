import React from "react";
import logo from "/vite.svg";
import { useAuth } from "../context/AuthContext";

const Header = () => {
  const { logout } = useAuth();

  return (
    <header className="bg-white shadow-md py-4">
      <div className=" max-w-3xl mx-auto flex justify-between px-8">
        <img src={logo} alt="" />
        <button
          onClick={() => logout()}
          className="text-sky-500 font-medium underline"
        >
          Log out
        </button>
      </div>
    </header>
  );
};

export default Header;
