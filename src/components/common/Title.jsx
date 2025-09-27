import React, { forwardRef } from "react";
import clsx from "clsx";

const sizeMap = {
  title108: "text-[54px] sm:text-[64px] xl:text-[108px] font-bold",
  title80: " text-[44px] sm:text-[54px] xl:text-[80px] font-bold",
  title64: "text-[34px] sm:text-[44px] xl:text-[64px] font-bold",
  title56: "text-3xl md:text-[40px] xl:text-[56px] font-bold",
  title48: "text-2xl md:text-[34px] xl:text-[48px] font-bold",
  title40: "text-xl xl:text-[40px] font-semibold",
  title36: "text-xl md:text-2xl lg:text-[36px] font-semibold",
  title32: "text-xl md:text-[28px] lg:text-[32px] font-medium",
  title28: "text-xl lg:text-[24px] xl:text-[28px] font-medium",
  title24: "text-base md:text-[24px] font-medium",
  title22: "lg:text-base xl:text-[22px] font-medium",
  title20: " text-base  xl:text-xl font-normal",
  title18: "text-sm xl:text-[18px]  font-normal",
  title16: "text-sm md:text-[16px] font-normal",
  title14: "text-sm sm:text-base font-normal",
  title12: "text-xs sm:text-sm font-normal",
};
const Title = forwardRef(
  ({ children, level, className = "", ...rest }, ref) => {
    return (
      <h2 ref={ref} className={clsx(sizeMap[level], className)} {...rest}>
        {children}
      </h2>
    );
  }
);

Title.displayName = "Title";
export default Title;
