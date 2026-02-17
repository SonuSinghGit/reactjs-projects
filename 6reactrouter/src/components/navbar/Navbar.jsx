import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="bg-gray-600 text-white shadow-md">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        <h1 className="text-xl font-bold">MyWebsite</h1>

        <ul className="flex space-x-6">
          <li>
            <Link to="/" className="hover:text-yellow-300 transition duration-300">
              Home
            </Link>
          </li>
          <li>
            <Link to="/about" className="hover:text-yellow-300 transition duration-300">
              About
            </Link>
          </li>
          <li>
            <Link to="/contact" className="hover:text-yellow-300 transition duration-300">
              Contact
            </Link>
          </li>
          <li>
            <Link to="/about" className="hover:text-yellow-300 transition duration-300">
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
