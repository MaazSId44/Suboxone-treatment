import React, { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="absolute top-5 left-0 w-full z-10">
      <div
        className="max-w-screen-3xl mx-auto py-4 md:py-6 px-6 md:px-12 flex justify-between items-center text-white 
        backdrop-blur-sm bg-[#1f1e1e1a] rounded-lg"
      >
        {/* Logo */}
        <div className="font-bold text-3xl sm:text-4xl md:text-5xl tracking-normal cursor-pointer">
          LOGO
        </div>

        {/* Menu Toggle Button (Visible on Small & Medium Screens) */}
        <div className="md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-white text-3xl focus:outline-none"
          >
            {isOpen ? <FiX /> : <FiMenu />}
          </button>
        </div>

        {/* Navigation Menu with Smooth Transition */}
        <ul
          className={`absolute md:static top-[70px] left-0 w-full md:w-auto bg-[#1f1e1e] md:bg-transparent rounded-b-lg md:flex flex-col md:flex-row text-lg
          transform transition-transform duration-300 ease-in-out ${
            isOpen ? "translate-y-0 opacity-100" : "-translate-y-4 opacity-0 pointer-events-none"
          } md:opacity-100 md:translate-y-0 md:pointer-events-auto`}
        >
          {["Home", "About Us", "Owners", "Tenants", "Properties"].map(
            (item) => (
              <li
                key={item}
                className="block md:inline-block py-3 md:py-0 pl-6 cursor-pointer font-normal text-customWhite hover:opacity-80 transition"
                onClick={() => setIsOpen(false)} // Close menu on click
              >
                {item}
              </li>
            )
          )}

          {/* "Start Treatment" Button (Inside menu on small & medium screens) */}
          <li className="block md:hidden py-3 pl-6">
            <button className="bg-primary text-white text-lg px-6 py-3 rounded-lg transition cursor-pointer hover:bg-opacity-90">
              Start Treatment
            </button>
          </li>
        </ul>

        {/* "Start Treatment" Button (Visible only on Large Screens) */}
        <button className="hidden md:block bg-primary text-white text-lg px-6 py-3 rounded-lg transition cursor-pointer hover:bg-opacity-90">
          Start Treatment
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
