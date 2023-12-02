import React from "react";
import { Link } from "react-router-dom";

const SignUp = () => {
  return (
    <div className="p-3 max-w-lg mx-auto ">
      <h1 class="text-4xl text-center font-extrabold my-7 text-indigo-600 border-b-4 border-indigo-600 pb-2">
        Sign Up
      </h1>

      <form className="flex flex-col gap-4">
        <input
          type="text"
          placeholder="Username"
          class="border p-3 rounded-lg w-full mb-4 focus:outline-none focus:ring focus:border-blue-500 placeholder-gray-500"
          id="username"
        />

        <input
          type="email"
          placeholder="Email"
          class="border p-3 rounded-lg w-full mb-4 focus:outline-none focus:ring focus:border-blue-500 placeholder-gray-500"
          id="email"
        />

        <input
          type="password"
          placeholder="Password"
          class="border p-3 rounded-lg w-full mb-4 focus:outline-none focus:ring focus:border-blue-500 placeholder-gray-500"
          id="password"
        />

        <a
          href="#_"
          class="relative inline-flex items-center justify-center p-4 px-6 py-3 overflow-hidden font-medium text-indigo-600 transition duration-300 ease-out border-2 border-purple-500 rounded-full shadow-md group"
        >
          <span class="absolute inset-0 flex items-center justify-center w-full h-full text-white duration-300 -translate-x-full bg-purple-500 group-hover:translate-x-0 ease">
            <svg
              class="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M14 5l7 7m0 0l-7 7m7-7H3"
              ></path>
            </svg>
          </span>

          <span class="absolute flex items-center justify-center w-full h-full text-purple-500 transition-all duration-300 transform group-hover:translate-x-full ease">
            Sign Up
          </span>

          <span class="relative invisible">Sign Up</span>
        </a>
      </form>

      <div className="flex gap-2 mt-5 ">
        <p>Have an Account ?</p>
        <Link to="//sign-in" className="text-indigo-600 hover:text-indigo-900">
          {" "}
          Login
        </Link>
      </div>
    </div>
  );
};

export default SignUp;
