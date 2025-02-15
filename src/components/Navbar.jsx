import React, { useContext, useState } from "react";
import { assets } from "../assets/assets";
import { Link,  NavLink } from "react-router-dom";
import { ShopContext } from "../context/ShopContext";

const Navbar = () => {

    const [visible, setVisible] = useState(false);
    const {setShowSearch, getCartCount} = useContext(ShopContext);


  return (
    <div className="flex items-center justify-between py-5 font-medium">
      {/* Logo */}
      <Link to='/'><img src={assets.logo} alt="Logo" className="w-36" /></Link>

      {/* Navigation Links */}
      <ul className="hidden sm:flex gap-5 text-sm text-gray-700">
        <NavLink to="/" className="flex flex-col items-center gap-1">
          <p>HOME</p>
          <hr className="w-2/4 border-none h-[1.5px] bg-gray-700 hidden" />
        </NavLink>

        <NavLink to="/collection" className="flex flex-col items-center gap-1">
          <p>COLLECTION</p>
          <hr className="w-2/4 border-none h-[1.5px] bg-gray-700 hidden" />
        </NavLink>

        <NavLink to="/about" className="flex flex-col items-center gap-1">
          <p>ABOUT</p>
          <hr className="w-2/4 border-none h-[1.5px] bg-gray-700 hidden" />
        </NavLink>

        <NavLink to="/contact" className="flex flex-col items-center gap-1">
          <p>CONTACT</p>
          <hr className="w-2/4 border-none h-[1.5px] bg-gray-700 hidden" />
        </NavLink>
      </ul>

      {/* Search & Profile */}
      <div className="flex items-center gap-6">
        <img onClick={()=>setShowSearch(true)} src={assets.search_icon} alt="" className="w-5 cursor-pointer" />

        {/* Profile Dropdown */}
        <div className="relative group">
          <Link to='/login'><img
            src={assets.profile_icon}
            alt=""
            className="w-5 cursor-pointer"
          /></Link>

          {/* Dropdown Menu */}
          <div className="group-hover:block hidden absolute right-0 pt-4 z-10">
            <div className="flex flex-col gap-2 w-36 py-3 px-5 bg-slate-100 text-gray-500 rounded shadow-lg">
              <p className="cursor-pointer hover:text-black">My Profile</p>
              <p className="cursor-pointer hover:text-black">Orders</p>
              <p className="cursor-pointer hover:text-black">Logout</p>
            </div>
          </div>
        </div>
        <Link to='/cart' className="relative">
        <img src={assets.cart_icon} alt="" className="min-w-5 w-5 cursor-pointer" />
        <p className="absolute bottom-[-5px] right-[-5px] w-4 text-center leading-4 bg-black text-white aspect-square rounded-full text-[8px] "> {getCartCount()}</p>
        </Link>
        <img onClick={()=>setVisible(true)} src={assets.menu_icon} alt="" className="cursor-pointer w-5 sm:hidden"/>
      </div>
      {/* sidebar menu for small screen */}
      <div className={`absolute top-0 right-0 bottom-0 overflow-hidden bg-white transition-all ${visible ? 'w-full' : 'w-0'}`}>
         <div className="flex flex-col text-gray-600">
          <div onClick={()=>setVisible(false)} className="flex items-center gap-4 p-3 cursor-pointer">
           <img src={assets.dropdown_icon} alt="" className="h-4 rotate-180"/>
           <p>
            Back
           </p>
          </div>
          <NavLink onClick={()=>setVisible(false)} className='py-2 pl-6 border' to='/'>HOME</NavLink>
          <NavLink onClick={()=>setVisible(false)} className='py-2 pl-6 border' to='/collection'>COLLECTION</NavLink>
          <NavLink onClick={()=>setVisible(false)} className='py-2 pl-6 border' to='/about'>ABOUT</NavLink>
          <NavLink onClick={()=>setVisible(false)} className='py-2 pl-6 border' to='/contact'>CONTACT</NavLink>


         </div>
        
      </div>
    </div>
  );
};

export default Navbar;
