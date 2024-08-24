import React from "react";
import { Link } from "react-router-dom";

function NavBar() {
  return (
    <header className="p-4 mb-4">
      <nav className="container mx-auto">
        <ul className="flex justify-center space-x-4 font-bold text-lg">
          <li>
            <Link to="/" className="text-white">
              Home
            </Link>
          </li>
          <li>
            <Link to="/gallery" className="text-white">
              Gallery
            </Link>
          </li>
          <li>
            <Link to="/aboutme" className="text-white">
              About
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default NavBar;
