import React from "react";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="bg-gray-600 text-white mt-10">
      <div className="container mx-auto px-6 py-8 grid md:grid-cols-3 gap-8">

        {/* Website Info */}
        <div>
          <h2 className="text-2xl font-bold mb-3">MyWebsite</h2>
          <p className="text-sm text-gray-200">
            Success is built with consistency, perseverance, and motivation.
            Keep pushing forward every single day.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-xl font-semibold mb-3">Quick Links</h3>
          <ul className="space-y-2">
            <li>
              {/* <Link to="/" className="hover:text-yellow-300 transition duration-300"> */}
                Home
              {/* </Link> */}
            </li>
            <li>
              {/* <Link to="/about" className="hover:text-yellow-300 transition duration-300"> */}
                About
              {/* </Link> */}
            </li>
            <li>
              {/* <Link to="/contact" className="hover:text-yellow-300 transition duration-300"> */}
                Contact
              {/* </Link> */}
            </li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="text-xl font-semibold mb-3">Contact</h3>
          <p>Email: example@email.com</p>
          <p>Phone: +91 9876543210</p>
          <p>Location: India</p>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="bg-gray-700 text-center py-4 text-sm">
        © {new Date().getFullYear()} MyWebsite. All Rights Reserved.
      </div>
    </footer>
  );
}

export default Footer;
