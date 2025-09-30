import React from "react";
import { AiOutlineMessage } from "react-icons/ai";
import ImageProvider from "../common/ImageProvider";

const fakeParcels = [
  {
    id: 1,
    title: "Domestic Parcels - BP&O",
    image: ImageProvider.parcel,
    weight: "11 kg",
    dimensions: "4ft, 5cm",
    priceRange: "10$ - 12$",
    pickupPeriod: "Jan 23 - Jan 30",
    departure: "Syracuse, Connecticut",
    destination: "Syracuse, Connecticut",
    comments: "We do not allow shipping of hazardous materials",
  },
  {
    id: 2,
    title: "International Parcel - DHL",
    image: ImageProvider.parcel2,
    weight: "20 kg",
    dimensions: "3ft, 8cm",
    priceRange: "25$ - 30$",
    pickupPeriod: "Feb 01 - Feb 05",
    departure: "New York, USA",
    destination: "London, UK",
    comments: "Handle with care - Fragile items",
  },
  {
    id: 3,
    title: "Domestic Parcel - FedEx",
    image: ImageProvider.parcel3,
    weight: "5 kg",
    dimensions: "2ft, 3cm",
    priceRange: "8$ - 10$",
    pickupPeriod: "Mar 10 - Mar 15",
    departure: "Los Angeles, CA",
    destination: "Chicago, IL",
    comments: "No liquids allowed",
  },
  {
    id: 4,
    title: "Express Parcel - UPS",
    image: ImageProvider.parcel4,
    weight: "15 kg",
    dimensions: "5ft, 6cm",
    priceRange: "18$ - 22$",
    pickupPeriod: "Apr 01 - Apr 05",
    departure: "Miami, FL",
    destination: "Orlando, FL",
    comments: "Fragile, handle carefully",
  },
  {
    id: 5,
    title: "Overnight Parcel - TNT",
    image: ImageProvider.parcel1,
    weight: "8 kg",
    dimensions: "3ft, 4cm",
    priceRange: "12$ - 15$",
    pickupPeriod: "May 05 - May 10",
    departure: "Seattle, WA",
    destination: "Portland, OR",
    comments: "Keep upright",
  },
];

const Active = () => {
  return (
    <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
      {fakeParcels.map((parcel) => (
        <div
          key={parcel.id}
          className="bg-[#E8F0FB] p-2.5 rounded-2xl shadow-md overflow-hidden border border-gray-100"
        >
          {/* Image */}
          <div className="relative">
            <img
              src={parcel.image} // dynamic image
              alt="Parcel"
              className="w-full h-52 object-cover rounded-2xl"
            />
          </div>

          {/* Content */}
          <div>
            <h2 className="text-2xl font-medium py-2.5">{parcel.title}</h2>

            <div className="grid grid-cols-2 gap-y-2 text-sm">
              <p className="flex flex-col gap-1.5 text-[#333]">
                Estimated Weight:
                <span className="font-medium text-black text-base">
                  {parcel.weight}
                </span>
              </p>

              <p className="flex flex-col gap-1.5 text-[#333]">
                Dimensions:
                <span className="font-medium text-black text-base">
                  {parcel.dimensions}
                </span>
              </p>

              <p className="flex flex-col gap-1.5 text-[#333]">
                Price Range:
                <span className="font-medium text-black text-base">
                  {parcel.priceRange}
                </span>
              </p>

              <p className="flex flex-col gap-1.5 text-[#333]">
                Desired pick-up period:
                <span className="font-medium text-black text-base">
                  {parcel.pickupPeriod}
                </span>
              </p>
            </div>

            <div className="grid grid-cols-1 gap-y-2 text-sm mt-3">
              <p className="flex flex-col gap-1.5 text-[#333]">
                Departure:
                <span className="font-medium text-black text-base">
                  {parcel.departure}
                </span>
              </p>
              <p className="flex flex-col gap-1.5 text-[#333]">
                Destination:
                <span className="font-medium text-black text-base">
                  {parcel.destination}
                </span>
              </p>
              <p className="flex flex-col gap-1.5 text-[#333]">
                Comments:
                <span className="font-medium text-black text-base">
                  {parcel.comments}
                </span>
              </p>
            </div>
          </div>

          {/* Footer Button */}
          <div className="border-t px-4 pt-5 mt-5">
            <button className="w-full bg-custom-primary hover:bg-orange-600 flex items-center justify-center gap-2 text-white font-medium py-2.5 rounded-md transition">
              <AiOutlineMessage className="text-xl" /> Get in touch
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Active;
