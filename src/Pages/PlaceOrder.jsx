import React, { useState } from 'react';
import Title from '../components/Title';
import CartTotal from '../components/CartTotal';
import { assets } from '../assets/assets';
import { useNavigate } from 'react-router-dom';

const PlaceOrder = () => {
    const [method, setMethod] = useState('cod')
    const navigate = useNavigate()
  return (
    <div className='flex flex-col sm:flex-row justify-between gap-4 pt-5 sm:pt-14 min-h-[80vh] border-t'>
      {/* left side */}
      <div className='flex flex-col gap-4 w-full sm:max-w-[480px]'>
        <div className='text-xl sm:text-2xl my-3'>
          <Title text1={'DELIVERY'} text2={'DETAILS'} />
        </div>
        <div className="flex gap-3">
          <input className='border-gray-300 rounded py-1.5 px-3.5 w-full' type="text" placeholder='FIRST NAME AND LAST NAME' />
        </div>
        <input className='border-gray-300 rounded py-1.5 px-3.5 w-full mt-4' type="email" placeholder='Your Email' />
        <input className='border-gray-300 rounded py-1.5 px-3.5 w-full mt-4' type="text" placeholder='YOUR ADDRESS' />
        <div className='flex gap-3'>
        <input className='border-gray-300 rounded py-1.5 px-3.5 w-full mt-4' type="text" placeholder='YOUR CITY' />
        <input className='border-gray-300 rounded py-1.5 px-3.5 w-full mt-4' type="text" placeholder='YOUR STATE' />
        </div>
        <div className='flex gap-3'>
        <input className='border-gray-300 rounded py-1.5 px-3.5 w-full mt-4' type="text" placeholder='ZIP CODE' />
        <input className='border-gray-300 rounded py-1.5 px-3.5 w-full mt-4' type="text" placeholder='COUNTRY' />
        </div>
        <input className='border-gray-300 rounded py-1.5 px-3.5 w-full mt-4' type="number" placeholder='YOUR CONTACT NUMBER' />
      </div>
      {/* right side */}
      <div className='mt-8'>
      <div className='mt-8 min-w-[80]'>
        <CartTotal/>
      </div>
      <div className='mt-12'>
     <Title text1={'PAYMENT'} text2={'METHOD'}/>
     {/* payemnet method */}
     <div className='flex gap-3 flex-col lg:flex-row'>
       <div onClick={()=>setMethod('stripe')} className='flex items-center gap-3 border p-2 px-3 cursor-pointer'>
       <p className={`min-w-3.5 h-3.5 border rounded-full ${method === 'stripe' ? 'bg-green-400' : ''}`}></p>
       <img src={assets.stripe_logo} alt="" />
       </div>
       <div onClick={()=>setMethod('razorpay')} className='flex items-center gap-3 border p-2 px-3 cursor-pointer'>
       <p className={`min-w-3.5 h-3.5 border rounded-full ${method === '' ? 'bg-green-400' : 'razorpay'}`}></p>
       <img src={assets.razorpay_logo} alt="" />
       </div>
       <div onClick={()=>setMethod('cod')} className='flex items-center gap-3 border p-2 px-3 cursor-pointer'>
       <p className={`min-w-3.5 h-3.5 border rounded-full ${method === 'cod' ? 'bg-green-400' : ''}`}></p>
       <p className='text-gray-500 text-sm font-medium mx-4'>CASH ON DELIVERY</p>
       </div>
     </div>
     <div className='w-full text-end mt-8'>
   <button onClick={()=>navigate('/orders')} className='bg-black text-white px-16 py-3 '>PLACE ORDER</button>
     </div>
      </div>
      </div>
    </div>
  );
}

export default PlaceOrder;