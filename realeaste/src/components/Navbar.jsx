import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { HiMenuAlt3, HiX } from "react-icons/hi";

const navLinks = [
  { name: "Home", href: "#home" },
  { name: "Properties", href: "#properties" },
  { name: "Services", href: "#services" },
  { name: "About", href: "#about" },
  { name: "Agents", href: "#agents" },
  { name: "Testimonials", href: "#testimonials" },
  { name: "Blog", href: "#blog" },
  { name: "FAQ", href: "#faq" },
  { name: "Contact", href: "#contact" },
];

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [sticky, setSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setSticky(window.scrollY > 80);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        sticky
          ? "bg-[#08111F]/90 backdrop-blur-xl shadow-lg"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6">

        <div className="flex items-center justify-between h-20">

          {/* Logo */}

          <a
            href="#home"
            className="text-3xl font-bold text-white"
          >
            Real<span className="text-cyan-400">Estate</span>
          </a>

          {/* Desktop Menu */}

          <nav className="hidden lg:flex items-center gap-8">

            {navLinks.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-gray-300 hover:text-cyan-400 transition duration-300"
              >
                {item.name}
              </a>
            ))}

          </nav>

          {/* Contact Button */}

          <a
            href="#contact"
            className="hidden lg:inline-flex bg-cyan-400 hover:bg-cyan-500 text-black font-semibold px-6 py-3 rounded-full transition"
          >
            Contact Us
          </a>

          {/* Mobile Menu Button */}

          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="lg:hidden text-white text-3xl"
          >
            {menuOpen ? <HiX /> : <HiMenuAlt3 />}
          </button>

        </div>

      </div>

      {/* Mobile Menu */}

      {menuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -40 }}
          animate={{ opacity: 1, y: 0 }}
          className="lg:hidden bg-[#08111F] border-t border-white/10"
        >
          <div className="flex flex-col px-6 py-6 space-y-5">

            {navLinks.map((item) => (
              <a
                key={item.name}
                href={item.href}
                onClick={() => setMenuOpen(false)}
                className="text-gray-300 hover:text-cyan-400 transition"
              >
                {item.name}
              </a>
            ))}

            <a
              href="#contact"
              onClick={() => setMenuOpen(false)}
              className="bg-cyan-400 text-center text-black font-semibold py-3 rounded-full"
            >
              Contact Us
            </a>

          </div>
        </motion.div>
      )}
    </header>
  );
};

export default Navbar;