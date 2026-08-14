import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
        {/* Logo */}
        <Link
          to="/"
          className="text-3xl font-bold text-blue-600"
        >
          Realestic
        </Link>

        {/* Menu */}
        <ul className="hidden md:flex items-center gap-8 font-medium">
          <li>
            <Link to="/" className="hover:text-blue-600">
              Home
            </Link>
          </li>

          <li>
            <Link to="/about" className="hover:text-blue-600">
              About
            </Link>
          </li>

          <li>
            <Link to="/properties" className="hover:text-blue-600">
              Properties
            </Link>
          </li>

          <li>
            <Link to="/agents" className="hover:text-blue-600">
              Agents
            </Link>
          </li>

          <li>
            <Link to="/blogs" className="hover:text-blue-600">
              Blogs
            </Link>
          </li>
        </ul>

        {/* Contact Button */}
        <Link
          to="/contact"
          className="bg-blue-600 text-white px-5 py-2 rounded-full hover:bg-blue-700 transition"
        >
          Contact Us
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;