import React from 'react';
import Title from '../components/Title';
import { assets } from '../assets/assets';
import Newsletter from '../components/Newsletter';

const About = () => {
  return (
    <div>
      <div className='text-2xl text-center pt-8 border-t'>
        <Title text1={'ABOUT'} text2={'US'} />
      </div>

      <div className='my-10 flex flex-col md:flex-row gap-16'>
        <img className='w-full md:max-w-[450px]' src={assets.about_img} alt="" />
        <div className='flex flex-col justify-center gap-6 md:w-2/4 text-gray-600'>
          <p>
            We are a team of passionate individuals who are dedicated to creating innovative and effective solutions for our customer.
          </p>
          <b className='text-gray-800'>
            Our mission is to provide the best possible service to our customers, while also making a positive impact.
          </b>
        </div>
      </div>

      <div className='text-4xl py-4'>
        <Title text1={'OUR'} text2={'VALUES'} />
      </div>
      <div className='flex flex-col md:flex-row text-sm mb-20'>
        <div className='border px-10 md:px-16 sm:py-20 flex flex-col gap-5'>
          <b>Quality is our top priority.</b>
        </div>
        <div className='border px-10 md:px-16 sm:py-20 flex flex-col gap-5'>
          <b>Convenience is our goal.</b>
        </div>
        <div className='border px-10 md:px-16 sm:py-20 flex flex-col gap-5'>
          <b>Top-notch customer service.</b>
        </div>
      </div>
      <Newsletter/>
    </div>
  );
}

export default About;