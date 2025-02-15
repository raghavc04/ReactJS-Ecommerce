import React from 'react';
import { assets } from '../assets/assets';

const OurPolicy = () => {
  return (
    <div className='flex flex-col sm:flex-row justify-around gap-12 sm:gap-2 text-center py-20 text-xs sm:text-sm md:text-base text-gray-700'>
      
      
      <div>
        <img src={assets.exchange_icon} alt="" className='w-12 m-auto mb-5'/>
        <p className='font-semibold'>
            Exchange rates are subject to change and may not be up-to-date.
        </p>
      </div>

      <div>
        <img src={assets.quality_icon} alt="" className='w-12 m-auto mb-5'/>
        <p className='font-semibold'>
            7 Days return policy. If you are not satisfied with the product, you can return it within 7 days
        </p>
      </div>

      <div>
        <img src={assets.support_img} alt="" className='w-12 m-auto mb-5'/>
        <p className='font-semibold'>
           Best customer support. We are here to help you with any questions or concerns you may have.
        </p>
      </div>

    </div>
  );
}

export default OurPolicy;
