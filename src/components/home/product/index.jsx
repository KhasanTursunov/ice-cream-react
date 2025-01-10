import React from 'react'
import P1 from '../../../assets/imges/p1.png'
import P2 from '../../../assets/imges/p2.png'
import P3 from '../../../assets/imges/p3.png'
import P4 from '../../../assets/imges/p4.png'
import Adele from '../../../assets/icons/adale.svg'
import ModelBoy from '../../../assets/icons/yorqinxojaumarov.svg' 

const Product = () => {
  return (
    <section className="product-section dark p-12">
      <div className="container mx-auto px-4container max-w-lg md:max-w-2xl lg:max-w-7xl">
        <div className="product-wrapper">
          <div className="product-title">
            <h2 className="font-roboto text-[44.2px] font-semibold leading-[61px] text-center text-[#150101]">
              Our Product
            </h2>
          </div>

          <div className="product-links mt-12">
            <ul className="flex justify-between items-center">
              <li>
                <a
                  className="font-roboto opacity-60 text-[18px] font-medium leading-[21.09px] text-left text-black  hover:text-red-500 transition-colors duration-500 ease-in-out"
                  href="#"
                >
                  ICE CREAM
                </a>
              </li>
              <li>
                <a
                  className="font-roboto opacity-60 text-[18px] font-medium leading-[21.09px] text-left text-black  hover:text-red-500 transition-colors duration-500 ease-in-out"
                  href="#"
                >
                  CAYENNE CHOCOLATE
                </a>
              </li>
              <li>
                <a
                  className="font-roboto opacity-60 text-[18px] font-medium leading-[21.09px] text-left text-black  hover:text-red-500 transition-colors duration-500 ease-in-out"
                  href="#"
                >
                  CAKE BATTER
                </a>
              </li>
              <li>
                <a
                  className="font-roboto opacity-60 text-[18px] font-medium leading-[21.09px] text-left text-black  hover:text-red-500 transition-colors duration-500 ease-in-out"
                  href="#"
                >
                  CANDY CANE
                </a>
              </li>
              <li>
                <a
                  className="font-roboto opacity-60 text-[18px] font-medium leading-[21.09px] text-left text-black  hover:text-red-500 transition-colors duration-500 ease-in-out"
                  href="#"
                >
                  PLATTERS
                </a>
              </li>
              <li>
                <a
                  className="font-roboto opacity-60 text-[18px] font-medium leading-[21.09px] text-left text-black  hover:text-red-500 transition-colors duration-500 ease-in-out"
                  href="#"
                >
                  DESSERT
                </a>
              </li>
            </ul>
          </div>

          <div className="ice-cream-div grid grid-cols-2 items-center gap-6 mt-10">
            <div className="ice-cream-left">
              <img src={P1} alt="" />
            </div>
            <div className="ice-cream-right flex flex-col gap-4">
              <h2 className="font-roboto text-[26px] font-bold leading-[35.88px] text-left text-black">
                Brown bread
              </h2>
              <h3 className="font-roboto text-base font-normal leading-6 text-left text-black opacity-70">
                Bon Au Pain is a pioneer in the healthy fast food scene.Bon Au
                Pain is a pioneer in the healthy fast food scene.Bon Au Pain is
                a pioneer in the healthy fast food scene.
              </h3>
              <div className="inside_div flex items-center gap-3">
                <h3 className="font-roboto text-[26px] font-medium leading-[35.88px] text-left text-black">
                  $19.55
                </h3>
                <h4 className="font-roboto text-[20px] font-medium leading-[27.6px] text-left text-black line-through opacity-70">
                  $22.55
                </h4>
              </div>
              <button className="w-[165px] h-[49.13px] rounded-[5px] font-roboto text-[16px] font-medium leading-[18.75px] text-[#FAFAFA] bg-[#D64374] hover:bg-white hover:text-[#D23166] hover:border-2 border-[#D23166] transition-all duration-500 ease-in-out">
                Buy Now
              </button>
            </div>
          </div>

          <div className="chocolate-div grid grid-cols-2 items-center gap-6 mt-10">
            <div className="ice-cream-right flex flex-col gap-4 text-end items-end">
              <h2 className="font-roboto text-[26px] font-bold leading-[35.88px] text-right text-black">
                Cayenne chocolate
              </h2>
              <h3 className="font-roboto text-base font-normal leading-6 text-right text-black opacity-70">
                Bon Au Pain is a pioneer in the healthy fast food scene.Bon Au
                Pain is a pioneer in the healthy fast food scene.Bon Au Pain is
                a pioneer in the healthy fast food scene.
              </h3>
              <div className="inside_div flex items-center gap-3">
                <h3 className="font-roboto text-[26px] font-medium leading-[35.88px] text-right text-black">
                  $19.55
                </h3>
                <h4 className="font-roboto text-[20px] font-medium leading-[27.6px] text-right text-black line-through opacity-70">
                  $22.55
                </h4>
              </div>
              <button className="w-[165px] h-[49.13px] rounded-[5px] font-roboto text-[16px] font-medium leading-[18.75px] text-[#FAFAFA] bg-[#D64374] hover:bg-white hover:text-[#D23166] hover:border-2 border-[#D23166] transition-all duration-500 ease-in-out">
                Buy Now
              </button>
            </div>

            <div className="ice-cream-left">
              <img src={P2} alt="" />
            </div>
          </div>

          <div className="sweet-div grid grid-cols-2 items-center gap-6 mt-10">
            <div className="ice-cream-left">
              <img src={P3} alt="" />
            </div>
            <div className="ice-cream-right flex flex-col gap-4">
              <h2 className="font-roboto text-[26px] font-bold leading-[35.88px] text-left text-black">
                Sweet corn
              </h2>
              <h3 className="font-roboto text-base font-normal leading-6 text-left text-black opacity-70">
                Bon Au Pain is a pioneer in the healthy fast food scene.Bon Au
                Pain is a pioneer in the healthy fast food scene.Bon Au Pain is
                a pioneer in the healthy fast food scene.
              </h3>
              <div className="inside_div flex items-center gap-3">
                <h3 className="font-roboto text-[26px] font-medium leading-[35.88px] text-left text-black">
                  $19.55
                </h3>
                <h4 className="font-roboto text-[20px] font-medium leading-[27.6px] text-left text-black line-through opacity-70">
                  $22.55
                </h4>
              </div>
              <button className="w-[165px] h-[49.13px] rounded-[5px] font-roboto text-[16px] font-medium leading-[18.75px] text-[#FAFAFA] bg-[#D64374] hover:bg-white hover:text-[#D23166] hover:border-2 border-[#D23166] transition-all duration-500 ease-in-out">
                Buy Now
              </button>
            </div>
          </div>

          <div className="adale-div grid grid-cols-2 items-center gap-28 mt-10">
            <div className="ice-cream-right flex flex-col gap-8 text-end items-end">
              <div className="first-div flex items-center gap-8 ">
                <div className="first-inside-first">
                  <img src={Adele} alt="" />
                </div>

                <div className="first-inside-second flex flex-col gap-2 ">
                  <h3 className="font-roboto text-[24px] font-medium leading-[28.13px] text-left text-black">
                    Adele A. McNeill
                  </h3>
                  <h4 className="font-roboto text-[16px] opacity-70 font-medium leading-[14.06px] text-left text-black">
                    AMIRICAN
                  </h4>
                </div>
              </div>

              <div className="second-div">
                <h3 className="font-roboto text-base font-normal leading-6 text-right opacity-70 text-black">
                  Thanks a lot for the prompt service. Really appreciate.
                  Excellence taste in Every Bite.Add a joy of best Taste. Foodie
                  Moments.
                </h3>
              </div>
              <div className="third-div flex gap-8">
                <img src={ModelBoy} alt="" />
                <img src={Adele} alt="" />
                <img src={ModelBoy} alt="" />
              </div>
            </div>

            <div className="ice-cream-left">
              <img src={P4} alt="" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Product