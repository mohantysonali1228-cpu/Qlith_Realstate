import { motion } from "framer-motion";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaPhoneAlt,
  FaEnvelope,
} from "react-icons/fa";
import { Link } from "react-router-dom";

const AgentCard = ({ agent }) => {
  return (
    <motion.div
      whileHover={{
        y: -10,
        scale: 1.02,
      }}
      transition={{ duration: 0.3 }}
      className="group bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl overflow-hidden shadow-lg hover:shadow-cyan-500/20"
    >
      {/* Image */}

      <div className="relative overflow-hidden">
        <img
          src={agent.image}
          alt={agent.name}
          className="w-full h-[380px] object-cover transition duration-700 group-hover:scale-110"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>

        <span className="absolute top-5 left-5 bg-cyan-400 text-black px-4 py-2 rounded-full text-sm font-semibold">
          {agent.role}
        </span>
      </div>

      {/* Content */}

      <div className="p-6">

        <h3 className="text-2xl font-bold text-white">
          {agent.name}
        </h3>

        <p className="text-gray-400 mt-2">
          {agent.experience} Experience
        </p>

        <p className="text-cyan-400 font-medium mt-1">
          {agent.properties}+ Properties Sold
        </p>

        {/* Contact */}

        <div className="mt-6 space-y-3">

          <div className="flex items-center gap-3 text-gray-300">
            <FaPhoneAlt className="text-cyan-400" />
            {agent.phone}
          </div>

          <div className="flex items-center gap-3 text-gray-300">
            <FaEnvelope className="text-cyan-400" />
            {agent.email}
          </div>

        </div>

        {/* Social */}

        <div className="flex gap-4 mt-6">

          <a
            href="#"
            className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-cyan-400 hover:text-black transition"
          >
            <FaFacebookF />
          </a>

          <a
            href="#"
            className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-cyan-400 hover:text-black transition"
          >
            <FaInstagram />
          </a>

          <a
            href="#"
            className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-cyan-400 hover:text-black transition"
          >
            <FaLinkedinIn />
          </a>

        </div>

        {/* Button */}

        <Link to={`/agent/${agent.id}`}>
          <button className="mt-8 w-full bg-cyan-400 hover:bg-cyan-500 text-black font-bold py-3 rounded-full transition">
            View Profile
          </button>
        </Link>

      </div>
    </motion.div>
  );
};

export default AgentCard;