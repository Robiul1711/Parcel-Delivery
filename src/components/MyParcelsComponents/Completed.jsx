import React, { useState } from "react";
import { AiFillStar, AiOutlineStar } from "react-icons/ai";
import { FaStarHalfAlt } from "react-icons/fa";
import { FaAngleLeft } from "react-icons/fa6";
import parcel1 from "@/assets/images/parcel1.png";

const fakeParcels = [
  { id: 1, title: "Domestic Parcels - BP&O", weight: "11 kg", dimensions: "4ft, 5cm", priceRange: "10$ - 12$", pickupPeriod: "Jan 23 - Jan 30", departure: "Syracuse, Connecticut", destination: "Syracuse, Connecticut", comments: "We do not allow shipping of hazardous materials", rate: null },
  { id: 2, title: "International Parcel - DHL", weight: "20 kg", dimensions: "3ft, 8cm", priceRange: "25$ - 30$", pickupPeriod: "Feb 01 - Feb 05", departure: "New York, USA", destination: "London, UK", comments: "Handle with care - Fragile items", rate: 4.4 },
  { id: 3, title: "Domestic Parcel - FedEx", weight: "5 kg", dimensions: "2ft, 3cm", priceRange: "8$ - 10$", pickupPeriod: "Mar 10 - Mar 15", departure: "Los Angeles, CA", destination: "Chicago, IL", comments: "No liquids allowed", rate: 3.5 },
];

// ⭐ Reusable Star Rating Display
const StarRating = ({ rating }) => {
  return (
    <div className="flex items-center gap-1">
      {[...Array(5)].map((_, i) => {
        const starValue = i + 1;
        if (rating >= starValue) {
          return <AiFillStar key={i} className="text-[#FF8000]" />;
        } else if (rating >= starValue - 0.5) {
          return <FaStarHalfAlt key={i} className="text-[#FF8000]" />;
        } else {
          return <AiOutlineStar key={i} className="text-gray-300" />;
        }
      })}
    </div>
  );
};

const Completed = () => {
  const [selectedParcel, setSelectedParcel] = useState(null);
  const [rating, setRating] = useState(0);
  const [parcels, setParcels] = useState(fakeParcels);

  const openModal = (parcel) => {
    setSelectedParcel(parcel);
    setRating(parcel.rate || 0);
  };

  const closeModal = () => {
    setSelectedParcel(null);
    setRating(0);
  };

  const submitRating = () => {
    setParcels((prev) =>
      prev.map((p) =>
        p.id === selectedParcel.id ? { ...p, rate: rating } : p
      )
    );
    closeModal();
  };

  return (
    <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
      {parcels.map((parcel) => (
        <div
          key={parcel.id}
          className="bg-[#E8F0FB] p-2.5 rounded-2xl shadow-md overflow-hidden border border-gray-100"
        >
          {/* Image */}
          <div className="relative">
            <img
              src={parcel1}
              alt="Parcel"
              className="w-full h-52 object-cover rounded-2xl"
            />
          </div>

          {/* Content */}
          <div>
            <h2 className="text-2xl font-medium py-2.5">{parcel.title}</h2>

            <div className="grid grid-cols-2 gap-y-2 text-sm">
              <p className="flex flex-col text-[#333]">
                Estimated Weight:
                <span className="font-medium text-black text-base">
                  {parcel.weight}
                </span>
              </p>
              <p className="flex flex-col text-[#333]">
                Dimensions:
                <span className="font-medium text-black text-base">
                  {parcel.dimensions}
                </span>
              </p>
              <p className="flex flex-col text-[#333]">
                Price Range:
                <span className="font-medium text-black text-base">
                  {parcel.priceRange}
                </span>
              </p>
              <p className="flex flex-col text-[#333]">
                Desired pick-up period:
                <span className="font-medium text-black text-base">
                  {parcel.pickupPeriod}
                </span>
              </p>
            </div>

            <div className="grid grid-cols-1 gap-y-2 text-sm mt-3">
              <p className="flex flex-col text-[#333]">
                Departure:
                <span className="font-medium text-black text-base">
                  {parcel.departure}
                </span>
              </p>
              <p className="flex flex-col text-[#333]">
                Destination:
                <span className="font-medium text-black text-base">
                  {parcel.destination}
                </span>
              </p>
              <p className="flex flex-col text-[#333]">
                Comments:
                <span className="font-medium text-black text-base">
                  {parcel.comments}
                </span>
              </p>
            </div>
          </div>

          {/* Footer Button */}
          <div className="border-t px-4 pt-5 mt-5">
            <button
              onClick={() => openModal(parcel)}
              className="w-full text-black flex items-center justify-center gap-2 bg-white shadow-custom font-medium py-3.5 rounded-md transition"
            >
              {parcel.rate ? (
                <StarRating rating={parcel.rate} />
              ) : (
                <span>Rate the work</span>
              )}
            </button>
          </div>
        </div>
      ))}

      {/* Rating Modal */}
      {selectedParcel && (
        <div
          className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50"
          onClick={closeModal} // click outside closes modal
        >
          <div
            className="bg-[#E8F0FB] rounded-2xl w-80 shadow-lg"
            onClick={(e) => e.stopPropagation()} // prevent close when clicking inside
          >
            <div className="relative">
              <button
                className="absolute top-3 left-3"
                onClick={closeModal}
              >
                <FaAngleLeft className="border p-2 rounded-full text-4xl" />
              </button>
              <h2 className="text-lg font-semibold mb-4 text-center bg-[#fff] py-4 rounded-t-2xl">
                Add Review
              </h2>
            </div>

            {/* Interactive Rating */}
            <div className="flex justify-center gap-2 mb-4">
              {[1, 2, 3, 4, 5].map((star) => (
                <AiFillStar
                  key={star}
                  onClick={() => setRating(star)}
                  className={`w-8 h-8 cursor-pointer ${
                    star <= rating ? "text-orange-500" : "text-gray-300"
                  }`}
                />
              ))}
            </div>

            <button
              onClick={submitRating}
              className="w-full bg-custom-primary border  font-medium py-2 rounded-md transition text-white hover:bg-custom-primary"
            >
              Submit
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Completed;
