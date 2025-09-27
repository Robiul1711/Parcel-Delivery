import React, { useRef } from "react";
import Title from "../common/Title";
import ImageProvider from "../common/ImageProvider";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

const AboutUs = () => {
  const sectionRef = useRef(null);
  const titleRef = useRef(null);
  const titleRef1 = useRef(null);
  const subtitleRef = useRef(null);
  const subtitleRef2 = useRef(null);
  const imageRef = useRef(null);
  const cardRef = useRef(null);
  useGSAP(() => {
    gsap.from(
      [
        sectionRef.current,
        titleRef.current,
        subtitleRef.current,
        cardRef.current,
        subtitleRef2.current,
        imageRef.current,
        titleRef1.current,
      ],
      {
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
      }
    );
  });
  return (
    <div ref={sectionRef} className="section-padding-x py-8 md:py-16">
      <Title ref={titleRef} level="title40" className="text-center">
        About Us
      </Title>
      <Title ref={subtitleRef} level="title64" className="text-center">
        Who We Are
      </Title>
      <p
        ref={subtitleRef2}
        className="text-center text-gray-600 mt-2 w-full lg:w-[40%] mx-auto"
      >
        Bagages Utiles connects travelers and individuals who need to send
        parcels across countries in a cost-effective and human way.
      </p>
      <div ref={imageRef} className="flex justify-center my-4">
        <img src={ImageProvider.about} alt="image" />
      </div>
      <Title ref={titleRef1} level="title64" className="text-center pt-12">
        Why Use Bagages Utiles?
      </Title>
      <div
        ref={cardRef}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 lg:gap-8 mt-4 lg:mt-8"
      >
        <div className="bg-custom-secondary p-6 rounded-lg text-center hover:shadow transition duration-200 ease-in-out">
          <div className="flex justify-center">
            <img src={ImageProvider.hand1} alt="image" />
          </div>
          <h4 className="text-xl lg:text-[30px] font-medium mt-2 text-[#333333]">
            Eco
          </h4>
          <h5 className="text-xl lg:text-[30px] font-medium text-[#333333]">
            friendly
          </h5>
        </div>
        <div className="bg-custom-secondary p-6 rounded-lg text-center hover:shadow transition duration-200 ease-in-out">
          <div className="flex justify-center">
            <img src={ImageProvider.ball} alt="image" />
          </div>
          <h4 className="text-xl lg:text-[30px] font-medium mt-2 text-[#333333]">
            Human
          </h4>
          <h5 className="text-xl lg:text-[30px] font-medium text-[#333333]">
            Connection
          </h5>
        </div>
        <div className="bg-custom-secondary p-6 rounded-lg text-center hover:shadow transition duration-200 ease-in-out">
          <div className="flex justify-center">
            <img src={ImageProvider.car} alt="image" />
          </div>
          <h4 className="text-xl lg:text-[30px] font-medium mt-2 text-[#333333]">
            Fast
          </h4>
          <h5 className="text-xl lg:text-[30px] font-medium text-[#333333]">
            Delivery
          </h5>
        </div>
        <div className="bg-custom-secondary p-6 rounded-lg text-center hover:shadow transition duration-200 ease-in-out">
          <div className="flex justify-center">
            <img src={ImageProvider.hand} alt="image" />
          </div>
          <h4 className="text-xl lg:text-[30px] font-medium mt-2 text-[#333333]">
            More
          </h4>
          <h5 className="text-xl lg:text-[30px] font-medium text-[#333333]">
            Affordable
          </h5>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
