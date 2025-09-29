import { Upload } from "@/assets/icon/svgIcon";
import ImageProvider from "@/components/common/ImageProvider";
import { Eye, EyeOff } from "lucide-react";
import React, { useState } from "react";
import { CgProfile } from "react-icons/cg";
import { Link } from "react-router-dom";
import "react-phone-input-2/lib/style.css";
import PhoneInput from "react-phone-input-2";

const SignUp = () => {
  const [image, setImage] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [setValue] = useState("");

  const handleUploadImage = () => {
    document.getElementById("image_input").click();
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const imageURL = URL.createObjectURL(file);
      setImage(imageURL);
    }
  };

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
        <div className="w-full">
          <h2 className="text-2xl lg:text-3xl font-bold mb-6 text-gray-800 text-center">
            Sign Up
          </h2>

          <form className="space-y-5">
            {/* Profile Upload */}
            <div className="flex items-center gap-6 mb-6">
              <div>
                <input
                  type="file"
                  id="image_input"
                  className="hidden"
                  onChange={handleFileChange}
                />
                <div className="w-[120px] h-[120px] rounded-full border border-gray-300 flex items-center justify-center overflow-hidden">
                  {image === "" ? (
                    <CgProfile className="text-[6rem] text-gray-300" />
                  ) : (
                    <img
                      src={image}
                      alt="profile"
                      className="w-full h-full object-cover"
                    />
                  )}
                </div>
              </div>
              <div>
                <h2 className="text-lg font-medium text-gray-800">
                  Profile Picture
                </h2>
                <p className="text-sm text-gray-500">
                  We recommend at least 400x400px.
                </p>
                <button
                  type="button"
                  onClick={handleUploadImage}
                  className="mt-2 px-4 py-2 flex items-center gap-2 rounded-lg bg-gray-100 hover:bg-gray-200 font-medium cursor-pointer duration-300"
                >
                  <Upload className="text-black w-5 h-5" /> Upload
                </button>
              </div>
            </div>

            {/* First Name */}
            <div>
              <label className="block font-medium mb-1">First Name</label>
              <input
                type="text"
                placeholder="First Name"
                className="border px-4 py-3 rounded-lg w-full focus:outline-none focus:ring-2 focus:ring-custom-primary"
              />
            </div>

            {/* Last Name */}
            <div>
              <label className="block font-medium mb-1">Last Name</label>
              <input
                type="text"
                placeholder="Last Name"
                className="border px-4 py-3 rounded-lg w-full focus:outline-none focus:ring-2 focus:ring-custom-primary"
              />
            </div>

            {/* Email */}
            <div>
              <label className="block font-medium mb-1">Email</label>
              <input
                type="email"
                placeholder="Email"
                className="border px-4 py-3 rounded-lg w-full focus:outline-none focus:ring-2 focus:ring-custom-primary"
              />
            </div>

            {/* Phone */}
            <div>
              <label className="block font-medium mb-1">Phone Number</label>
              <PhoneInput
                country={"bd"}
                inputClass="!w-full !bg-gray-100 !h-[48px] !px-16 !rounded-lg !border-none"
                containerClass="!w-full !relative"
                buttonClass="!pl-2 !pr-2 !border-none"
                onChange={(value) => setValue("phone", value)}
              />
            </div>

            {/* Password */}
            <div>
              <label className="block font-medium mb-1">Password</label>
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
            <Link to={"/setup-personal-information"}>
              <button
                type="submit"
                className="bg-custom-primary hover:bg-custom-primary/90 text-white font-semibold px-4 py-3 rounded-lg w-full transition duration-200 cursor-pointer"
              >
                Next
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

export default SignUp;
