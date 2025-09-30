import React, { useEffect, useRef, useState } from "react";
import { IoChevronDown } from "react-icons/io5";

const DropdownInput = ({ options = [], defaultLabel = "Select" }) => {
  const [isActive, setIsActive] = useState(false);
  const [content, setContent] = useState(defaultLabel);
  const rootRef = useRef(null);

  useEffect(() => {
    const handlePointerDown = (event) => {
      if (rootRef.current && !rootRef.current.contains(event.target)) {
        setIsActive(false);
      }
    };
    document.addEventListener("pointerdown", handlePointerDown);
    return () => document.removeEventListener("pointerdown", handlePointerDown);
  }, []);

  return (
    <div ref={rootRef} className="relative w-full dropdown">
      <button
        type="button"
        onClick={(e) => {
          e.stopPropagation();
          setIsActive((s) => !s);
        }}
        className="bg-white dark:bg-transparent dark:border-slate-600 dark:text-[#abc2d3] border border-[#d1d1d1] rounded-md w-full justify-between px-3 py-2 lg:py-3 flex items-center gap-2 cursor-pointer"
      >
        <span className="truncate">{content}</span>
        <IoChevronDown
          className={`${
            isActive ? "rotate-180" : "rotate-0"
          } transition-all duration-300 text-[1rem] lg:text-[1.2rem]`}
        />
      </button>

      {/* Dropdown Options */}
      <div
        className={`${
          isActive
            ? "opacity-100 scale-100 pointer-events-auto"
            : "opacity-0 scale-95 pointer-events-none"
        } absolute top-14 left-0 right-0 dark:bg-slate-800 bg-white rounded-xl flex flex-col overflow-hidden transition-all duration-200 ease-in-out z-50`}
        style={{ boxShadow: "0 15px 60px -15px rgba(0, 0, 0, 0.3)" }}
      >
        {options?.map((option, index) => (
          <p
            key={index}
            className="py-2 lg:py-3 px-4 dark:hover:bg-slate-900/40 hover:bg-[#ececec] transition-all duration-150 cursor-pointer text-start"
            onClick={(e) => {
              e.stopPropagation();
              setContent(option);
              setIsActive(false);
            }}
          >
            {option}
          </p>
        ))}
      </div>
    </div>
  );
};

export default DropdownInput;
