import React, { useRef } from "react";
import Title from "../common/Title";
import ImageProvider from "../common/ImageProvider";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
gsap.registerPlugin(ScrollTrigger);

const data = [
  {
    id: 1,
    name: "Ronald Richards",
    address: "3891 Ranchview Dr. Richardson, California 62639",
    image: ImageProvider.user,
    desc: "Dolor sit amet consectetur. Quam bibendum sit nec egestas facilisis molestie nisi sit sed. Lobortis neque neque amet facilisis sapien velit sed id suspendisse. Sed ac porta pellentesque magna. Varius nisl aliquet mauris tempor amet in.",
  },
  {
    id: 2,
    name: "Leslie Alexander",
    address: "3517 W. Gray St. Utica, Pennsylvania 57867",
    image: ImageProvider.user1,
    desc: "Dolor sit amet consectetur. Quam bibendum sit nec egestas facilisis molestie nisi sit sed. Lobortis neque neque amet facilisis sapien velit sed id suspendisse. Sed ac porta pellentesque magna. Varius nisl aliquet mauris tempor amet in.",
  },
  {
    id: 3,
    name: "Devon Lane",
    address: "2715 Ash Dr. San Jose, South Dakota 83475",
    image: ImageProvider.user,
    desc: "Lorem ipsum dolor sit amet consectetur. Tristique nunc sapien amet. Phasellus risus sed euismod turpis mauris integer.",
  },
  {
    id: 4,
    name: "Courtney Henry",
    address: "8502 Preston Rd. Inglewood, Maine 98380",
    image: ImageProvider.user1,
    desc: "Facilisi nisi sit sed. Lobortis neque neque amet facilisis sapien velit sed id suspendisse. Varius nisl aliquet mauris tempor amet in.",
  },
];

const Testimonial = () => {
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
        Testimonials
      </Title>
      <Title ref={subtitleRef} level="title64" className="text-center">
        What users said
      </Title>
      <div className="mt-6">
        <Swiper
          loop={true}
          spaceBetween={20}
          slidesPerView={1}
          breakpoints={{
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 2 },
          }}
          grabCursor={true}
        >
          {data.map((item) => (
            <SwiperSlide key={item.id} className="my-4">
              <div className="bg-custom-secondary p-5 lg:p-8 rounded-lg text-[#333333] text-center h-[380px]">
                <div className="flex justify-center">
                  <img src={item.image} alt={item.name} />
                </div>
                <h2 className="text-xl lg:text-[30px] font-medium mt-2">
                  {item.name}
                </h2>
                <p className="my-2">{item.address}</p>
                <p>{item.desc}</p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default Testimonial;
