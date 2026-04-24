function Navbar() {
  return (
    <nav className="bg-[#1C1E53] sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">

        <div className="flex items-center gap-2">
          <img src="/Logo.png" alt="Finsweet" className="h-6" />
    
        </div>

        <ul className="flex gap-8 items-center">

          <li>
            <a href="#home" className="text-white font-medium">
              Home
            </a>
          </li>

          <li>
            <a href="#about" className="text-gray-300 hover:text-white transition">
              About us
            </a>
          </li>

          <li>
            <a href="#pricing" className="text-gray-300 hover:text-white transition">
              Pricing
            </a>
          </li>

          <li>
            <a href="#work" className="text-gray-300 hover:text-white transition">
              Work
            </a>
          </li>

          <li>
            <a href="#blog" className="text-gray-300 hover:text-white transition">
              Blog
            </a>
          </li>

          <li>
            <a
              href="#contact"
              className="text-white border border-white px-4 py-2 rounded-full hover:bg-white hover:text-[#1C1E53] transition"
            >
              Contact us
            </a>
          </li>

        </ul>

      </div>
    </nav>
  );
}

export default Navbar;
