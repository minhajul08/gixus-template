import React from 'react';
import { useState } from "react";
import { Link } from "react-router-dom";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <div>
            <nav className="bg-white shadow-md fixed top-0 left-0 w-full z-50">
      <div className="container mx-auto flex justify-between items-center py-4 px-6">
        {/* Logo */}
        <Link to="/" className="text-2xl font-bold text-gray-900">
          Gixus
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-6">
          <Link to="/" className="hover:text-blue-600">Home</Link>
          <Link to="/about" className="hover:text-blue-600">About</Link>
          <Link to="/services" className="hover:text-blue-600">Services</Link>
          <Link to="/projects" className="hover:text-blue-600">Projects</Link>
          <Link to="/blog" className="hover:text-blue-600">Blog</Link>
          <Link to="/contact" className="hover:text-blue-600">Contact</Link>
        </div>

        {/* Mobile Menu Button */}
        <button onClick={() => setIsOpen(!isOpen)}>
      {isOpen ? <AiOutlineClose size={28} /> : <AiOutlineMenu size={28} />}
    </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white shadow-lg absolute top-16 left-0 w-full py-4">
          <Link to="/" className="block px-6 py-2 hover:bg-gray-100">Home</Link>
          <Link to="/about" className="block px-6 py-2 hover:bg-gray-100">About</Link>
          <Link to="/services" className="block px-6 py-2 hover:bg-gray-100">Services</Link>
          <Link to="/projects" className="block px-6 py-2 hover:bg-gray-100">Projects</Link>
          <Link to="/blog" className="block px-6 py-2 hover:bg-gray-100">Blog</Link>
          <Link to="/contact" className="block px-6 py-2 hover:bg-gray-100">Contact</Link>
        </div>
      )}
    </nav>
        </div>
    );
};

export default Navbar;