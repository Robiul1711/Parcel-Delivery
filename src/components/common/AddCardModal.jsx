import { ChevronLeft } from "lucide-react";
import React from "react";

const AddCardModal = ({ isModalOpen, setIsModalOpen }) => {
  return (
    <div
      className={`${
        isModalOpen ? "visible opacity-100" : "invisible opacity-0"
      } w-full h-screen fixed top-0 left-0 z-[200000000] dark:bg-black/40 bg-[#0000002a] flex items-center justify-center transition-all duration-300`}
    >
      <div
        className={`${
          isModalOpen ? "scale-100 opacity-100" : "scale-90 opacity-0"
        } w-[95%] sm:w-[80%] md:w-[50%] lg:w-[36%] dark:bg-slate-800 bg-white rounded-xl shadow-xl p-6 lg:px-10 transition-all duration-300`}
      >
        {/* Header */}
        <div className="flex items-center border-b pb-4 mb-4">
          <button
            className="border border-[#d1d1d1] p-2 text-xl dark:text-[#abc2d3]/70 dark:hover:bg-slate-900/50 hover:bg-[#e7e7e7] rounded-full transition-all duration-300 cursor-pointer"
            onClick={() => setIsModalOpen(false)}
          >
            <ChevronLeft />
          </button>
          <h2 className="text-2xl lg:text-3xl font-bold flex-1 text-center">
            Add Card
          </h2>
        </div>

        {/* Form */}
        <form className="space-y-4">
          {/* Card Holder */}
          <div>
            <label className="block font-medium mb-1">Card holder name</label>
            <input
              type="text"
              placeholder="Card holder name"
              className="border px-4 py-3 rounded-lg w-full focus:outline-none focus:ring-2 focus:ring-custom-primary"
            />
          </div>

          {/* Card Number */}
          <div>
            <label className="block font-medium mb-1">Card Number</label>
            <input
              type="text"
              placeholder="Card number"
              className="border px-4 py-3 rounded-lg w-full focus:outline-none focus:ring-2 focus:ring-custom-primary"
            />
          </div>

          {/* Validity + CVV */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block font-medium mb-1">Validity</label>
              <input
                type="text"
                placeholder="MM/YY"
                className="border px-4 py-3 rounded-lg w-full focus:outline-none focus:ring-2 focus:ring-custom-primary"
              />
            </div>
            <div>
              <label className="block font-medium mb-1">CVV</label>
              <input
                type="text"
                placeholder="CVV"
                className="border px-4 py-3 rounded-lg w-full focus:outline-none focus:ring-2 focus:ring-custom-primary"
              />
            </div>
          </div>

          {/* Submit */}
          <button
            type="submit"
            className="bg-custom-primary hover:bg-custom-primary/90 text-white font-semibold my-2 px-4 py-3 rounded-lg w-full transition duration-200 cursor-pointer"
          >
            Add Card
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddCardModal;
