"use client";
import { FaUser, FaShoppingCart } from 'react-icons/fa';
import React, { useState } from "react";
import Link from "next/link";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false); // State to control mobile menu toggle
  const [isCategoriesOpen, setIsCategoriesOpen] = useState(false); // State for dropdown menu (Categories)

  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen); // Toggle the mobile menu open/close
  };

  const handleCategoriesHover = () => {
    setIsCategoriesOpen(true); // Show categories dropdown on hover
  };

  const handleCategoriesLeave = () => {
    setIsCategoriesOpen(false); // Hide categories dropdown when hover leaves
  };

  return (
    <nav className="bg-white p-4 shadow-md sticky top-0 z-50">
      <div className="max-w-screen-xl mx-auto flex items-center justify-between flex-wrap">
      
           {/* Categories Dropdown */}
           <div 
            className="relative"
            onMouseEnter={handleCategoriesHover}
            onMouseLeave={handleCategoriesLeave}
          >
            <button className="text-[#737373] hover:text-blue-500 py-2">
              Categories
            </button>

            {/* Categories dropdown menu */}
            {isCategoriesOpen && (
              <div className="absolute top-full left-0 bg-white shadow-lg mt-2 w-48">
                <ul className="text-black">
                  <li><Link href="/shop/male" className="block px-4 py-2">Male</Link></li>
                  <li><Link href="/shop/female" className="block px-4 py-2">Female</Link></li>
                  <li><Link href="/shop/kids" className="block px-4 py-2">Kids</Link></li>
                  <li><Link href="/shop/shirts" className="block px-4 py-2">Shirts</Link></li>
                  <li><Link href="/shop/male" className="block px-4 py-2">Pants</Link></li>
                  <li><Link href="/shop" className="block px-4 py-2">Flight Esssentials</Link></li>
                  
                </ul>
              </div>
            )}
          </div>
  

        {/* Center: Links (Desktop) */}
        <div className="hidden md:flex lg:flex space-x-5 lg:pl-[100px] md:pl-[100px]">
          <Link href="/" className="text-[#737373] hover:text-blue-500 py-2">Home</Link>
          <Link href="/shop" className="text-[#737373] hover:text-blue-500 py-2">Shop</Link>
          <Link href="/Help" className="text-[#737373] hover:text-blue-500 py-2">Help</Link>
        
        </div>

     
         {/* Navigation Links */}
         <div className="flex items-center gap-1 ">
          {/* User Account Icon */}
          <Link href="/Joinus">
            <div className="md:flex items-center gap-2 cursor-pointer hidden">
              <FaUser className="text-2xl" />
              <span className="text-sm">Account</span>
            </div>
          </Link>

          {/* Cart Icon with Item Count */}
          <Link href="/cart">
            <div className="relative cursor-pointer">
              <FaShoppingCart className="text-2xl" />
             
            </div>
          </Link>
        </div>

        {/* Mobile Menu Toggle */}
        <div className="md:hidden block lg:hidden">
          <button onClick={handleMenuToggle} className="text-black focus:outline-none">
            {/* Hamburger icon */}
            <svg className="w-6 h-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-full right-11 bg-white shadow-lg mt-2 w-[250px] text-center">
          <ul className="text-black flex flex-col gap-4 font-[500] text-[18px]">
            <Link href="/" className="text-[#737373] hover:text-blue-500 py-2" onClick={() => setIsMenuOpen(false)}>Home</Link>
            <Link href="/ProductPage" className="text-[#737373] hover:text-blue-500 py-2" onClick={() => setIsMenuOpen(false)}>Shop</Link>
            <Link href="/Help" className="text-[#737373] hover:text-blue-500 py-2" onClick={() => setIsMenuOpen(false)}>Help</Link>
            <Link href="/Joinus" className="text-[#737373] hover:text-blue-500 py-2" onClick={() => setIsMenuOpen(false)}>Account</Link>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
