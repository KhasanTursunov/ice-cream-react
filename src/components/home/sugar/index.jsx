import React from 'react'
import Sugarr from '../../../assets/imges/sugar.png'

const Sugar = () => {
  return (
    <div>
      <section className="sugar-section bg-[#F8EDF0]">
        <div className="container mx-auto px-4container max-w-lg md:max-w-2xl lg:max-w-7xl">
          <div className="sugar-wrapper grid grid-cols-2 items-center">
            <div className="sugar-left flex flex-col gap-8">
              <h2 className="font-hind-madurai text-[44.2px] font-semibold leading-[48.84px] text-left text-[#150101]">
                Brown Sugar Oatmea
              </h2>
              <h3 className="font-roboto text-base font-normal leading-6 text-left opacity-60 text-[#150101]">
                Together with McDonald’s, Burger King has grown to become
                synonymous with burgers in the US.Together with McDonald’s,
                Burger King has grown to become synonymous.
              </h3>
              <button className="w-[165px] h-[49.13px] rounded-[5px] font-roboto text-[16px] font-medium leading-[18.75px] text-[#FAFAFA] bg-[#D64374] hover:bg-white hover:text-[#D23166] hover:border-2 border-[#D23166] transition-all duration-500 ease-in-out">
                See Details
              </button>
            </div>
            <div className="sugar-right">
              <img src={Sugarr} alt="" />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Sugar