import React, { useContext } from 'react';
import { ShopContext } from '../context/ShopContext';
import Title from '../components/Title';

const Orders = () => {
    const { currency, products } = useContext(ShopContext);

    return (
        <div className='border-t pt-16'>
            <div className='text-2xl'>
                <Title text1="My" text2="Orders" />
            </div>

            <div className='flex flex-col gap-6'>
                {products.slice(1, 4).map((item, index) => (
                    <div 
                        key={index} 
                        className='py-4 border-t text-gray-700 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4'
                    >
                        {/* Product Image & Details */}
                        <div className='flex items-start gap-6 text-sm sm:w-2/3'>
                            <img className='w-16 sm:w-20' src={item.image[0]} alt={item.name} />
                            <div>
                                <p className='sm:text-base'>{item.name}</p>
                                <div className='flex items-center gap-3 mt-2 text-base text-gray-700'>
                                    <p className='text-lg'>{currency}{item.price}</p>
                                    <p>Quantity: 1</p>
                                    <p>Size: M</p>
                                </div>
                                <p className='mt-2 text-sm'>Date: <span className='text-gray-600'>14TH FEB</span></p>
                            </div>
                        </div>

                        {/* Ready to Ship & Track Order Button - Aligned Right */}
                        <div className='flex flex-col items-end sm:w-1/3'>
                            <div className='flex items-center gap-2'>
                                <p className='min-w-2 h-2 rounded-full bg-green-500'></p>
                                <p className='text-sm md:text-base text-green-600'>READY TO SHIP</p>
                            </div>
                            <button className='border px-4 text-sm font-medium mt-2 sm:mt-0'>
                                TRACK ORDER
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Orders;
