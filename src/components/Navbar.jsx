import { AiOutlineMenu } from "react-icons/ai";
import { useState } from "react";
export default function Navbar() {
  const [showMenu, setShowMenu] = useState(false);
  const toggleMenu = (e) => {
    e.preventDefault();
    setShowMenu(!showMenu);
  };
  return (
    <nav className="relative container mx-auto p-6">
      {/* flex container */}
      <div className="flex items-center justify-between">
        {/* Logo */}
        <div className="pt-2 cursor-pointer">
          <img src="/src//img/logo.svg" alt="" />
        </div>
        {/* Menu Items */}
        <div className="hidden md:flex space-x-6">
          <a href="#" className="hover:text-darkGrayishBlue">
            Pricing
          </a>
          <a href="#" className="hover:text-darkGrayishBlue">
            Product
          </a>
          <a href="#" className="hover:text-darkGrayishBlue">
            About Us
          </a>
        </div>
        {/* Button get Started */}
        <p
          href="#"
          className="hidden md:block p-3 px-6 pt-t text-white bg-brightRed rounded-full baseline hover:bg-brightRedLight cursor-pointer"
        >
          Get Started
        </p>
        <button
          id="menu-btn"
          className="block hamburger md:hidden focus:outline-none"
          onClick={toggleMenu}
        >
          {showMenu ? (
            <div className="text-3xl font-normal">X</div>
          ) : (
            <AiOutlineMenu size={30} />
          )}
        </button>
      </div>
    </nav>
  );
}
