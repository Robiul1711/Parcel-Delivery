import React, { useState } from "react";

const PriceRangeSlider = () => {
  const [minValue, setMinValue] = useState(0);
  const [maxValue, setMaxValue] = useState(109);
  const [isTermsAccepted, setIsTermsAccepted] = useState(false);

  const min = 0;
  const max = 999;

  const handleMinChange = (e) => {
    const value = Math.min(Number(e.target.value), maxValue - 1);
    setMinValue(value);
  };

  /*************  ✨ Windsurf Command ⭐  *************/
  /**
   * Handles change event for max value input, sets maxValue to the
   * maximum of the input value and minValue + 1.
   * @param {Event} e - The change event.
   */
  /*******  611f3768-d99f-4158-bc66-dbea6ad81863  *******/ const handleMaxChange =
    (e) => {
      const value = Math.max(Number(e.target.value), minValue + 1);
      setMaxValue(value);
    };

  const minPercent = ((minValue - min) / (max - min)) * 100;
  const maxPercent = ((maxValue - min) / (max - min)) * 100;

  return (
    <div className="w-full bg-white">
      <div className="relative mb-8 mt-4">
        {/* Track Background */}
        <div className="h-3 bg-orange-50 rounded-full relative">
          {/* Active Range */}
          <div
            className="h-3 bg-orange-400 rounded-full absolute"
            style={{
              left: `${minPercent}%`,
              width: `${maxPercent - minPercent}%`,
            }}
          />

          {/* Min Range Input */}
          <input
            type="range"
            min={min}
            max={max}
            value={minValue}
            onChange={handleMinChange}
            className="absolute w-full h-3 bg-transparent appearance-none cursor-pointer slider-thumb"
            style={{ zIndex: 1 }}
          />

          {/* Max Range Input */}
          <input
            type="range"
            min={min}
            max={max}
            value={maxValue}
            onChange={handleMaxChange}
            className="absolute w-full h-3 bg-transparent appearance-none cursor-pointer slider-thumb"
            style={{ zIndex: 2 }}
          />
        </div>

        {/* Value Labels */}
        <div className="flex justify-between items-center mt-4">
          <span className="text-sm font-medium text-gray-900">{minValue}$</span>
          <span className="text-sm font-medium text-gray-900">{maxValue}$</span>
        </div>
      </div>

      {/* Terms and Conditions Checkbox */}
      <div className="flex items-center space-x-3">
        <label className="flex items-center cursor-pointer">
          <input
            type="checkbox"
            checked={isTermsAccepted}
            onChange={(e) => setIsTermsAccepted(e.target.checked)}
            className="sr-only"
          />
          <div
            className={`w-4 h-4 border-2 rounded flex items-center justify-center ${
              isTermsAccepted
                ? "bg-orange-400 border-orange-400"
                : "bg-white border-gray-300"
            }`}
          >
            {isTermsAccepted && (
              <svg
                className="w-2.5 h-2.5 text-white"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                  clipRule="evenodd"
                />
              </svg>
            )}
          </div>
          <span className="ml-3 text-sm text-gray-700">
            Accept Terms and Conditions
          </span>
        </label>
      </div>
    </div>
  );
};

export default PriceRangeSlider;
