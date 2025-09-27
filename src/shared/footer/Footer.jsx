import { Logo } from "@/assets/icon/svgIcon";
import Title from "@/components/common/Title";
import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="section-padding-x pb-6 pt-12 bg-custom-primary">
      {/* Top Section */}
      <div className="flex flex-col lg:flex-row items-start justify-between gap-10">
        {/* Logo + About */}
        <div className="w-full lg:w-[40%] flex flex-col items-center lg:items-start text-center lg:text-left">
          <Link
            to="/"
            className="flex flex-col items-center lg:items-start justify-center cursor-pointer"
          >
            <Logo />
            <div className="flex items-center gap-1 mt-2">
              <Title level="title40" className="!font-bold text-white">
                Bageges
              </Title>
              <p className="text-white">Utiles</p>
            </div>
          </Link>
        </div>

        {/* Company Links */}
        <div className="w-full sm:w-[50%] lg:w-[25%] text-center sm:text-left">
          <Title level="title20" className="!font-bold mb-4 text-white">
            Company
          </Title>
          <ul className="flex flex-col gap-2 text-white">
            <li className="cursor-pointer hover:text-black  transition">
              <Link to="/signup">About Us</Link>
            </li>
            <li className="cursor-pointer hover:text-black  transition">
              <Link to={"/faqs"}>Our Progress</Link>
            </li>
            <li className="cursor-pointer hover:text-black  transition">
              <Link to="/privacy-policy">Reports</Link>
            </li>
          </ul>
        </div>

        {/* Help Links */}
        <div className="w-full sm:w-[50%] lg:w-[25%] text-center sm:text-left">
          <Title level="title20" className="!font-bold mb-4 text-white">
            Help
          </Title>
          <ul className="flex flex-col gap-2 text-white">
            <li className="cursor-pointer hover:text-black transition">
              <Link to="/signup">Contact Us</Link>
            </li>
            <li className="cursor-pointer hover:text-black  transition">
              <Link to={"/faqs"}>FAQs</Link>
            </li>
            <li className="cursor-pointer hover:text-black  transition">
              <Link to="/privacy-policy">Privacy Policy</Link>
            </li>
            <li className="cursor-pointer hover:text-black  transition">
              <Link to="/terms-conditions">Terms & Conditions</Link>
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom note */}
      <div className="mt-10 text-center text-sm text-white">
        © {new Date().getFullYear()} Bageges Utiles. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
