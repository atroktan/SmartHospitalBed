import React from "react";
import { Link } from "react-router-dom"; // Untuk routing tanpa reload

export default function Header() {
  return (
    <header className="bg-white py-4 px-6 lg:px-12 shadow-sm w-full">
      <div className="flex justify-between items-center max-w-[1280px] mx-auto">
        {/* Logo Text */}
        <div className="text-xl font-bold tracking-tight">
          <Link to="/" className="text-blue-800">
            SMART
          </Link>{" "}
          <span className="text-gray-800">HOSPITAL BED</span>
        </div>

        {/* Navigation */}
        <nav className="hidden md:flex gap-6 text-gray-700 font-medium text-sm">
          <Link to="/" className="hover:text-blue-800">Home</Link>
          <a href="#services" className="hover:text-blue-800">Services</a>
          <a href="#doctors" className="hover:text-blue-800">Doctors</a>
          <a href="#about" className="hover:text-blue-800">About us</a>
          <a href="#contact" className="hover:text-blue-800">Contact us</a>
        </nav>

        {/* Auth Buttons */}
        <div className="hidden sm:flex gap-3">
          <Link to="/signin">
            <button className="px-4 py-2 border border-blue-800 text-blue-800 rounded-full text-sm hover:bg-blue-50">
              Sign in
            </button>
          </Link>
          <Link to="/signup">
            <button className="px-4 py-2 bg-blue-800 text-white rounded-full text-sm hover:bg-blue-700">
              Sign up
            </button>
          </Link>
        </div>
      </div>
    </header>
  );
}
