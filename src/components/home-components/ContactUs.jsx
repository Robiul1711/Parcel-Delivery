import React, { useRef } from "react";
import { PiEnvelopeSimpleThin } from "react-icons/pi";
import Title from "../common/Title";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

const ContactUs = () => {
  const sectionRef = useRef(null);
  const titleRef = useRef(null);
  const subtitleRef1 = useRef(null);
  const subtitleRef2 = useRef(null);
  const btnRef = useRef(null);

  useGSAP(
    () => {
      gsap.from(
        [
          titleRef.current,
          subtitleRef1.current,
          subtitleRef2.current,
          btnRef.current,
        ],
        {
          y: 50,
          opacity: 0,
          duration: 1,
          ease: "power3.out",
          stagger: 0.2,
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 80%",
            toggleActions: "play none none none",
          },
        }
      );
    },
    { scope: sectionRef }
  );

  return (
    <div ref={sectionRef} className="section-padding-x py-8 md:py-16">
      <Title ref={titleRef} level="title40" className="text-center">
        Contact Us
      </Title>
      <Title ref={subtitleRef1} level="title64" className="text-center">
        We Are Here to Talk
      </Title>
      <p
        ref={subtitleRef2}
        className="text-center text-gray-600 mt-2 w-full lg:w-[40%] mx-auto"
      >
        Experience seamless logistics with our reliable, efficient, and tailored
        solutions — let us handle your supply chain, so you can focus on growing
        your business
      </p>
      <div ref={btnRef} className="flex justify-center mt-4">
        <button className="group flex items-center gap-2 lg:gap-4 mt-4 bg-custom-secondary py-3 px-6 rounded-full font-medium cursor-pointer hover:bg-custom-primary hover:text-white transition-all duration-300 ease-in-out">
          Contact Us
          <span className="bg-custom-primary p-2 rounded-full text-white transition-all duration-300 transform group-hover:translate-x-2">
            <PiEnvelopeSimpleThin size={22} />
          </span>
        </button>
      </div>
    </div>
  );
};

export default ContactUs;
