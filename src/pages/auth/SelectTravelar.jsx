import ImageProvider from "@/components/common/ImageProvider";
import { MoveRight } from "lucide-react";
import React, { useState } from "react";
import { Link } from "react-router-dom";

const SelectTraveler = () => {
  const [selected, setSelected] = useState(null);

  return (
    <div className="relative h-screen w-full flex items-center justify-center">
      {/* Background */}
      <img
        src={ImageProvider.group}
        alt="background"
        className="absolute inset-0 w-full h-full object-cover object-center"
      />
      <div className="absolute inset-0 bg-black/20" />

      {/* Centered Content */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white/20 p-6 lg:p-12 border border-custom-primary rounded-lg text-center">
        <h2 className="text-xl lg:text-3xl font-bold mb-2 text-white">
          Welcome to Bagages Utiles
        </h2>
        <p className="text-sm lg:text-lg text-white mb-4">
          Choose your role to continue
        </p>

        {/* Role Buttons */}
        <div className="flex justify-center gap-4 my-4">
          <button
            onClick={() => setSelected("traveler")}
            className={`border px-12 py-2.5 rounded-lg cursor-pointer duration-300 
              ${
                selected === "traveler"
                  ? "bg-white text-black"
                  : "bg-white/25 hover:bg-white text-black"
              }`}
          >
            I'm a <br /> Traveler
          </button>

          <button
            onClick={() => setSelected("parcel")}
            className={`border px-12 py-2.5 rounded-lg cursor-pointer duration-300 
              ${
                selected === "parcel"
                  ? "bg-white text-black"
                  : "bg-white/40 hover:bg-white text-black"
              }`}
          >
            I'm Sending a <br /> Parcel
          </button>
        </div>

        {/* Get Started Button */}
        <div className="flex justify-center">
          <Link
            to="/login"
            className="group flex items-center gap-2 bg-custom-primary px-12 py-3 rounded-lg text-white hover:bg-white hover:text-black cursor-pointer duration-300"
          >
            Get Started
            <span className="transition-all duration-300 transform group-hover:translate-x-2 flex items-center">
              <MoveRight />
            </span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SelectTraveler;
