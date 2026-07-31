import { motion } from "framer-motion";
import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaLinkedinIn,
  FaYoutube,
  FaArrowRight,
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaEnvelope,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="relative bg-[#060D18] overflow-hidden">

      {/* Blur Background */}

      <div className="absolute top-0 left-0 w-80 h-80 rounded-full bg-cyan-500/10 blur-[120px]" />
      <div className="absolute bottom-0 right-0 w-80 h-80 rounded-full bg-blue-500/10 blur-[120px]" />

      <div className="max-w-7xl mx-auto px-6">

        {/* Newsletter */}

        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: .8 }}
          className="bg-gradient-to-r from-cyan-500 to-blue-600 rounded-[35px] p-10 md:p-14 flex flex-col lg:flex-row items-center justify-between gap-10"
        >
          <div>

            <h2 className="text-4xl font-bold text-white">
              Subscribe Our Newsletter
            </h2>

            <p className="text-white/80 mt-4">
              Get the latest luxury property updates directly in your inbox.
            </p>

          </div>

          <div className="flex w-full lg:w-auto bg-white rounded-full overflow-hidden">

            <input
              type="email"
              placeholder="Enter your email"
              className="px-6 py-4 w-full lg:w-80 outline-none text-black"
            />

            <button className="bg-black text-white px-8 flex items-center gap-2 hover:bg-gray-900 transition">
              Subscribe
              <FaArrowRight />
            </button>

          </div>

        </motion.div>

        {/* Footer Grid */}

        <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-12 py-20">

          {/* Company */}

          <div>

            <h2 className="text-4xl font-bold text-white">
              Real<span className="text-cyan-400">Estate</span>
            </h2>

            <p className="text-gray-400 mt-6 leading-8">
              We help people buy, sell and invest in luxury properties with complete trust and transparency.
            </p>

            <div className="flex gap-4 mt-8">

              {[
                FaFacebookF,
                FaInstagram,
                FaTwitter,
                FaLinkedinIn,
                FaYoutube,
              ].map((Icon, index) => (

                <a
                  key={index}
                  href="#"
                  className="w-11 h-11 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-cyan-400 hover:bg-cyan-400 hover:text-black transition"
                >
                  <Icon />
                </a>

              ))}

            </div>

          </div>

          {/* Quick Links */}

          <div>

            <h3 className="text-2xl font-semibold text-white mb-8">
              Quick Links
            </h3>

            <ul className="space-y-4 text-gray-400">

              <li><a href="#home" className="hover:text-cyan-400 transition">Home</a></li>

              <li><a href="#about" className="hover:text-cyan-400 transition">About</a></li>

              <li><a href="#properties" className="hover:text-cyan-400 transition">Properties</a></li>

              <li><a href="#services" className="hover:text-cyan-400 transition">Services</a></li>

              <li><a href="#contact" className="hover:text-cyan-400 transition">Contact</a></li>

            </ul>

          </div>

          {/* Services */}

          <div>

            <h3 className="text-2xl font-semibold text-white mb-8">
              Services
            </h3>

            <ul className="space-y-4 text-gray-400">

              <li>Buy Property</li>

              <li>Sell Property</li>

              <li>Rent Property</li>

              <li>Property Investment</li>

              <li>Property Management</li>

            </ul>

          </div>

          {/* Contact */}

          <div>

            <h3 className="text-2xl font-semibold text-white mb-8">
              Contact Info
            </h3>

            <div className="space-y-6">

              <div className="flex gap-4">

                <FaMapMarkerAlt className="text-cyan-400 mt-1" />

                <span className="text-gray-400">
                  Bhubaneswar, Odisha, India
                </span>

              </div>

              <div className="flex gap-4">

                <FaPhoneAlt className="text-cyan-400 mt-1" />

                <span className="text-gray-400">
                  +91 98765 43210
                </span>

              </div>

              <div className="flex gap-4">

                <FaEnvelope className="text-cyan-400 mt-1" />

                <span className="text-gray-400">
                  info@realestate.com
                </span>

              </div>

            </div>

          </div>

        </div>

        {/* Bottom */}

        <div className="border-t border-white/10 py-8 flex flex-col md:flex-row items-center justify-between gap-4">

          <p className="text-gray-500 text-center">
            © 2026 RealEstate. All Rights Reserved.
          </p>

          <div className="flex gap-6 text-gray-500">

            <a href="#" className="hover:text-cyan-400 transition">
              Privacy Policy
            </a>

            <a href="#" className="hover:text-cyan-400 transition">
              Terms & Conditions
            </a>

          </div>

        </div>

      </div>

    </footer>
  );
};

export default Footer;