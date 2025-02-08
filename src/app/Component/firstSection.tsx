// components/BestOfAirMaxSection.js
import React from 'react';
import Image from "next/image"
import whiteShoes from "../assets/whiteShoes.png"
import blackShoes from "../assets/blackShoes.png"
import rightArrowIcon from "../assets/rightArrowIcon.png"
import  leftArrowIcon from "../assets/leftArrowIcon.png"

const FirstSection = () => {
  return (
    <section className="bg-white py-12 sm:py-16 md:py-15">
      <div className="max-w-screen-xl mx-auto text-center px-4">
        {/* Heading with Shop and Arrows */}
        <div className="flex justify-between items-center mb-8 px-4">
          {/* Heading */}
          <h2 className="text-black text-[20px] sm:text-[22px] font-semibold">
            Best of Air Max
          </h2>

          {/* Shop with Arrows */}
          <div className="flex items-center space-x-2 cursor-pointer">
            <span className="text-black text-sm sm:text-base">Shop</span>


           {/* arrow */}

           <Image
              src={ leftArrowIcon} 
              alt="Nike Air Max Pulse"
              className="w-[50px] h-[50] object-cover rounded-[full]"
            />

             <Image
              src={ rightArrowIcon} 
              alt="Nike Air Max Pulse"
              className="w-[50px] h-[50] object-cover rounded-[full]"
            />

          </div>
        </div>

        {/* Cards */}

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Card 1 */}
          <div className="bg-white shadow-lg rounded-lg overflow-hidden">
            <Image
              src={whiteShoes}
              alt="Nike Air Max Pulse"
              className="w-[450px] h-[300px] object-cover "
            />
            <div className="p-4">
              <div className="flex justify-between items-center ">
                <h3 className="text-black text-lg font-semibold">Nike Air Max Pulse</h3>
                <span className="text-black text-lg font-semibold">₹ 13 995</span>
              </div>
             
            
            <div className="flex justify-start ">
            <p className="text-gray-600">Women Shoes</p>
            </div>
          </div>
          </div>
       

          {/* Card 2 */}
          <div className="bg-white shadow-lg rounded-lg overflow-hidden">
            <Image
              src={whiteShoes}
              alt="Nike Air Max Pulse"
              className="w-[450px] h-[300px] object-cover"
            />
            <div className="p-4">
              <div className="flex justify-between items-center mb-2">
                <h3 className="text-black text-lg font-semibold">Nike Air Max 97 SE</h3>
                <span className="text-black text-lg font-semibold">₹ 16 995</span>
              </div>
              <div className="flex justify-start">
            <p className="text-gray-600">Mens Shoes</p>
            </div>
            </div>
          </div>

          {/* Card 3 */}
          <div className="bg-white shadow-lg rounded-lg overflow-hidden">
            <Image
              src={blackShoes} 
              alt="Nike Air Max Pulse"
              className="w-[450px] h-[300px] object-cover"
            />
            <div className="p-4">
              <div className="flex justify-between items-center mb-2">
                <h3 className="text-black text-lg font-semibold">Nike Air Max Pulse</h3>
                <span className="text-black text-lg font-semibold">$170</span>
              </div>
              <div className="flex justify-start">
            <p className="text-gray-600">Women Shoes</p>
            </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FirstSection;
