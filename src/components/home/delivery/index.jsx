import React from 'react'
import carr from '../../../assets/icons/car.svg'
import cofeee from '../../../assets/icons/cofee.svg'
import cashh from '../../../assets/icons/cash-back.svg'
import fastt from '../../../assets/icons/fast-delivery 1.svg'

export const Delivery = () => {
  return (
    <div>
      <section className="delivery-section flex p-10">
        <div className="container mx-auto px-4container max-w-lg md:max-w-2xl lg:max-w-7xl">
          <div className="delivery-wrapper flex content-between items-center ">
            <div className="delivery-div1 flex flex-col p-5 items-center text-center gap-2">
              <img className="w-24" src={carr} alt="" />
              <h3 className="font-hindi text-2xl font-semibold leading-[27.6px] text-black">
                Free Shipping
              </h3>
              <h4>Last Chance! Free shipping on all orders ends today.</h4>
            </div>

            <div className="delivery-div1 flex flex-col p-5 items-center text-center gap-2">
              <img className="w-20" src={cofeee} alt="" />
              <h3 className="font-hindi text-2xl font-semibold leading-[27.6px] text-black">
                Quick Packaging
              </h3>
              <h4>Last Chance! Free shipping on all orders ends today.</h4>
            </div>

            <div className="delivery-div1 flex flex-col p-5 items-center text-center gap-2">
              <img className="w-24" src={cashh} alt="" />
              <h3 className="font-hindi text-2xl font-semibold leading-[27.6px] text-black">
                100% Money Back
              </h3>
              <h4>Last Chance! Free shipping on all orders ends today.</h4>
            </div>

            <div className="delivery-div1 flex flex-col p-5 items-center text-center gap-2">
              <img className="w-24" src={fastt} alt="" />
              <h3 className="font-hindi text-2xl font-semibold leading-[27.6px] text-black">
                Fast Delivery
              </h3>
              <h4>Last Chance! Free shipping on all orders ends today.</h4>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Delivery
