import React from 'react'


// components/Navbar.js


const Navbar = () => {


  return (
    <>
    <nav className="max-w-screen-2xl md:py-[6px] py-2 flex gap-[60px] md:gap-[500px] items-center bg-black">
    

        {/* Left: Logo */}
        <div>
         <h1 className="text-[18px] text-white font-[600]">QAFIX</h1>
        </div>
       
       <div >
        <h1 className="md:text-[18px] text-[14px] text-white">Summer Sale 2025 50% off</h1>
       </div>


        </nav>
    </>
 
  );
}

export default Navbar;

