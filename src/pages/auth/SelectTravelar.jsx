import ImageProvider from "@/components/common/ImageProvider";
import { MoveRight } from "lucide-react";
import React from "react";

const SelectTravelar = () => {
  return (
    <div className="">
      <img
        src={ImageProvider.group}
        alt="image"
        className="w-full h-full relative object-cover"
      />
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white/20 p-6 lg:p-12 border border-custom-primary rounded-lg">
        <h2 className="text-xl lg:text-3xl font-bold mb-2 text-white">
          Welcome to Bagages Utiles
        </h2>
        <p className="text-sm lg:text-lg text-white text-center">
          Choose your role to continue
        </p>
        <div className="flex justify-center gap-4 my-4">
          <button className="border bg-white/40 px-12 py-2.5 rounded-lg text-white hover:bg-white hover:text-black cursor-pointer transsition duration-300 ease-in-out text-center">
            I'm a <br /> Traveler
          </button>
          <button className="border bg-white/40 px-12 py-2.5 rounded-lg text-white hover:bg-white hover:text-black cursor-pointer transsition duration-300 ease-in-out text-center">
            I'm Sending a <br /> Parcel
          </button>
        </div>
        <div className="flex justify-center">
          <button className="flex items-center gap-2 bg-custom-primary px-12 py-3 rounded-lg text-white hover:bg-white hover:text-black cursor-pointer transsition duration-300 ease-in-out text-center">
            Get Started <MoveRight />
          </button>
        </div>
      </div>
    </div>
  );
};

export default SelectTravelar;
