import React, { useRef, useState } from "react";
import Title from "../common/Title";
import ImageProvider from "../common/ImageProvider";
import { FaChevronDown } from "react-icons/fa6";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

const FAQ = () => {
  const sectionRef = useRef(null);
  const titleRef = useRef(null);
  const subtitleRef = useRef(null);
  const subtitleRef2 = useRef(null);
  const cardRef = useRef(null);
  useGSAP(() => {
    gsap.from(
      [
        titleRef.current,
        subtitleRef.current,
        cardRef.current,
        subtitleRef2.current,
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
  const accordingData = [
    {
      title: "What areas do you deliver to?",
      description:
        "Wireframing outlines the basic structure and layout of a design, serving as a visual guide before detailed development.",
    },
    {
      title: " How long does delivery take?",
      description:
        "User-centered design ensures products meet the needs and preferences of the end-users, enhancing usability and satisfaction.",
    },
    {
      title: "What items are prohibited from shipping?",
      description:
        "Contrast in graphic design emphasizes differences, making elements stand out and improving visual hierarchy.",
    },

    {
      title: `Are you packing materials eco-friendly?`,
      description:
        "Responsive design ensures web pages adapt to various screen sizes, providing an optimal user experience on different devices.",
    },

    {
      title: "What is the significance of color theory in design?",
      description:
        "Color theory guides the selection and combination of colors to evoke specific emotions, enhance readability, and create visually appealing designs.",
    },
  ];

  const [isAccordingOpen, setIsAccordingOpen] = useState(0);

  const handleClick = (index) =>
    setIsAccordingOpen((prevIndex) => (prevIndex === index ? null : index));

  return (
    <div ref={sectionRef} className="section-padding-x py-8 md:py-16">
      <Title ref={titleRef} level="title40" className="text-center">
        FAQ’s
      </Title>
      <Title ref={subtitleRef} level="title64" className="text-center">
        We’ve Got Answers
      </Title>
      <p
        ref={subtitleRef2}
        className="text-center text-gray-600 mt-2 w-full lg:w-[55%] mx-auto"
      >
        Our comprehensive FAQ section is designed to give you quick, accurate,
        and helpful answers to the most common queries. Whether you're sending a
        local parcel or managing international shipments, we’re here to make
        your experience smooth and stress-free
      </p>
      <div
        ref={cardRef}
        className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-12 mt-6 lg:mt-12"
      >
        <div>
          <img
            src={ImageProvider.faq}
            alt="image"
            className="w-full h-[350px] lg:h-[450px] object-contain bg-custom-secondary rounded-lg p-6 hover:shadow transition duration-200 ease-in-out"
          />
        </div>
        <div>
          <div className="flex gap-3 flex-col w-full">
            {accordingData?.map((according, index) => (
              <article
                key={index}
                className="border-b dark:border-slate-700 border-border rounded py-4"
              >
                <div
                  className="flex gap-2 cursor-pointer items-center justify-between w-full"
                  onClick={() => handleClick(index)}
                >
                  <h2 className="text-[#333333] font-[600] text-[1.2rem]">
                    {according.title}
                  </h2>
                  <p>
                    <FaChevronDown
                      className={`text-[1.2rem] dark:text-slate-600 text-text transition-all duration-300 ${
                        isAccordingOpen === index &&
                        "rotate-[180deg] !text-[#333333]"
                      }`}
                    />
                  </p>
                </div>
                <div
                  className={`grid transition-all duration-300 overflow-hidden ease-in-out ${
                    isAccordingOpen === index
                      ? "grid-rows-[1fr] opacity-100 mt-4"
                      : "grid-rows-[0fr] opacity-0"
                  }`}
                >
                  <p className="text-[#424242] dark:text-[#abc2d3] text-[0.9rem] overflow-hidden">
                    {according.description}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FAQ;
