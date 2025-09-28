import { Arrow } from "@/assets/icon/svgIcon";
import ImageProvider from "@/components/common/ImageProvider";
import Title from "@/components/common/Title";
import { MoveUpRight, User } from "lucide-react";
import { useEffect, useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import { Link, NavLink, useLocation } from "react-router-dom";

const Navbar = () => {
  const navLinks = [
    { name: "Home", href: "/" },
    { name: "My Parcels", href: "/my-parcels" },
    { name: "Chat", href: "/chat" },
    { name: "About Us", href: "/about" },
    { name: "FAQ’s", href: "/faq" },
  ];
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();
  const isHomePage = location.pathname === "/";

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileMenuOpen]);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
  };

  return (
    <>
      <nav
        className={`sticky top-0 left-0 section-padding-x right-0 z-50 w-full transition-all duration-300 ${
          scrolled
            ? "bg-custom-secondary shadow-md pt-1.5"
            : "bg-custom-secondary py-2"
        }`}
      >
        <div
          className={`mx-auto flex justify-between items-center transition-all duration-300 ${
            scrolled ? "py-2" : "pt-0 lg:pt-3"
          }`}
        >
          {/* Logo */}
          <Link
            to="/"
            onClick={closeMobileMenu}
            className="flex flex-col items-center justify-center cursor-pointer"
          >
            <img className="w-8 lg:w-18" src={ImageProvider.logo} alt="logo" />
            <div className="flex items-center gap-1">
              <Title level="title20" className="!font-bold text-[#000000]">
                Bageges
              </Title>
              <p className="text-sm text-gray-800">Utiles</p>
            </div>
          </Link>

          {/* Desktop Nav Links */}
          <div className="hidden lg:flex">
            <ul className="flex space-x-4 py-3.5 px-4 rounded-full border border-gray-300 transition-all duration-300">
              {navLinks.map((link, index) => (
                <li
                  key={index}
                  className="relative text-sm xl:text-[15px] font-medium group duration-400"
                >
                  <NavLink
                    to={link.href}
                    className={({ isActive }) =>
                      isActive
                        ? "text-white bg-custom-primary rounded-full px-4 py-1.5"
                        : scrolled
                        ? "hover:text-white hover:bg-custom-primary rounded-full px-4 py-1.5 duration-300"
                        : "text-black hover:text-white hover:bg-custom-primary rounded-full px-4 py-1.5 duration-300"
                    }
                  >
                    {link.name}
                    {/* <span
                      className={`absolute left-0 bottom-0 h-0.5 transition-all duration-300 ${
                        location.pathname === link.href
                          ? "w-full bg-custom-primary"
                          : "w-0 group-hover:w-full bg-custom-primary"
                      }`}
                    ></span> */}
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>

          {/* CTA + Mobile Menu Btn */}
          <div className="flex items-center gap-1.5 xlg:gap-4">
            <div className="hidden lg:flex justify-center items-center gap-1.5 xlg:gap-4">
              <Link
                to="/select-travelar"
                className={`group flex items-center gap-3 px-4 py-1.5 text-[15px] font-medium rounded-full border border-gray-300 cursor-pointer bg-white hover:text-white hover:bg-custom-primary duration-300 ${
                  scrolled
                    ? "text-black border-white"
                    : "text-black border-black"
                }`}
              >
                Log in
                <p className="bg-custom-primary text-white p-1 rounded-full transition-all duration-300 transform group-hover:translate-x-2">
                  <Arrow className="w-6 h-6" />
                </p>
              </Link>
            </div>

            {/* Mobile menu button */}
            <button
              className="lg:hidden focus:outline-none md:ml-2"
              onClick={toggleMobileMenu}
              aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
            >
              {mobileMenuOpen ? (
                <FiX
                  className={`w-6 h-6 lg:size-8 ${
                    scrolled
                      ? "text-white"
                      : isHomePage
                      ? "text-white"
                      : "text-black"
                  }`}
                />
              ) : (
                <FiMenu
                  className={`w-6 h-6 lg:size-8 ${
                    scrolled
                      ? "text-white"
                      : isHomePage
                      ? "text-white"
                      : "text-black"
                  }`}
                />
              )}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div
        className={`fixed z-[300] top-0 left-0 w-[300px] h-screen bg-white dark:bg-slate-900 pt-8 md:pt-20 px-5 transform transition-all duration-300 ease-in-out overflow-y-auto shadow-xl ${
          mobileMenuOpen ? "translate-x-0" : "-translate-x-full"
        } lg:hidden`}
      >
        {/* Logo */}
        <Link
          to="/"
          onClick={closeMobileMenu}
          className="flex items-center gap-2 cursor-pointer mb-6"
        >
          <img
            className="w-7 lg:w-9 object-contain"
            src={ImageProvider.logo}
            alt="logo"
          />
          <Title
            level="title28"
            className="!font-bold text-custom-primary tracking-tight"
          >
            BooknLink
          </Title>
        </Link>

        {/* Navigation Links */}
        <ul className="flex flex-col space-y-2 mt-2">
          {navLinks.map((link, index) => (
            <li key={index}>
              <NavLink
                to={link.href}
                onClick={closeMobileMenu}
                className={({ isActive }) =>
                  `block px-3 py-2 rounded-lg text-lg font-medium transition-colors duration-300 ${
                    isActive
                      ? "bg-custom-primary/10 text-custom-primary"
                      : isHomePage
                      ? "text-gray-800 dark:text-slate-200 hover:bg-gray-100 dark:hover:bg-slate-800"
                      : "text-black dark:text-slate-300 hover:bg-gray-100 dark:hover:bg-slate-800"
                  }`
                }
              >
                {link.name}
              </NavLink>
            </li>
          ))}
        </ul>

        {/* Auth Buttons */}
        <div className="flex flex-col mt-6 gap-3">
          <Link
            to="/login"
            className={`flex items-center justify-center gap-2 px-4 py-2 text-[15px] rounded-full border font-medium cursor-pointer transition-all duration-300 ${
              scrolled
                ? "text-white border-white hover:bg-white/10"
                : "text-black border-black hover:bg-black/10"
            }`}
          >
            <User size={18} />
            Log in
          </Link>

          <Link
            to="/signup"
            className={`flex items-center justify-center gap-2 px-4 py-2 text-[15px] rounded-full border font-medium transition-all duration-300 ${
              scrolled
                ? "bg-custom-primary text-white border-custom-primary hover:bg-transparent hover:text-white"
                : isHomePage
                ? "bg-custom-primary text-white border-custom-primary hover:bg-transparent hover:text-white"
                : "bg-custom-primary text-white border-custom-primary hover:bg-transparent hover:text-black"
            }`}
          >
            Sign up
            <MoveUpRight size={16} />
          </Link>
        </div>
      </div>
    </>
  );
};

export default Navbar;
