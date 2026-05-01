import React from "react";
import facebook from "@/assets/facebook.png"
import instagram from "@/assets/instagram.png";
import twitter from "@/assets/twitter.png";
import Image from "next/image";

const Footer = () => {
  return (
    <footer className="bg-[#1B3D2F] text-gray-300 py-2 px-6 mt-5">
      <div className="max-w-6xl mx-auto flex flex-col items-center text-center">
        
        <h1 className="text-white text-5xl font-bold mb-4">ABC Books</h1>

        <p className="max-w-2xl text-[14px] leading-relaxed opacity-80 mb-8">
          Your personal shelf of meaningful connections. Browse, bond, and nurture the relationships that matter most.
        </p>

        <h3 className="text-white text-lg font-medium mb-4">Social Links</h3>

        {/* Icons Section */}
        <div className="flex gap-4 mb-16">
          {/* Instagram */}
          <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center cursor-pointer hover:bg-gray-200 transition-all">
            <Image src={facebook} alt="facebook"></Image>
          </div>

          {/* Facebook */}
          <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center cursor-pointer hover:bg-gray-200 transition-all">
             <Image src={instagram} alt="instagram"></Image>
          </div>

          {/* Twitter */}
          <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center cursor-pointer hover:bg-gray-200 transition-all">
          <Image src={twitter} alt="twitter"></Image>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="w-full border-t border-white/10 pt-2 flex flex-col md:flex-row justify-between items-center text-[13px] opacity-60">
          <p>© 2026 BookWebsite. All rights reserved.</p>

          <div className="flex gap-8 mt-4 md:mt-0">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-white transition-colors">Cookies</a>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;