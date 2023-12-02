import React from "react";
import { FaSearch } from "react-icons/fa";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header className="bg-gradient-to-r from-sky-100 to-teal-200 shadow-md">
      <div className="flex justify-between items-center max-w-6xl mx-auto p-3">
        <Link to="/">
          <h1 className="font-bold text-sm sm:text-xl flex flex-wrap">
            <span className="text-green-600 ">Paisa</span>
            <span className=" text-blue-600 "> Barbaad.Com</span>
          </h1>
        </Link>
        <form
          className=" bg-slate-100 p-1 rounded-lg  flex items-center "
          action=""
        >
          <input
            type="text"
            placeholder="Search"
            className=" bg-transparent focus:outline-none w-24 sm:w-64"
          />
          <FaSearch className="text-gray-500" />
        </form>

        <ul className=" flex gap-4 ">
          <Link to="/">
            <li className="hidden sm:inline text-slate-700 hover:underline">
              Home
            </li>
          </Link>

          <Link to="/about">
            <li className="hidden sm:inline text-slate-700 hover:underline">
              About
            </li>
          </Link>
          <Link to="/sign-in">
            <li className="sm:inline text-slate-700 hover:underline">
              Sign In
            </li>
          </Link>
        </ul>
      </div>
    </header>
  );
}