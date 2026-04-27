function Navbar() {
  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        
        <div className="flex items-center gap-2">
          <img src="https://placehold.co/64x32?text=Logo" alt="Finsweet" className="h-8" />
          <h1 className="text-xl font-bold text-[#1C1E53]">{`{Finsweet}`}</h1>
        </div>

        <ul className="hidden md:flex gap-8">
          <li>
            <a href="#home" className="text-gray-700 hover:text-[#1C1E53] transition font-medium">
              Home
            </a>
          </li>
          <li>
            <a href="#about" className="text-gray-700 hover:text-[#1C1E53] transition font-medium">
              About us
            </a>
          </li>
          <li>
            <a href="#pricing" className="text-gray-700 hover:text-[#1C1E53] transition font-medium">
              Pricing
            </a>
          </li>
          <li>
            <a href="#work" className="text-gray-700 hover:text-[#1C1E53] transition font-medium">
              Work
            </a>
          </li>
          <li>
            <a href="#blog" className="text-gray-700 hover:text-[#1C1E53] transition font-medium">
              Blog
            </a>
          </li>
          <li>
            <a href="#contact" className="text-gray-700 hover:text-[#1C1E53] transition font-medium">
              Contact us
            </a>
          </li>
        </ul>

        <button className="md:hidden text-[#1C1E53] text-2xl">
          ☰
        </button>

      </div>
    </nav>
  );
}

export default Navbar;
