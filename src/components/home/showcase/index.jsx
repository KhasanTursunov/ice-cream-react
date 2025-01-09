import React from 'react'
import showcaseImg from '../../../assets/imges/showcase.png'
const Showcase = () => {
  return (
    <div>
      <section className="showcase-section bg-[#F2CEDA]">
        <div className="container  mx-auto px-4container max-w-lg md:max-w-2xl lg:max-w-7xl">
          <div className="showcase_wrapper flex items-center justify-center">
            <div className="showcase_left  flex flex-col gap-[50px]">
              <h3 className="font-roboto text-sm font-medium leading-4 text-left text-[#0F0101]">
                Sweet fun, full of milk.
              </h3>
              <h1 className="font-fredoka text-[57.33px] font-bold leading-[69.08px] text-left opacity-[0.9] text-[#0F0101]">
                Feel inside cold with our delicious{" "}
                <span className="text-[#D23166] font-fredoka font-bold text-[57.33px] leading-[69.08px] text-left">
                  ice-cream.
                </span>
              </h1>
              <p className="font-hind-madurai text-[18px] font-normal leading-[27px] text-left underline decoration-transparent text-[#0F0101] opacity-60">
                Some food has looked so awful that it's looked like something
                that the dog's brought home, yet after one mouthful I've been
                left eating my thoughts, my words.
              </p>
              <button className="heared-btn className='font-roboto' w-[165px] h-[49px] rounded-[5px] font-hind-madurai text-base font-bold leading-[22.08px] bg-[#D23166] text-white">
                Buy Now
              </button>
            </div>

            <div className="showcase_right w-[60%]">
              <img src={showcaseImg} alt="" />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Showcase