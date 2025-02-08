import React from 'react';
import Link from "next/link";
import Image from "next/image";
import twitterLogo from "../assets/twitterLogo.png";
import facebookLogo from "../assets/facebookLogo.png";
import youtubeLogo from "../assets/youtubeLogo.png";
import instagramLogo from "../assets/instagramLogo.png";
import locationLogo from "../assets/locationLogo.png";

const Footer = () => {
  return (
    <footer className="bg-black text-white py-[60px] lg:py-[80px] mt-8">
      <div className="max-w-screen-xl mx-auto flex flex-col lg:flex-row justify-between gap-12">
        
        {/* Left Side */}
        <div className="lg:flex lg:justify-start lg:gap-[60px] md:flex md:gap-[40px] px-4">
          
          {/* Find a Store */}
          <div>
            <h3 className="text-[18px] font-[500] text-[#FFFFFF] pt-[20px]">Find a Store</h3>
            <ul className="space-y-2 text-[#FFFFFF] text-[14px] font-[500]">
              <li>Become A Member</li>
              <li>Sign Up for Email</li>
              <li>Send Us Feedback</li>
              <li>Student Discounts</li>
            </ul>
          </div>

          {/* Get Help */}
          <div>
            <h3 className="text-[18px] font-[500] text-[#FFFFFF] pt-[20px]">Get Help</h3>
            <ul className="space-y-2 text-[#7E7E7E] text-[14px] font-[500]">
              <li>Order Status</li>
              <li>Delivery</li>
              <li>Returns</li>
              <li>Payment Options</li>
              <li>Contact Us On Nike.com Inquiries</li>
              <li>Contact Us On All Other Inquiries</li>
            </ul>
          </div>

          {/* About QAFIX */}
          <div>
            <h3 className="text-[18px] font-[500] text-[#FFFFFF] pt-[20px]">About QAFIX</h3>
            <ul className="space-y-2 text-[#7E7E7E] text-[14px] font-[500]">
              <li>News</li>
              <li>Careers</li>
              <li>Investors</li>
              <li>Sustainability</li>
            </ul>
          </div>
        </div>

        {/* Right Side */}
        <div className="flex flex-col items-start lg:items-end space-y-6">
          
          {/* Social Icons */}
          <div className="flex space-x-4 text-white justify-center lg:justify-end">
            <Link href=""><Image className="h-8" src={twitterLogo} alt="Twitter" /></Link>
            <Link href=""><Image className="h-8" src={facebookLogo} alt="Facebook" /></Link>
            <Link href=""><Image className="h-8" src={youtubeLogo} alt="YouTube" /></Link>
            <Link href=""><Image className="h-8" src={instagramLogo} alt="Instagram" /></Link>
          </div>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="flex flex-col md:flex-row justify-between items-center pt-[40px] px-4">
        <div className="flex items-center space-x-2">
          <Image className="h-5" src={locationLogo} alt="Location" />
          <p className="text-[#FFFFFF] text-[14px] font-[600]">Pakistan</p>
          <p className="text-[#7E7E7E] text-[14px] font-[400]">© 2024 Nike, Inc. All Rights Reserved</p>
        </div>

        {/* Footer Links */}
        <div className="flex flex-col md:flex-row md:space-x-4 space-y-2 md:space-y-0 text-[#7E7E7E] text-[14px] font-[500]">
          <Link href="#" className="hover:text-white">Guide</Link>
          <Link href="#" className="hover:text-white">Terms of Sale</Link>
          <Link href="#" className="hover:text-white">Terms of Use</Link>
          <Link href="#" className="hover:text-white">Nike Privacy Policy</Link>
        </div>
      </div>
    </footer>
  );
}

export default Footer;


