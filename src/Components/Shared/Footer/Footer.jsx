import React from 'react';
import { FaFacebookF, FaInstagram, FaTwitter, FaLinkedinIn } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-[#0B1C2C] text-white pt-12 pb-8">
      <div className="container mx-auto px-5 lg:px-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          
          {/* Brand Section */}
          <div>
            <h2 className="text-2xl font-bold text-orange-400 mb-4">ExploreX</h2>
            <p className="text-sm text-gray-400 leading-relaxed">
              ExploreX is your ultimate travel partner for discovering breathtaking destinations and unforgettable experiences. Let's make your dream trip a reality.
            </p>
          </div>

          {/* Useful Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-white">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="/about" className="text-gray-400 hover:text-orange-400 transition">About Us</a></li>
              <li><a href="/destination" className="text-gray-400 hover:text-orange-400 transition">Destinations</a></li>
              <li><a href="/services" className="text-gray-400 hover:text-orange-400 transition">Services</a></li>
              <li><a href="/blogs" className="text-gray-400 hover:text-orange-400 transition">Blogs</a></li>
              <li><a href="/contact" className="text-gray-400 hover:text-orange-400 transition">Contact</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-white">Get in Touch</h3>
            <p className="text-sm text-gray-400 mb-2">123 Paradise Road, Wanderlust City, 10101</p>
            <p className="text-sm text-gray-400 mb-2">Email: hello@explorex.com</p>
            <p className="text-sm text-gray-400">Phone: +1 (800) 123-4567</p>
          </div>

          {/* Social Media */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-white">Follow Us</h3>
            <div className="flex gap-4">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="bg-white/10 p-2 rounded-full hover:bg-orange-400 transition">
                <FaFacebookF size={18} />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="bg-white/10 p-2 rounded-full hover:bg-orange-400 transition">
                <FaInstagram size={18} />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="bg-white/10 p-2 rounded-full hover:bg-orange-400 transition">
                <FaTwitter size={18} />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="bg-white/10 p-2 rounded-full hover:bg-orange-400 transition">
                <FaLinkedinIn size={18} />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 border-t border-white/10 pt-6 text-center text-sm text-gray-500">
          &copy; {new Date().getFullYear()} ExploreX Travel. All Rights Reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
