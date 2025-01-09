import React from 'react'
import headerLogo from '../../../assets/imges/header-logo.png'

const Navbar = () => {
  return (
    <section className="navbar bg-[#F2CEDA]">
      <div className="container mx-auto px-4container max-w-lg md:max-w-2xl lg:max-w-7xl">
        <div className="navbar_wrapper flex justify-between items-center">
          <nav className="header-logo">
            <a href="./index.jsx">
              <img src={headerLogo} alt="" />
            </a>
          </nav>

          <nav className="header-links ">
            <ul className="navbar-links flex gap-10">
              <li>
                <a className="font-roboto" href="#">
                  Home
                </a>
              </li>
              <li>
                <a className="font-roboto" href="#">
                  Product
                </a>
              </li>
              <li>
                <a className="font-roboto" href="#">
                  Pricing
                </a>
              </li>
              <li>
                <a className="font-roboto" href="#">
                  Testimonials
                </a>
              </li>
              <li>
                <a className="font-roboto" href="#">
                  Contact Us
                </a>
              </li>
            </ul>
          </nav>

          <nav className="header-btns">
            <button className="heared-btn className='font-roboto' w-[165px] h-[49px] rounded-[5px] font-hind-madurai text-base font-bold leading-[22.08px] bg-[#D23166] text-white">
              Buy Now
            </button>
          </nav>
        </div>
      </div>
    </section>
  );
}

export default Navbar