import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { useDispatch ,useSelector} from "react-redux";
import {
  signInFailure,
  signInStart,
  signInSuccess,
} from "../redux/user/userSlice";

const SignIn = () => {

  const dispatch = useDispatch();

  const [formData, setFormData] = useState({});
  const {loading, error} = useSelector(state => state.user)
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      dispatch(signInStart());

      console.log(formData);

      const res = await fetch("/api/auth/signin", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (data.success === false) {
        dispatch(signInFailure(data.message));
        return;
      }

      dispatch(signInSuccess(data.user));

      navigate("/");
    } catch (error) {
      dispatch(signInFailure(error.message));
    }
  };

  return (
    <div className="p-3 max-w-lg mx-auto ">
      <h1 className="text-4xl text-center font-extrabold my-7 text-indigo-600 border-b-4 border-indigo-600 pb-2">
        Sign In
      </h1>

      <form className="flex flex-col gap-4">
        <input
          type="email"
          placeholder="Email"
          className="border p-3 rounded-lg w-full mb-4 focus:outline-none focus:ring focus:border-blue-500 placeholder-gray-500"
          id="email"
          onChange={handleChange}
        />

        <input
          type="password"
          placeholder="Password"
          className="border p-3 rounded-lg w-full mb-4 focus:outline-none focus:ring focus:border-blue-500 placeholder-gray-500"
          id="password"
          onChange={handleChange}
        />

        <a
          disabled={loading}
          href="#"
          className="relative inline-flex items-center justify-center p-4 px-6 py-3 overflow-hidden font-medium text-indigo-600 transition duration-300 ease-out border-2 border-purple-500 rounded-full shadow-md group"
          onClick={handleSubmit}
        >
          <span className="absolute inset-0 flex items-center justify-center w-full h-full text-white duration-300 -translate-x-full bg-purple-500 group-hover:translate-x-0 ease">
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M14 5l7 7m0 0l-7 7m7-7H3"
              ></path>
            </svg>
          </span>

          <span className="absolute flex items-center justify-center w-full h-full text-purple-500 transition-all duration-300 transform group-hover:translate-x-full ease">
            {loading ? "Loading..." : "Sign In"}
          </span>

          <span className="relative invisible">
            {" "}
            {loading ? "Loading..." : "Sign In"}
          </span>
        </a>
      </form>

      <div className="flex gap-2 mt-5 ">
        <p>Dont Have an Account ?</p>
        <Link to="/sign-up" className="text-indigo-600 hover:text-indigo-900">
          {" "}
          Sign Up
        </Link>
      </div>

      {error && <p className="text-red-500 text-center mt-5">{error}</p>}
    </div>
  );
};

export default SignIn;
