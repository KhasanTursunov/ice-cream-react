import React from "react";
import headerLogo from "../../../assets/imges/header-logo.png";

const Navbar = ({ setTheme }) => {
  return (
    <section className="navbar bg-[#F2CEDA]">
      <div className="container mx-auto px-4container max-w-lg md:max-w-2xl lg:max-w-7xl">
        <div className="navbar_wrapper flex justify-between items-center">
          <nav className="header-logo">
            <a href="./index.jsx">
              <img src={headerLogo} alt="" />
            </a>
          </nav>

          <nav className="header-links dark:text-red-500">
            <ul className="navbar-links flex gap-10 ">
              <li>
                <a
                  className="font-roboto   hover:text-red-500 transition-colors duration-500 ease-in-out"
                  href="#"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  className="font-roboto   hover:text-red-500 transition-colors duration-500 ease-in-out"
                  href="#"
                >
                  Product
                </a>
              </li>
              <li>
                <a
                  className="font-roboto   hover:text-red-500 transition-colors duration-500 ease-in-out"
                  href="#"
                >
                  Pricing
                </a>
              </li>
              <li>
                <a
                  className="font-roboto   hover:text-red-500 transition-colors duration-500 ease-in-out"
                  href="#"
                >
                  Testimonials
                </a>
              </li>
              <li>
                <a
                  className="font-roboto   hover:text-red-500 transition-colors duration-500 ease-in-out"
                  href="#"
                >
                  Contact Us
                </a>
              </li>
            </ul>
          </nav>

          <nav className="header-btns">
            <button
              onClick={() => setTheme((pS) => !pS)}
              className="heared-btn className='font-roboto' w-40 h-12 rounded-md font-bold font-hind-madurai text-base leading-6 bg-[#D23166] text-white border-2 border-transparent hover:bg-white hover:text-[#D23166] hover:border-[#D23166] transition-all duration-500 ease-in-out"
            >
              Buy Now
            </button>
          </nav>
        </div>
      </div>
    </section>
  );
};

export default Navbar;
