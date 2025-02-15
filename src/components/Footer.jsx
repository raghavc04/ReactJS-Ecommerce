import React from 'react';
import { assets } from '../assets/assets';

const Footer = () => {
  return (
    <div>
      <div className='flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm'>
        <div>
          <img src={assets.logo} alt="" className='mb-5 w-32'/>
          <p className='w-full md:w-2/3 text-gray-600'>
            🔥 **Trending Now: Exclusive Deals & Latest Arrivals!** 🛍️✨ Hurry, Shop Before It's Gone! 🚀 #ShopSmart #StayTrendy 
          </p>
        </div>
        <div className='col-start-3'>
          <p className='text-xl font-medium mb-5'>COMPANY</p>
          <ul className='flex flex-col gap-1 text-gray-600'>
            <li>HOME</li>
            <li>ABOUT</li>
            <li>Delivery</li>
            <li>Privacy Policy</li>
          </ul>
        </div>
        <div>
          <p className='text-xl font-medium mb-5'>GET IN TOUCH</p>
          <ul className='flex flex-col gap-1 text-gray-600'> 
            <li>+9179*******2 </li>
            <li>raghavc2002@gmail.com</li>
          </ul>
        </div>
      </div>
      <div>
        <hr/>
        <p className='py-5 text-sm text-center'>
          ALL RIGHTS RESERVED. 2025 | Designed by 
          <a href="https://github.com/raghavc04" target="_blank" rel="noopener noreferrer" className='inline-flex items-center ml-1'>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className='mr-1'>
              <path fill-rule="evenodd" clip-rule="evenodd" d="M12 0C5.373 0 0 5.373 0 12C0 17.303 3.438 21.8 8.207 23.385C8.805 23.495 9.025 23.134 9.025 22.82C9.025 22.533 9.015 21.795 9.01 20.82C5.672 21.545 4.968 19.455 4.968 19.455C4.422 18.145 3.633 17.82 3.633 17.82C2.545 17.145 3.722 17.16 3.722 17.16C4.938 17.24 5.555 18.405 5.555 18.405C6.633 20.145 8.422 19.68 9.207 19.38C9.322 18.595 9.633 18.08 9.988 17.82C7.29 17.545 4.438 16.455 4.438 11.82C4.438 10.455 4.938 9.345 5.722 8.455C5.607 8.18 5.207 6.92 5.822 5.18C5.822 5.18 6.938 4.88 9.025 6.455C9.988 6.18 11.025 6.08 12.062 6.08C13.098 6.08 14.135 6.18 15.098 6.455C17.185 4.88 18.302 5.18 18.302 5.18C18.917 6.92 18.517 8.18 18.402 8.455C19.188 9.345 19.688 10.455 19.688 11.82C19.688 16.465 16.822 17.535 14.115 17.805C14.555 18.145 14.988 18.82 14.988 19.82C14.988 21.295 14.978 22.495 14.978 22.82C14.978 23.134 15.198 23.505 15.802 23.385C20.572 21.8 24 17.303 24 12C24 5.373 18.627 0 12 0Z" fill="#181717"/>
            </svg>
            raghavc04
          </a>
        </p>
      </div>
    </div>
  );
}

export default Footer;