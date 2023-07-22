import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../Providers/AuthProvider";
import { TbFidgetSpinner } from "react-icons/tb";
import { FcGoogle } from "react-icons/fc";
import { BsGithub, BsFacebook } from "react-icons/Bs";
const Login = () => {

  
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 shadow-md rounded-md max-w-sm w-full">
        <h2 className="text-2xl font-bold mb-4">Log In</h2>
        <form>
          <div className="mb-4">
            <label htmlFor="email" className="block text-gray-600 mb-1">
              Email
            </label>
            <input
              type="email"
              id="email"
              className="w-full border border-gray-300 rounded px-3 py-2"
              placeholder="Your email"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="password" className="block text-gray-600 mb-1">
              Password
            </label>
            <input
              type="password"
              id="password"
              className="w-full border border-gray-300 rounded px-3 py-2"
              placeholder="Your password"
            />
          </div>
          <div className="flex items-center justify-between">
            <label className="label">
              <a href="#" className="label-text-alt link link-hover hover:link-primary">
                Forgot password?
              </a>
            </label>
            <label className="label">
              <Link to='/signup' className="label-text-alt link link-hover hover:link-primary">
              Don't Have Account
              </Link>
            </label>
          </div>
          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded w-full"
          >
            Log In
          </button>
        </form>
        <div className="flex items-center pt-4 space-x-1">
          <div className="flex-1 h-px sm:w-16 dark:bg-gray-700"></div>
          <p className="px-3 text-sm dark:text-gray-400">
            Signup with social accounts
          </p>
          <div className="flex-1 h-px sm:w-16 dark:bg-gray-700"></div>
        </div>
        <div
          
          className="flex justify-center items-center space-x-2 gap-5 my-2"
        >
          <FcGoogle size={32} />
           <BsGithub size={30} />
           <BsFacebook size={32} />
        </div>
      </div>
    </div>
  );
};

export default Login;
