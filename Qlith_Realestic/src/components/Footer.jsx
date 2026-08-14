import { FaFacebookF, FaLinkedinIn, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-white border-t mt-16">
      <div className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-4 gap-10">

        {/* Left Section */}
        <div>
          <h2 className="text-4xl font-semibold leading-snug text-gray-900">
            Discover Real state Ideas <br />
            from your own Ease!
          </h2>

          <div className="flex gap-4 mt-6">
            <a
              href="#"
              className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 hover:bg-blue-600 hover:text-white duration-300"
            >
              <FaFacebookF />
            </a>

            <a
              href="#"
              className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 hover:bg-blue-600 hover:text-white duration-300"
            >
              <FaLinkedinIn />
            </a>

            <a
              href="#"
              className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 hover:bg-blue-600 hover:text-white duration-300"
            >
              <FaTwitter />
            </a>
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
          <ul className="space-y-3 text-gray-600">
            <li><a href="/">Home</a></li>
            <li><a href="/about">About Us</a></li>
            <li><a href="/agents">Our Agents</a></li>
            <li><a href="/contact">Contact Us</a></li>
            <li><a href="/faq">FAQ</a></li>
          </ul>
        </div>

        {/* Main Pages */}
        <div>
          <h3 className="text-xl font-semibold mb-4">Main Pages</h3>
          <ul className="space-y-3 text-gray-600">
            <li><a href="/properties">Properties</a></li>
            <li><a href="/property-type">Properties Type</a></li>
            <li><a href="/bedrooms">Bedrooms</a></li>
            <li><a href="/categories">Categories</a></li>
            <li><a href="/blogs">Blogs</a></li>
          </ul>
        </div>

        {/* Other */}
        <div>
          <h3 className="text-xl font-semibold mb-4">Other</h3>
          <ul className="space-y-3 text-gray-600">
            <li><a href="/404">Error 404</a></li>
            <li><a href="/submit">Form Submit</a></li>
          </ul>
        </div>

      </div>

      {/* Bottom */}
      <div className="border-t py-5 px-6">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center text-gray-500">
          <p>Copyright ©2024</p>

          <p className="mt-3 md:mt-0">
            Designed by <span className="font-semibold">Framer</span> • Made with ❤️
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;