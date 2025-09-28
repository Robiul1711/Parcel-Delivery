import ImageProvider from "@/components/common/ImageProvider";
import React from "react";
import { Link } from "react-router-dom";

const ForgotPassword = () => {
  return (
    <div className="h-screen w-full flex">
      {/* Left Image */}
      <div className="hidden lg:block w-1/2 h-full">
        <img
          src={ImageProvider.group1}
          alt="signup"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Right Form */}
      <div className="flex-1 flex items-center justify-center bg-white px-6 lg:px-20">
        <div className="w-full max-w-xl">
          <div className="flex items-center justify-center mb-4">
            <img src={ImageProvider.forgot} alt="image" />
          </div>
          <h2 className="text-2xl lg:text-3xl font-bold mb-6 text-gray-800 text-center">
            Forgot your password?
          </h2>
          <p className="text-gray-600 text-center my-2 w-3/4 mx-auto">
            Enter your email address below and we'll send you password reset
            instructions.
          </p>

          <form className="space-y-5">
            {/* First Name */}
            <div>
              <label className="block font-medium mb-1">Email</label>
              <input
                type="text"
                placeholder="Enter your email"
                className="border px-4 py-3 rounded-lg w-full focus:outline-none focus:ring-2 focus:ring-custom-primary"
              />
            </div>

            {/* Submit */}
            <Link to={"/reset-password"}>
              <button
                type="submit"
                className="bg-custom-primary hover:bg-custom-primary/90 text-white font-semibold px-4 py-3 rounded-lg w-full transition duration-200 cursor-pointer"
              >
                Send Reset Instructions
              </button>
            </Link>

            {/* Footer */}
            <p className="text-center text-gray-600 mt-4">
              If you don't see your reset email be sure to check your spam
              filter for an email from{" "}
              <span className="font-semibold text-black hover:underline cursor-pointer">
                {" "}
                support@estatepie.com
              </span>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ForgotPassword;
