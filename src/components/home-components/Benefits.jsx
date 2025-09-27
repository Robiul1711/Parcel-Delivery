import React, { useRef } from "react";
import ImageProvider from "../common/ImageProvider";
import Title from "../common/Title";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

const Benefits = () => {
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
        benefits
      </Title>
      <Title ref={subtitleRef} level="title64" className="text-center">
        Why Bagages Utiles?
      </Title>
      <div
        ref={cardRef}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-8 mt-4 lg:mt-8"
      >
        <div className="bg-custom-secondary p-6 rounded-lg text-center hover:shadow transition duration-200 ease-in-out">
          <div className="flex justify-center">
            <img src={ImageProvider.hand3} alt="image" />
          </div>
          <h4 className="text-xl lg:text-[30px] font-medium mt-2 text-[#333333]">
            Peer-to-peer support
          </h4>
        </div>
        <div className="bg-custom-secondary p-6 rounded-lg text-center hover:shadow transition duration-200 ease-in-out">
          <div className="flex justify-center">
            <img src={ImageProvider.dollar} alt="image" />
          </div>
          <h4 className="text-xl lg:text-[30px] font-medium mt-2 text-[#333333]">
            Cost-effective and without intermediaries
          </h4>
        </div>
        <div className="bg-custom-secondary p-6 rounded-lg text-center hover:shadow transition duration-200 ease-in-out">
          <div className="flex justify-center">
            <img src={ImageProvider.leg} alt="image" />
          </div>
          <h4 className="text-xl lg:text-[30px] font-medium mt-2 text-[#333333]">
            Carbon footprint reduction
          </h4>
        </div>
      </div>
    </div>
  );
};

export default Benefits;
