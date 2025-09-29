import React from "react";
import { FaAngleLeft, FaStar } from "react-icons/fa";
import { AiFillMessage } from "react-icons/ai";

const offers = [
  {
    id: 1,
    name: "Cameron Williamson",
    rating: 4.3,
    price: 300,
    img: "https://randomuser.me/api/portraits/men/11.jpg",
  },
  {
    id: 2,
    name: "Kristin Watson",
    rating: 4.3,
    price: 300,
    img: "https://randomuser.me/api/portraits/women/21.jpg",
  },
  {
    id: 3,
    name: "Ralph Edwards",
    rating: 4.3,
    price: 300,
    img: "https://randomuser.me/api/portraits/men/31.jpg",
  },
  {
    id: 4,
    name: "Robert Fox",
    rating: 4.3,
    price: 300,
    img: "https://randomuser.me/api/portraits/men/41.jpg",
  },
  {
    id: 5,
    name: "Jacob Jones",
    rating: 4.3,
    price: 300,
    img: "https://randomuser.me/api/portraits/men/51.jpg",
  },
  {
    id: 6,
    name: "Savannah Nguyen",
    rating: 4.3,
    price: 300,
    img: "https://randomuser.me/api/portraits/women/61.jpg",
  },
  {
    id: 7,
    name: "Jenny Wilson",
    rating: 4.3,
    price: 300,
    img: "https://randomuser.me/api/portraits/women/71.jpg",
  },
  {
    id: 8,
    name: "Marvin McKinney",
    rating: 4.3,
    price: 300,
    img: "https://randomuser.me/api/portraits/men/81.jpg",
  },
  {
    id: 9,
    name: "Devon Lane",
    rating: 4.3,
    price: 300,
    img: "https://randomuser.me/api/portraits/men/91.jpg",
  },
  {
    id: 10,
    name: "Courtney Henry",
    rating: 4.3,
    price: 300,
    img: "https://randomuser.me/api/portraits/women/101.jpg",
  },
  {
    id: 11,
    name: "Courtney Henry",
    rating: 4.3,
    price: 300,
    img: "https://randomuser.me/api/portraits/women/101.jpg",
  },
  {
    id: 12,
    name: "Courtney Henry",
    rating: 4.3,
    price: 300,
    img: "https://randomuser.me/api/portraits/women/101.jpg",
  },
];

const OffersDialog = ({ closeModal }) => {
  // Stop modal from closing when clicking inside
  const handleContentClick = (e) => e.stopPropagation();

  return (
    <div
      className="fixed inset-0 bg-black/20 bg-opacity-40 flex items-center justify-center z-50"
      onClick={closeModal}
    >
      <div
        className="bg-white rounded-2xl w-[90%] max-w-4xl shadow-lg overflow-hidden"
        onClick={handleContentClick}
      >
        {/* Header */}
        <div className="flex items-center justify-between border-b px-4 py-3">
          <button
            onClick={closeModal}
            className="p-2 rounded-full bg-gray-100 hover:bg-gray-200 transition"
          >
            <FaAngleLeft className="text-xl" />
          </button>
          <h2 className="font-semibold text-lg">Offers ({offers.length})</h2>
          <div className="w-6"></div>
        </div>

        {/* Body - Grid of Offers */}
        <div className="p-4 grid grid-cols-1 md:grid-cols-2 gap-4 max-h-[70vh] overflow-y-auto">
          {offers.map((offer) => (
            <div
              key={offer.id}
              className="flex flex-col gap-3  bg-[#F5F8FD] rounded-xl p-4"
            >
              {/* Left Info */}
              <div className="flex  justify-between gap-3">
                <div className="flex items-center gap-3">
                  <img
                    src={offer.img}
                    alt={offer.name}
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  <div>
                    <h3 className="font-medium text-gray-900 flex items-center gap-2">
                      {offer.name}
                      <span className="flex items-center text-sm text-gray-700">
                        <FaStar className="text-yellow-500 mr-1" />
                        {offer.rating}
                      </span>
                    </h3>
                    <p className="text-sm text-gray-600">
                      Prize Offered:{" "}
                      <span className="font-semibold">${offer.price}</span>
                    </p>
                  </div>
                </div>
                <AiFillMessage className="text-2xl cursor-pointer" />
              </div>

              {/* Right Actions */}
              <div className="flex items-center gap-2">
                <button className="px-4 py-1.5 border rounded-md text-gray-700 hover:bg-gray-100 transition">
                  Reject
                </button>
                <button className="px-4 py-1.5 rounded-md bg-orange-500 text-white hover:bg-orange-600 transition">
                  Accept
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default OffersDialog;
