import ImageProvider from "@/components/common/ImageProvider";
import React, { useState } from "react";
import { Eye, EyeOff, Mail, Lock } from "lucide-react";
import { Link } from "react-router-dom";

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="relative h-screen w-full flex items-center justify-center">
      {/* Background */}
      <img
        src={ImageProvider.group}
        alt="background"
        className="absolute inset-0 w-full h-full object-cover object-center"
      />
      <div className="absolute inset-0 bg-black/20" />

      {/* Centered Content */}
      <div className="relative z-10 bg-white/10 backdrop-blur-sm p-6 lg:p-10 border border-custom-primary rounded-xl w-[90%] max-w-2xl">
        <h2 className="text-2xl lg:text-3xl font-bold mb-2 text-white text-center">
          Welcome back!
        </h2>
        <p className="text-sm lg:text-base text-white mb-6 text-center">
          Ullamco nostrud veniam Lorem dolor excepteur veniam Lorem fugiat ipsum
        </p>

        <form className="space-y-5">
          {/* Email */}
          <div className="text-left">
            <label className="text-white font-medium mb-1 block">Email</label>
            <div className="relative">
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full bg-transparent border rounded-md px-4 py-3 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-custom-primary"
              />
            </div>
          </div>

          {/* Password */}
          <div className="text-left">
            <label className="text-white font-medium mb-1 block">
              Password
            </label>
            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                placeholder="••••••••"
                className="w-full bg-transparent border rounded-md px-4 py-3 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-custom-primary"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-white/70 hover:text-white"
              >
                {showPassword ? <Eye size={20} /> : <EyeOff size={20} />}
              </button>
            </div>
          </div>
          <Link
            to="/forgot-password"
            className="flex justify-end text-sm text-white hover:text-custom-primary hover:underline cursor-pointer duration-200 ease-in-out"
          >
            Forgot Password
          </Link>
          {/* Submit */}
          <button
            type="submit"
            className="bg-custom-primary hover:bg-custom-primary/90 text-white font-semibold px-4 py-3 rounded-lg w-full cursor-pointer transition duration-200"
          >
            Login
          </button>
          <p className="text-white text-center">
            Don’t have an account?{" "}
            <Link
              to="/signup"
              className="text-custom-primary font-medium hover:text-white hover:underline cursor-pointer"
            >
              Sign Up
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Login;
