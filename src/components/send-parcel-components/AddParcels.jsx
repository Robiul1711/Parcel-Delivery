import React, { useRef, useState } from "react";
import ImageProvider from "../common/ImageProvider";
import { MdCameraAlt } from "react-icons/md";
import { DateRangePicker } from "../common/DateRangePicker";
import PriceRangeSlider from "../common/PriceRangeSlider";
const AddParcels = () => {
  const [preview, setPreview] = useState(null);
  const fileInputRef = useRef(null);
  const [range, setRange] = useState({
    startDate: null,
    endDate: null,
  });

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
    <div className="w-full">
      <div className="flex flex-col lg:flex-row items-start lg:items-center gap-4">
        {/* Image Upload */}
        <div className="relative w-full sm:w-[280px] md:w-[300px] h-[180px]">
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

        {/* Heading */}
        <h2 className="text-base md:text-lg font-semibold text-gray-800 w-full lg:w-1/2 leading-relaxed">
          Click to add a photo of the parcel (optional but recommended)
        </h2>
      </div>

      {/* Form */}
      <form>
        {/* First Section */}
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

        {/* Description */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="mt-4">
            <label className="block font-medium mb-1">Description</label>
            <input
              type="text"
              placeholder="Enter description"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none bg-custom-secondary text-sm"
            />
          </div>
        </div>

        {/* Date Range Picker */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="mt-4">
            <label className="block font-medium mb-1">
              Desired pick-up period <br />
              <span className="text-sm font-normal">
                Please indicate the period during which your parcel can be
                collected
              </span>
            </label>
            <DateRangePicker
              startDate={range.startDate}
              endDate={range.endDate}
              onChange={setRange}
              placeholder="Select start date and end date"
              className="mb-4"
            />
          </div>
        </div>

        {/* Price Range */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="mt-4">
            <label className="block font-medium mb-1">Price Range</label>
            <PriceRangeSlider />
          </div>
        </div>

        {/* Button */}
        <div className="flex justify-center my-4">
          <button className="bg-custom-primary text-white px-6 py-3 rounded-lg w-full sm:w-1/2 md:w-1/3 lg:w-1/4 hover:bg-white hover:text-custom-primary hover:border hover:border-custom-primary transition-all duration-300 ease-in-out">
            Post My Parcel
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddParcels;
