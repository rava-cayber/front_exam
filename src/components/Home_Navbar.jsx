import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div className="flex justify-between items-center px-10 py-6 bg-[#1C1E53] text-white">
      <h1 className="text-xl font-bold">{`{Finsweet}`}</h1>

      <ul className="flex gap-8">
        <li><Link to="/">Home</Link></li>
        <li>About us</li>
        <li>Pricing</li>
        <li>Work</li>
        <li>Blog</li>
      </ul>

      <button className="border px-5 py-2 rounded-full hover:bg-white hover:text-black transition">
        Contact us
      </button>
    </div>
  );
}

export default Navbar;
