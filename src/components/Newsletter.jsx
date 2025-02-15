import React from 'react';

const Newsletter = () => {
    const onSubmitHandler = (event) =>{
    event.preventDefault();
    }
  return (
    <div className='text-center'>
      <p className='text-2xl font-medium text-gray-800'>
        Subscribe now and get exclusive access to our latest news, updates, and special offers!
      </p>
      <form onSubmit={onSubmitHandler} className='w-full sm:w-1/2 flex items-center gap-3 mx-auto mt-3 px-4 py-5 rounded-2xl' >
        <input type="email" placeholder='Enter your email address' className='w-full sm:flex-1 outline-none' required/>
          <button type='submit' className='bg-black text-white text-xs px-10 py-4 rounded-2xl'>
           SUBSCRIBE
          </button>
      </form>
    </div>
  );
}

export default Newsletter;
