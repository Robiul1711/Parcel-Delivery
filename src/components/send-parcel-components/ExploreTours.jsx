import React, { useState } from "react";
import DropdownInput from "../common/DropdownFilter";
import { DatePicker } from "../common/DatePicker";
import ImageProvider from "../common/ImageProvider";
import { TiStarFullOutline } from "react-icons/ti";
import { MoveRight } from "lucide-react";
import SendParcelModal from "../common/SendParcelModal";

const toursData = [
  {
    id: 1,
    user: ImageProvider.user,
    name: "Cameron Williamson",
    rating: 4.3,
    departure: "Syracuse, Connecticut",
    arrival: "New York, New York",
    startDate: "12/3/2025",
    endDate: "12/3/2022",
  },
  {
    id: 2,
    user: ImageProvider.user1,
    name: "Jenny Wilson",
    rating: 4.7,
    departure: "Boston, Massachusetts",
    arrival: "Miami, Florida",
    startDate: "11/5/2025",
    endDate: "11/10/2025",
  },
  {
    id: 3,
    user: ImageProvider.user2,
    name: "Robert Fox",
    rating: 4.1,
    departure: "Chicago, Illinois",
    arrival: "Houston, Texas",
    startDate: "10/12/2025",
    endDate: "10/15/2025",
  },
  {
    id: 4,
    user: ImageProvider.user1,
    name: "Kristin Watson",
    rating: 4.9,
    departure: "Seattle, Washington",
    arrival: "Denver, Colorado",
    startDate: "09/20/2025",
    endDate: "09/25/2025",
  },
  {
    id: 5,
    user: ImageProvider.user,
    name: "Darlene Robertson",
    rating: 4.5,
    departure: "San Francisco, California",
    arrival: "Las Vegas, Nevada",
    startDate: "08/15/2025",
    endDate: "08/20/2025",
  },
  {
    id: 6,
    user: ImageProvider.user1,
    name: "Guy Hawkins",
    rating: 4.2,
    departure: "Atlanta, Georgia",
    arrival: "Orlando, Florida",
    startDate: "07/10/2025",
    endDate: "07/15/2025",
  },
];

const ExploreTours = () => {
  const [inModalOpen, setInModalOpen] = useState(false);
  return (
    <div>
      {/* Filters Section */}
      <div className="flex flex-col md:flex-row gap-4">
        <div className="w-full md:w-[35%]">
          <DropdownInput
            options={["Departure", "Arrival", "Later", "Earlier", "Fastest"]}
            defaultLabel="Select"
          />
        </div>
        <div className="w-full md:w-[35%]">
          <DropdownInput
            options={["Destination", "Origin", "Later", "Earlier"]}
            defaultLabel="Select"
          />
        </div>
        <div className="w-full md:w-[30%]">
          <DatePicker />
        </div>
      </div>

      {/* Tours Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 my-4">
        {toursData.map((tour) => (
          <div
            key={tour.id}
            className="bg-custom-secondary p-4 rounded-lg flex flex-col justify-between"
          >
            {/* User Info */}
            <div className="flex items-center gap-2">
              <img
                className="w-16 h-16 rounded-full"
                src={tour.user}
                alt={tour.name}
              />
              <div>
                <p className="font-semibold">{tour.name}</p>
                <p className="flex items-center gap-0.5 text-sm">
                  <TiStarFullOutline
                    size={18}
                    className="text-custom-primary mb-1"
                  />
                  {tour.rating}
                </p>
              </div>
            </div>

            {/* Route */}
            <div className="flex items-center gap-2 font-medium my-2">
              <h2>{tour.departure}</h2>
              <MoveRight />
              <h2>{tour.arrival}</h2>
            </div>

            {/* Dates */}
            <p className="my-2">{tour.startDate}</p>
            <p className="border-b pb-4 border-gray-300">{tour.endDate}</p>

            {/* Action Button */}
            <button
              onClick={() => setInModalOpen(true)}
              className="bg-custom-primary text-white py-2 lg:py-3 px-4 rounded-lg mt-4 w-full hover:bg-white hover:text-custom-primary transition-all duration-300 ease-in-out"
            >
              Offer a Parcel
            </button>
          </div>
        ))}
      </div>
      <SendParcelModal
        isModalOpen={inModalOpen}
        setIsModalOpen={setInModalOpen}
      />
    </div>
  );
};

export default ExploreTours;
