import React from 'react';
import Title from '../components/Title';
import { assets } from '../assets/assets';

const Contact = () => {
  return (
    <div>
      <div className='text-center text-2xl pt-10 border-t'>
        <Title text1={'CONTACT'} text2={'US'} />
      </div>

      <div className='my-10 flex flex-col justify-between md:flex-row gap-10 mb-28'>
        <img src={assets.contact_img} alt="" />
        <div className='flex flex-col justify-center items-start gap-6'>
          <p className='font-semibold text-xl text-gray-600'>OUR STORE</p>
          <p className='text-gray-500'>INDIA</p>
          <p>TEL : +91 79*******2 <br /> raghavc2002@gmail.com</p>
          <p className='font-semibold text-xl text-gray-600'>ENJOY SHOPPING</p>
          <div className='mt-6'>
            <p className='font-semibold text-xl text-gray-600'>CAREER AT FOREVER</p>
            <p className='text-sm text-gray-500'>Learn about our programs</p>
            <button className='mt-2 px-4 py-2 bg-black text-white rounded'>Explore Jobs</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;