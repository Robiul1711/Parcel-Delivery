import { ChevronLeft } from "lucide-react";
import React, { useRef, useState } from "react";
import PriceRangeSlider from "./PriceRangeSlider";
import ImageProvider from "./ImageProvider";
import { MdCameraAlt } from "react-icons/md";

const SendParcelModal = ({ isModalOpen, setIsModalOpen }) => {
  const [preview, setPreview] = useState(null);
  const fileInputRef = useRef(null);

  const handleClick = () => fileInputRef.current.click();

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setPreview(imageUrl);
    }
  };

  return (
    <div
      className={`${
        isModalOpen ? "visible opacity-100" : "invisible opacity-0"
      } fixed inset-0 z-[200000000] flex items-center justify-center bg-black/30 transition-all duration-300`}
    >
      <div
        className={`${
          isModalOpen ? "scale-100 opacity-100" : "scale-90 opacity-0"
        } w-[95%] sm:w-[80%] md:w-[60%] lg:w-[50%] max-h-[90vh] overflow-y-auto bg-white dark:bg-slate-800 rounded-xl shadow-xl p-6 lg:px-10 transition-all duration-300`}
      >
        {/* Header */}
        <div className="flex items-center border-b pb-4 mb-4">
          <button
            className="border border-gray-300 p-2 text-xl dark:text-[#abc2d3]/70 dark:hover:bg-slate-900/50 hover:bg-gray-200 rounded-full transition-all duration-300 cursor-pointer"
            onClick={() => setIsModalOpen(false)}
          >
            <ChevronLeft />
          </button>
          <h2 className="text-2xl lg:text-3xl font-bold flex-1 text-center">
            Send Parcel
          </h2>
        </div>

        <div className="flex flex-col gap-6">
          {/* Image Upload */}
          <div className="flex flex-col lg:flex-row items-start lg:items-center gap-4">
            <div className="relative h-[120px] w-full lg:w-[120px] flex-shrink-0">
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
            <h2 className="text-base font-semibold text-gray-800 w-full leading-relaxed">
              Click to add a photo of the parcel (optional but recommended)
            </h2>
          </div>

          {/* Form */}
          <form className="flex flex-col gap-4">
            <div>
              <label className="block font-medium mb-1">Parcel Title</label>
              <input
                type="text"
                placeholder="Enter parcel title"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg bg-custom-secondary text-sm focus:outline-none"
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block font-medium mb-1">
                  Estimated Weight
                </label>
                <input
                  type="text"
                  placeholder="Enter estimated weight"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg bg-custom-secondary text-sm focus:outline-none"
                />
              </div>
              <div>
                <label className="block font-medium mb-1">
                  Dimensions (optional)
                </label>
                <input
                  type="text"
                  placeholder="Length x Width x Height"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg bg-custom-secondary text-sm focus:outline-none"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block font-medium mb-1">Start Date</label>
                <input
                  type="date"
                  className="w-full px-4 py-3 rounded-lg bg-custom-secondary text-lg focus:outline-none"
                />
              </div>
              <div>
                <label className="block font-medium mb-1">End Date</label>
                <input
                  type="date"
                  className="w-full px-4 py-3 rounded-lg bg-custom-secondary text-lg focus:outline-none"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block font-medium mb-1">Departure</label>
                <input
                  type="text"
                  placeholder="Departure location"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg bg-custom-secondary text-sm focus:outline-none"
                />
              </div>
              <div>
                <label className="block font-medium mb-1">Destination</label>
                <input
                  type="text"
                  placeholder="Destination location"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg bg-custom-secondary text-sm focus:outline-none"
                />
              </div>
            </div>

            <div>
              <label className="block font-medium mb-1">Description</label>
              <input
                type="text"
                placeholder="Enter description"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg bg-custom-secondary text-sm focus:outline-none"
              />
            </div>

            <div>
              <label className="block font-medium mb-1">Price Range</label>
              <PriceRangeSlider />
            </div>

            {/* Submit Button */}
            <div className="flex justify-center mt-4">
              <button className="bg-custom-primary text-white px-6 py-3 rounded-lg w-full sm:w-1/2 md:w-1/3 lg:w-1/4 hover:bg-white hover:text-custom-primary hover:border hover:border-custom-primary transition-all duration-300 ease-in-out">
                Post My Parcel
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SendParcelModal;
