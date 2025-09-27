import React, { useRef } from "react";
import ImageProvider from "../common/ImageProvider";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const HomeBanner = () => {
  const titleRef = useRef(null);

  useGSAP(() => {
    gsap.from([titleRef.current], {
      y: 50,
      opacity: 0,
      duration: 1,
      ease: "power3.out",
      delay: 0.3,
      stagger: 0.1,
    });
  }, []);

  return (
    <div className="relative w-full pb-6 md:pt-16 lg:pt-36 bg-custom-secondary">
      {/* Image Wrapper with rounded corners */}
      <div className="w-full h-[580px] md:h-[580px] lg:h-[760px] rounded-t-lg overflow-hidden pt-62">
        <img
          src={ImageProvider.banner}
          alt="Tutoring banner"
          className="w-full h-full"
        />
      </div>

      {/* Banner Content */}
      <div className="absolute top-[35vh] left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center px-4">
        <h1
          ref={titleRef}
          className="text-4xl md:text-6xl lg:text-7xl xl:text-8xl font-bold mb-4 leading-tight"
        >
          For Doorstep to Destination
        </h1>
      </div>
    </div>
  );
};

export default HomeBanner;
