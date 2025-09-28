import React from "react";
import { MoreHorizontal } from "lucide-react";
import parcel1 from "@/assets/images/parcel1.png";
import { AiOutlineMessage } from "react-icons/ai";
const fakeParcels = [
  {
    id: 1,
    title: "Domestic Parcels - BP&O",
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
    weight: "5 kg",
    dimensions: "2ft, 3cm",
    priceRange: "8$ - 10$",
    pickupPeriod: "Mar 10 - Mar 15",
    departure: "Los Angeles, CA",
    destination: "Chicago, IL",
    comments: "No liquids allowed",
  
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
          {/* Image + Menu */}
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
              <p className="flex gap-1.5 flex-col text-[#333]">
                Estimated Weight:
                <span className="font-medium text-black text-base">
                  {parcel.weight}
                </span>
              </p>

              <p className="flex gap-1.5 flex-col text-[#333]">
                Dimensions:
                <span className="font-medium text-black text-base">
                  {parcel.dimensions}
                </span>
              </p>

              <p className="flex gap-1.5 flex-col text-[#333]">
                Price Range:
                <span className="font-medium text-black text-base">
                  {parcel.priceRange}
                </span>
              </p>

              <p className="flex gap-1.5 flex-col text-[#333]">
                Desired pick-up period:
                <span className="font-medium text-black text-base">
                  {parcel.pickupPeriod}
                </span>
              </p>
            </div>

            <div className="grid grid-cols-1 gap-y-2 text-sm mt-3">
              <p className="flex gap-1.5 flex-col text-[#333]">
                Departure:
                <span className="font-medium text-black text-base">
                  {parcel.departure}
                </span>
              </p>
              <p className="flex gap-1.5 flex-col text-[#333]">
                Destination:
                <span className="font-medium text-black text-base">
                  {parcel.destination}
                </span>
              </p>
              <p className="flex gap-1.5 flex-col text-[#333]">
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
             <AiOutlineMessage className="text-xl"/> Get in tuch
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Active;
