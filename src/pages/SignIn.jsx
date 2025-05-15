import React from "react";
import Navbar from "../components/Navbar";
import backgroundImage from "../assets/bg-signup.jpg"; // Add this image to your assets folder
import { Link } from "react-router-dom";

const SignIn = () => {
  return (
    <div
      className="min-h-screen bg-cover bg-center relative"
      style={{
        backgroundImage: `linear-gradient(rgba(49,130,206,0.6), rgba(49,130,206,0.6)), url(${backgroundImage})`,
      }}
    >
      <Navbar />

      <div className="flex justify-center items-center min-h-screen px-4">
        <div className="bg-white rounded-lg shadow-lg p-8 w-full max-w-md">
          <h2 className="text-center text-lg font-semibold text-gray-800 mb-4">Sign In with</h2>
          <div className="flex justify-center gap-4 mb-4">
            <button className="border rounded p-2 w-10">
              <i className="fab fa-facebook-f"></i>
            </button>
            <button className="border rounded p-2 w-10">
              <i className="fab fa-apple"></i>
            </button>
            <button className="border rounded p-2 w-10">
              <i className="fab fa-google"></i>
            </button>
          </div>

          <div className="text-center text-sm text-gray-500 mb-4">or</div>

          <form className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-600">Name</label>
              <input
                type="text"
                placeholder="Your full name"
                className="w-full px-3 py-2 border rounded text-sm"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-600">Password</label>
              <input
                type="password"
                placeholder="Your password"
                className="w-full px-3 py-2 border rounded text-sm"
              />
            </div>
            <div className="flex items-center gap-2">
              <input type="checkbox" id="remember" className="accent-blue-500" />
              <label htmlFor="remember" className="text-sm text-gray-600">
                Remember me
              </label>
            </div>
            <button
              type="submit"
              className="w-full bg-gray-800 text-white py-2 rounded text-sm font-semibold"
            >
              SIGN IN
            </button>
          </form>

          <p className="text-center text-sm mt-4 text-gray-500">
            Don’t have an account?{" "}
            <Link to="/signup" className="text-black font-semibold">
              Sign up
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
