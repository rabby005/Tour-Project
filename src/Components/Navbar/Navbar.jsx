import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { HiMenuAlt3, HiX } from 'react-icons/hi';
import { CiHeart, CiSearch } from 'react-icons/ci';
import logo from '../../assets/logo.svg';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <header className="bg-white shadow-md fixed w-full z-50">
      <div className="container mx-auto px-4 lg:px-10 py-4 flex justify-between items-center">
        {/* Logo */}
        <NavLink to="/">
          <img src={logo} alt="Logo" className="w-32" />
        </NavLink>

        {/* Desktop Menu */}
        <nav className="hidden lg:flex items-center gap-8 text-gray-700 font-medium">
          <NavLink to="/" className="hover:text-orange-500 transition">Home</NavLink>
          <NavLink to="/about" className="hover:text-orange-500 transition">About</NavLink>
          <NavLink to="/destination" className="hover:text-orange-500 transition">Destinations</NavLink>
          <NavLink to="/services" className="hover:text-orange-500 transition">Services</NavLink>
          <NavLink to="/blogs" className="hover:text-orange-500 transition">Blogs</NavLink>
          <NavLink to="/contact" className="hover:text-orange-500 transition">Contact</NavLink>
        </nav>

        {/* Icons & Button */}
        <div className="hidden lg:flex items-center gap-6">
          <CiSearch className="text-2xl text-gray-600 cursor-pointer hover:text-orange-500" />
          <CiHeart className="text-2xl text-gray-600 cursor-pointer hover:text-orange-500" />
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-medium px-5 py-2 rounded-full transition">
            Book Now
          </button>
        </div>

        {/* Mobile Menu Toggle */}
        <div className="lg:hidden">
          <button onClick={toggleMenu}>
            {isOpen ? <HiX className="text-3xl text-gray-800" /> : <HiMenuAlt3 className="text-3xl text-gray-800" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="lg:hidden bg-white px-4 py-6 shadow-md">
          <nav className="flex flex-col gap-4 text-gray-800 font-semibold">
            <NavLink to="/" onClick={toggleMenu}>Home</NavLink>
            <NavLink to="/about" onClick={toggleMenu}>About</NavLink>
            <NavLink to="/destination" onClick={toggleMenu}>Destinations</NavLink>
            <NavLink to="/services" onClick={toggleMenu}>Services</NavLink>
            <NavLink to="/blogs" onClick={toggleMenu}>Blogs</NavLink>
            <NavLink to="/contact" onClick={toggleMenu}>Contact</NavLink>
          </nav>
          <div className="flex gap-5 mt-5">
            <CiSearch className="text-2xl text-gray-600" />
            <CiHeart className="text-2xl text-gray-600" />
          </div>
          <button className="mt-4 w-full bg-blue-500 hover:bg-blue-700 text-white font-medium py-2 rounded-full">
            Book Now
          </button>
        </div>
      )}
    </header>
  );
};

export default Navbar;
