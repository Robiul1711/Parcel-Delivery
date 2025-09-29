import React, { useState } from "react";
import { LogOut, Upload } from "lucide-react";
import ChangePasswordModal from "./ChangePasswordModal";
import LogoutModal from "./LogoutModal";
import { FaAngleLeft } from "react-icons/fa6";
import { Link } from "react-router-dom";
import { CgProfile } from "react-icons/cg";

const ProfileSettings = () => {
  const [openPasswordModal, setOpenPasswordModal] = useState(false);
  const [openLogoutModal, setOpenLogoutModal] = useState(false);
  const [image, setImage] = useState("");

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

  const handleLogout = () => {
    console.log("User logged out");
    setOpenLogoutModal(false);
    // Add your actual logout logic here
  };

  return (
    <div className="max-w-4xl mx-auto p-6">
      {/* Header */}
      <div className="flex items-center justify-between mb-8">
        <Link className="text-2xl font-semibold flex items-center gap-2">
          <FaAngleLeft /> Profile Settings
        </Link>
        <button
          onClick={() => setOpenLogoutModal(true)}
          className="flex items-center gap-2 px-4 py-2 bg-[#E8F0FB] duration-300 ease-in-out rounded-lg text-gray-700 hover:bg-[#E8F0FB]/80"
        >
          <LogOut className="w-4 h-4" />
          Log Out
        </button>
      </div>

      {/* Profile Picture */}
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
          <h2 className="text-lg font-medium text-gray-800">Profile Picture</h2>
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

      {/* Form Fields */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        <div>
          <label className="block text-sm font-medium text-gray-600 mb-1">
            First Name
          </label>
          <input
            type="text"
            defaultValue="Scott"
            className="w-full border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-orange-500"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-600 mb-1">
            Last Name
          </label>
          <input
            type="text"
            defaultValue="Johnston"
            className="w-full border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-orange-500"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-600 mb-1">
            Phone Number
          </label>
          <input
            type="text"
            defaultValue="+1 (234) 567 - 891"
            className="w-full border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-orange-500"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-600 mb-1">
            Email Address
          </label>
          <input
            type="email"
            defaultValue="scott.jh@email.com"
            className="w-full border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-orange-500"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-600 mb-1">
            Cards
          </label>
          <button className="px-4 py-2 rounded-lg border border-gray-300 text-gray-600 hover:bg-[#E8F0FB]">
            Add Card
          </button>
        </div>
      </div>

      {/* Password Section */}
      <div className="border-t pt-6 mb-8">
        <h3 className="font-medium text-gray-800 mb-1">Password</h3>
        <p className="text-sm text-gray-500 mb-4">
          Your password was last changed on{" "}
          <span className="font-semibold">3rd July 2024</span>
        </p>
        <button
          onClick={() => setOpenPasswordModal(true)}
          className="px-4 py-2 bg-gray-100 rounded-lg text-gray-700 hover:bg-gray-200"
        >
          Change Password
        </button>
      </div>

      {/* Footer Actions */}
      <div className="flex justify-end gap-3">
        <button className="px-4 py-2 rounded-lg border border-gray-300 text-gray-600 hover:bg-gray-100">
          Discard
        </button>
        <button className="px-4 py-2 rounded-lg bg-orange-500 text-white hover:bg-orange-600">
          Save Changes
        </button>
      </div>

      {/* Password Modal */}
      <ChangePasswordModal
        isOpen={openPasswordModal}
        onClose={() => setOpenPasswordModal(false)}
      />

      {/* Logout Modal */}
      <LogoutModal
        isOpen={openLogoutModal}
        onClose={() => setOpenLogoutModal(false)}
        onLogout={handleLogout}
      />
    </div>
  );
};

export default ProfileSettings;
