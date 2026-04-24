import { Link } from "react-router-dom";
import { useState } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-[#1C1E53] sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">

        {/* Logo */}
        <Link to="/" className="flex items-center gap-2">
          <h1 className="text-xl font-bold text-white">{`{Finsweet}`}</h1>
        </Link>

        <ul className="hidden md:flex gap-8">
          <li>
            <Link to="/" className="text-gray-300 hover:text-white transition font-medium">
              Home
            </Link>
          </li>
          <li>
            <Link to="/about" className="text-gray-300 hover:text-white transition font-medium">
              About us
            </Link>
          </li>
          <li>
            <Link to="/pricing" className="text-gray-300 hover:text-white transition font-medium">
              Pricing
            </Link>
          </li>
          <li>
            <Link to="/work" className="text-gray-300 hover:text-white transition font-medium">
              Work
            </Link>
          </li>
          <li>
            <Link to="/blog" className="text-gray-300 hover:text-white transition font-medium">
              Blog
            </Link>
          </li>
        </ul>

        {/* Contact Button */}
        <Link
          to="/contact"
          className="hidden md:block border border-white text-white px-5 py-2 rounded-full hover:bg-white hover:text-[#1C1E53] transition font-medium"
        >
          Contact us
        </Link>

        {/* Mobile menu button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-white text-2xl"
        >
          ☰
        </button>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden bg-[#2D2E5F] border-t border-gray-600 pb-3 px-6 space-y-1">
          <Link
            to="/"
            className="block px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:text-white hover:bg-[#1C1E53] transition"
            onClick={() => setIsOpen(false)}
          >
            Home
          </Link>
          <Link
            to="/about"
            className="block px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:text-white hover:bg-[#1C1E53] transition"
            onClick={() => setIsOpen(false)}
          >
            About us
          </Link>
          <Link
            to="/pricing"
            className="block px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:text-white hover:bg-[#1C1E53] transition"
            onClick={() => setIsOpen(false)}
          >
            Pricing
          </Link>
          <Link
            to="/work"
            className="block px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:text-white hover:bg-[#1C1E53] transition"
            onClick={() => setIsOpen(false)}
          >
            Work
          </Link>
          <Link
            to="/blog"
            className="block px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:text-white hover:bg-[#1C1E53] transition"
            onClick={() => setIsOpen(false)}
          >
            Blog
          </Link>
          <Link
            to="/contact"
            className="block w-full mt-3 border border-white text-white px-5 py-2 rounded-full hover:bg-white hover:text-[#1C1E53] transition font-medium text-center"
            onClick={() => setIsOpen(false)}
          >
            Contact us
          </Link>
        </div>
      )}
    </nav>
  );
}
