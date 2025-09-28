import { Upload } from "@/assets/icon/svgIcon";
import AddCardModal from "@/components/common/AddCardModal";
import ImageProvider from "@/components/common/ImageProvider";
import { Plus } from "lucide-react";
import React, { useState } from "react";
import { Link } from "react-router-dom";

const SetupPersonalInformation = () => {
  const [image, setImage] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);

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
            Personal Information
          </h2>

          <form className="space-y-5">
            {/* Profile Upload */}
            <div>
              <p className="text-[#333333] mb-4">
                You can upload either an identity card, a driver's license, or a
                proof of address.
              </p>
              <div className="flex items-center gap-6 mb-6">
                <div>
                  <input
                    type="file"
                    id="image_input"
                    className="hidden"
                    onChange={handleFileChange}
                  />
                  <div className="w-[180px] h-[120px] rounded-lg border border-gray-300 flex items-center justify-center overflow-hidden">
                    {image === "" ? (
                      <img
                        src={ImageProvider.file}
                        alt="profile"
                        className="w-full h-full object-cover"
                      />
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
                  <p className="text-sm text-gray-500 w-3/4 leading-relaxed">
                    We recommend an image of at least 400x400.
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
            </div>

            {/* First Name */}
            <div className="pt-4">
              <label className="block font-medium mb-1">City</label>
              <input
                type="text"
                placeholder="Enter City"
                className="border px-4 py-3 rounded-lg w-full focus:outline-none focus:ring-2 focus:ring-custom-primary"
              />
            </div>

            {/* Last Name */}
            <div>
              <label className="block font-medium mb-1">Address</label>
              <input
                type="text"
                placeholder="Enter Address"
                className="border px-4 py-3 rounded-lg w-full focus:outline-none focus:ring-2 focus:ring-custom-primary"
              />
            </div>

            <div
              onClick={() => setIsModalOpen(true)}
              className="bg-[#F5F5F5] text-[#ADB3B7] font-semibold rounded-lg w-full h-[120px] flex flex-col items-center justify-center cursor-pointer hover:bg-[#F0F0F0]"
            >
              <Plus size={28} />
              <h2>Add Card</h2>
            </div>

            {/* Submit */}
            <Link to={"/"}>
              <button
                type="submit"
                className="bg-custom-primary hover:bg-custom-primary/90 text-white font-semibold px-4 py-3 rounded-lg w-full transition duration-200 cursor-pointer"
              >
                Complete My Profile
              </button>
            </Link>

            {/* Footer */}
            <p className="text-center text-gray-600 mt-4">
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
      <AddCardModal isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen} />
    </div>
  );
};

export default SetupPersonalInformation;
