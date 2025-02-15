import React, { useContext } from 'react';
import { ShopContext } from '../context/ShopContext';
import Title from './Title';

const CartTotal = () => {
    const { currency, delivery_fee, getCartAmount } = useContext(ShopContext); // ✅ Correct destructuring

    return (
        <div className='w-full'>
            <div className='text-2xl'>
                <Title text1={'CART'} text2={'TOTALS'} />
            </div>
            <div className='flex flex-col gap-2 mt-2 text-sm'>
                <div className='flex justify-between'>
                    <p>SUBTOTAL</p>
                    <p>{currency}{getCartAmount()}.00</p>
                </div>
                <hr />
                <div className='flex justify-between'>
                    <p>SHIPPING CHARGES</p>
                    <p>{currency}{delivery_fee}</p>
                </div>
                <hr />
                <div className='flex justify-between'>
                    <b>TOTAL</b>
                    <b>{currency}{getCartAmount() === 0 ? 0 : getCartAmount() + delivery_fee}</b>
                </div>
            </div>
        </div>
    );
}

export default CartTotal;
