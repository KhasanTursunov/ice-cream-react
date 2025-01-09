import React from 'react'
import carr from '../../../assets/icons/car.svg'
import cofeee from '../../../assets/icons/cofee.svg'
import cashh from '../../../assets/icons/cash-back.svg'
import fastt from '../../../assets/icons/fast-delivery 1.svg'

export const Delivery = () => {
  return (
    <div>
      <section className="delivery-section">
        <div className="container mx-auto px-4container max-w-lg md:max-w-2xl lg:max-w-7xl">
          <div className="delivery-wrapper">
            <div className="delivery-div1 flex flex-col p-5">
              <img className='w-24' src={carr} alt="" />
              <h3 className="font-hindi text-2xl font-semibold leading-[27.6px] text-black">
                Free Shipping
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
