import React, { useRef } from "react";
import ImageProvider from "../common/ImageProvider";
import Title from "../common/Title";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const HowToUse = () => {
  const sectionRef = useRef(null);
  const titleRef = useRef(null);
  const subtitleRef = useRef(null);
  const cardRef = useRef(null);
  useGSAP(() => {
    gsap.from([titleRef.current, subtitleRef.current, cardRef.current], {
      y: 50,
      opacity: 0,
      duration: 1,
      ease: "power3.out",
      delay: 0.2,
      stagger: 0.2,
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top 80%",
        toggleActions: "play none none none",
      },
    });
  });
  return (
    <div ref={sectionRef} className="section-padding-x py-8 md:py-16">
      <Title ref={titleRef} level="title40" className="text-center">
        How to use
      </Title>
      <Title ref={subtitleRef} level="title64" className="text-center">
        Easy as it can be
      </Title>
      <div
        ref={cardRef}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-8 mt-4 lg:mt-8"
      >
        <div className="bg-custom-secondary p-6 rounded-lg text-center hover:shadow transition duration-200 ease-in-out">
          <div className="flex justify-center">
            <img src={ImageProvider.car1} alt="image" />
          </div>
          <h4 className="text-xl lg:text-[30px] font-medium mt-2 text-[#333333]">
            Publish your package in a few clicks
          </h4>
        </div>
        <div className="bg-custom-secondary p-6 rounded-lg text-center hover:shadow transition duration-200 ease-in-out">
          <div className="flex justify-center">
            <img src={ImageProvider.hand2} alt="image" />
          </div>
          <h4 className="text-xl lg:text-[30px] font-medium mt-2 text-[#333333]">
            Choose a traveler who is passing by
          </h4>
        </div>
        <div className="bg-custom-secondary p-6 rounded-lg text-center hover:shadow transition duration-200 ease-in-out">
          <div className="flex justify-center">
            <img src={ImageProvider.car2} alt="image" />
          </div>
          <h4 className="text-xl lg:text-[30px] font-medium mt-2 text-[#333333]">
            Track the delivery to its destination
          </h4>
        </div>
      </div>
    </div>
  );
};

export default HowToUse;
