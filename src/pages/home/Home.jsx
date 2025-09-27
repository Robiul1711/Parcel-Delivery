import AboutUs from "@/components/home-components/AboutUs";
import Benefits from "@/components/home-components/benefits";
import ContactUs from "@/components/home-components/ContactUs";
import FAQ from "@/components/home-components/FAQ";
import HomeBanner from "@/components/home-components/HomeBanner";
import HowToUse from "@/components/home-components/HowToUse";
import Testimonial from "@/components/home-components/Testimonial";
import React from "react";
import { ScrollRestoration } from "react-router-dom";

const Home = () => {
  return (
    <>
      <ScrollRestoration />
      <HomeBanner />
      <AboutUs />
      <p className="bg-custom-secondary py-4"></p>
      <Testimonial />
      <p className="bg-custom-secondary py-4"></p>
      <HowToUse />
      <p className="bg-custom-secondary py-4"></p>
      <FAQ />
      <p className="bg-custom-secondary py-4"></p>
      <Benefits />
      <p className="bg-custom-secondary py-4"></p>
      <ContactUs />
    </>
  );
};

export default Home;
