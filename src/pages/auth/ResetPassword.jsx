import ImageProvider from "@/components/common/ImageProvider";
import { Eye, EyeOff } from "lucide-react";
import React, { useState } from "react";
import { Link } from "react-router-dom";

const ResetPassword = () => {
  const [showPassword, setShowPassword] = useState(false);
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
        <div className="w-full max-w-2xl">
          <div className="flex items-center justify-center mb-4">
            <img src={ImageProvider.reset} alt="image" />
          </div>
          <h2 className="text-2xl lg:text-3xl font-bold mb-6 text-gray-800 text-center">
            Forgot your password?
          </h2>
          <p className="text-gray-600 text-center my-2 w-3/4 mx-auto">
            Enter your email address below and we'll send you password reset
            instructions.
          </p>

          <form className="space-y-5">
            {/* Password */}
            <div>
              <label className="block font-medium mb-1">New Password</label>
              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  placeholder="••••••••"
                  className="w-full border rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-custom-primary"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-600"
                >
                  {showPassword ? <Eye size={20} /> : <EyeOff size={20} />}
                </button>
              </div>
            </div>
            {/* Confirm Password */}
            <div>
              <label className="block font-medium mb-1">Confirm Password</label>
              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  placeholder="••••••••"
                  className="w-full border rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-custom-primary"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-600"
                >
                  {showPassword ? <Eye size={20} /> : <EyeOff size={20} />}
                </button>
              </div>
            </div>

            {/* Submit */}
            <Link to={"/"}>
              <button
                type="submit"
                className="bg-custom-primary hover:bg-custom-primary/90 text-white font-semibold px-4 py-3 rounded-lg w-full transition duration-200 cursor-pointer"
              >
                Reset Password
              </button>
            </Link>

            {/* Footer */}
            <p className="text-center text-gray-600 mt-2">
              Already have an account?{" "}
              <Link
                to="/login"
                className="text-custom-primary font-medium hover:underline"
              >
                Login
              </Link>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ResetPassword;
