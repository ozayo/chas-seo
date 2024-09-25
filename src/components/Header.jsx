import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa'; // React Icons for menu
import ozayLogo from "../assets/oo-logo.svg"

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="bg-white fixed w-full z-10" aria-label="Main navigation">
      <div className="container mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 flex justify-between items-center h-16">
        {/* Logo */}
        <Link to="/" aria-label="Home">
          {/* <img
            src="/sweden-black-logo.svg"
            height={19}
            width={130}
            alt="Sweden Logo"
          /> */}
          <img
            src={ozayLogo}
            height={31}
            width={55}
            alt="Sweden Logo"
          />
        </Link>

        {/* Desktop Menu */}
        <nav className="hidden md:flex space-x-4" aria-label="Main">
          <Link to="/" className="text-black hover:text-gray-700">
            Home
          </Link>
          <Link to="/about" className="text-black hover:text-gray-700">
            About
          </Link>
          <Link to="/projects" className="text-black hover:text-gray-700">
            Projects
          </Link>
          <Link to="/contact" className="text-black hover:text-gray-700">
            Contact
          </Link>
        </nav>

        {/* Hamburger Menu (Mobile) */}
        <button
          onClick={toggleMenu}
          className="md:hidden text-gray-900 focus:outline-none"
          aria-label="Toggle menu"
          aria-expanded={isOpen ? "true" : "false"}
        >
          {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <nav className="md:hidden bg-white shadow-md" aria-label="Mobile menu">
          <Link to="/" className="block text-gray-700 hover:bg-gray-100 px-3 py-2 rounded-md">
            Home
          </Link>
          <Link to="/about" className="block text-gray-700 hover:bg-gray-100 px-3 py-2 rounded-md">
            About
          </Link>
          <Link to="/projects" className="block text-gray-700 hover:bg-gray-100 px-3 py-2 rounded-md">
            Projects
          </Link>
          <Link to="/contact" className="block text-gray-700 hover:bg-gray-100 px-3 py-2 rounded-md">
            Contact
          </Link>
        </nav>
      )}
    </header>
  );
};

export default Header;
