import React, { useRef, useState } from "react";
import ImageProvider from "../common/ImageProvider";
import { MdCameraAlt } from "react-icons/md";
const AddParcels = () => {
  const [preview, setPreview] = useState(null);
  const fileInputRef = useRef(null);

  const handleClick = () => {
    fileInputRef.current.click();
  };

  // Handle file upload and preview
  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setPreview(imageUrl);
    }
  };

  return (
    <div>
      <div className="flex items-center gap-4">
        <div className="relative w-[300px] h-[180px]">
          {/* Avatar Image */}
          <img
            src={preview || ImageProvider.file}
            alt="Uploaded Preview"
            className="w-full h-full rounded-lg object-cover border cursor-pointer"
            onClick={handleClick}
          />
          <button
            onClick={handleClick}
            className="absolute bottom-1 right-1 bg-white rounded-full p-2 shadow-md hover:bg-gray-100 cursor-pointer"
          >
            <MdCameraAlt className="text-gray-600" size={20} />
          </button>
          <input
            type="file"
            accept="image/*"
            ref={fileInputRef}
            className="hidden"
            onChange={handleFileChange}
          />
        </div>

        <h2 className="lg:text-lg font-semibold text-gray-800 w-1/4 leading-relaxed">
          Click to add a photo of the parcel (optional but recommended)
        </h2>
      </div>
      <form>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 my-6">
          <div className="mt-4">
            <label className="block font-medium mb-1">Parcel Title</label>
            <input
              type="text"
              placeholder="Enter parcel title"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none bg-custom-secondary text-sm"
            />
          </div>
          <div className="mt-4">
            <label className="block font-medium mb-1">Estimated Weight</label>
            <input
              type="text"
              placeholder="Enter estimated weight"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none bg-custom-secondary text-sm"
            />
          </div>
          <div className="mt-4">
            <label className="block font-medium mb-1">
              Dimensions (optional)
            </label>
            <input
              type="text"
              placeholder="Enter dimensions (length x width x height)"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none bg-custom-secondary text-sm"
            />
          </div>
          <div className="mt-4">
            <label className="block font-medium mb-1">Departure</label>
            <input
              type="text"
              placeholder="Departure location"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none bg-custom-secondary text-sm"
            />
          </div>
          <div className="mt-4">
            <label className="block font-medium mb-1">Destination</label>
            <input
              type="text"
              placeholder="Destination location"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none bg-custom-secondary text-sm"
            />
          </div>
          <div className="mt-4">
            <label className="block font-medium mb-1">
              Comments{" "}
              <span className="text-sm">
                (optional message for the traveler)
              </span>
            </label>
            <input
              type="text"
              placeholder="Enter comments"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none bg-custom-secondary text-sm"
            />
          </div>
        </div>
        <div className="grid grid-cols-2">
          <div className="mt-4">
            <label className="block font-medium mb-1">Description</label>
            <input
              type="text"
              placeholder="Enter description"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none bg-custom-secondary text-sm"
            />
          </div>
        </div>
        <div className="grid grid-cols-2">
          <div className="mt-4">
            <label className="block font-medium mb-1">
              Desired pick-up period <br />
              <span className="text-sm">
                Please indicate the period during which your parcel can be
                collected
              </span>
            </label>
          </div>
        </div>
      </form>
    </div>
  );
};

export default AddParcels;
