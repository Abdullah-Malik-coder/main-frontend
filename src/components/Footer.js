import React from 'react';
import { FaFacebookF, FaInstagram, FaTwitter, FaMoneyCheckAlt } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import logo from '../../src/assets/footerlogo.png';

const Footer = () => {
  return (
    <footer className="bg-[#435b7e] text-white pt-10 px-6">
      <div className="max-w-7xl mx-auto">

        {/* Top Row */}
        <div className="flex flex-col md:flex-row justify-start md:justify-between items-center mb-8 gap-4">
          <div className="flex gap-5">
            <FaFacebookF className="hover:text-orange-500 cursor-pointer" />
            <FaInstagram className="hover:text-orange-500 cursor-pointer" />
            <FaTwitter className="hover:text-orange-500 cursor-pointer" />
          </div>
          <div className="flex gap-2 w-full justify-center md:justify-end">
            <input
              type="email"
              placeholder="Enter your email..."
              className="p-2 rounded-md text-black w-full sm:w-64 mb-2 md:mb-0"
            />
            <button className="bg-orange-500 text-white px-4 py-2 rounded-md hover:bg-orange-600">
              Subscribe
            </button>
          </div>
        </div>

        {/* Main Footer */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10 mb-12">

          {/* Left Column (Logo + About) */}
          <div className="flex flex-col items-center md:items-start space-y-3">
            <img src={logo} alt="Logo" className="w-44 mb-2" />
            <h3 className="text-xl font-bold mt-1">Spare Parts Hub</h3>
            <p className="text-sm leading-relaxed text-center md:text-left">
              We provide high-quality spare parts with fast shipping and affordable prices —
              now with Cash on Delivery in major regions.
            </p>
            <div className="flex items-center gap-2 mt-3">
              <FaMoneyCheckAlt size={28} />
              <span className="text-sm">Cash on Delivery</span>
            </div>
          </div>

          {/* Lists */}
          <div className="text-center md:text-left">
            <h4 className="text-lg font-semibold mb-3">Customer Service</h4>
            <ul className="text-sm space-y-2">
              <li><Link to="/order" onClick={() => window.scrollTo({ top:0, behavior:'smooth'})}>My Orders</Link></li>
              <li><Link to="/helpcenter" onClick={() => window.scrollTo({ top:0, behavior:'smooth'})}>Help Center</Link></li>
              <li><Link to="/order" onClick={() => window.scrollTo({ top:0, behavior:'smooth'})}>Track My Order</Link></li>
              <li><Link to="/contact" onClick={() => window.scrollTo({ top:0, behavior:'smooth'})}>Store Location</Link></li>
            </ul>
          </div>

          <div className="text-center md:text-left">
            <h4 className="text-lg font-semibold mb-3">Pages</h4>
            <ul className="text-sm space-y-2">
              <li><Link to="/about" onClick={() => window.scrollTo({ top:0, behavior:'smooth'})}>About Us</Link></li>
              <li><Link to="/shop" onClick={() => window.scrollTo({ top:0, behavior:'smooth'})}>Shop</Link></li>
              <li><Link to="/blog" onClick={() => window.scrollTo({ top:0, behavior:'smooth'})}>Blog</Link></li>
              <li><Link to="/helpcenter" onClick={() => window.scrollTo({ top:0, behavior:'smooth'})}>Guides</Link></li>
              <li><Link to="/faq" onClick={() => window.scrollTo({ top:0, behavior:'smooth'})}>FAQ's</Link></li>
              <li><Link to="/contact" onClick={() => window.scrollTo({ top:0, behavior:'smooth'})}>Contact Us</Link></li>
            </ul>
          </div>

          <div className="text-center md:text-left">
            <h4 className="text-lg font-semibold mb-3">Contact Us</h4>
            <ul className="text-sm space-y-2 text-gray-200">
              <li>📍 Cempaka Wangi No 22, Karachi - Pakistan</li>
              <li>📧 info@sparepartshubs.com</li>
              <li>📞 +92 300-1234567</li>
              <li>🕒 7 Days a week from 10 am to 6 pm</li>
            </ul>
          </div>

        </div>

        {/* Bottom */}
        <div className="border-t border-gray-700 pt-4 text-center text-sm text-gray-400">
          © {new Date().getFullYear()} Spare Parts Hub. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
