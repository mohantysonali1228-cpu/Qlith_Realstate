import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  FaBed,
  FaBath,
  FaRulerCombined,
  FaMapMarkerAlt,
  FaArrowRight,
} from "react-icons/fa";

const PropertyCard = ({ property }) => {
  return (
    <motion.div
      whileHover={{ y: -10 }}
      transition={{ duration: 0.3 }}
      className="bg-[#101B31] rounded-3xl overflow-hidden border border-white/10 shadow-lg hover:shadow-cyan-500/20 transition-all duration-300"
    >
      {/* Property Image */}
      <div className="relative overflow-hidden">
        <img
          src={property.image}
          alt={property.title}
          className="w-full h-72 object-cover transition duration-500 hover:scale-110"
        />

        {/* Status */}
        <span className="absolute top-4 left-4 bg-cyan-400 text-black px-4 py-2 rounded-full text-sm font-semibold">
          {property.status}
        </span>

        {/* Type */}
        <span className="absolute top-4 right-4 bg-black/70 text-white px-4 py-2 rounded-full text-sm">
          {property.type}
        </span>
      </div>

      {/* Content */}
      <div className="p-6">

        <h3 className="text-2xl font-bold text-white">
          {property.title}
        </h3>

        <div className="flex items-center gap-2 text-gray-400 mt-3">
          <FaMapMarkerAlt className="text-cyan-400" />
          <span>{property.location}</span>
        </div>

        <h2 className="text-3xl font-bold text-cyan-400 mt-5">
          {property.price}
        </h2>

        <p className="text-gray-400 mt-5 leading-7">
          {property.description.length > 100
            ? property.description.substring(0, 100) + "..."
            : property.description}
        </p>

        {/* Features */}
        <div className="grid grid-cols-3 gap-4 mt-8">

          <div className="flex flex-col items-center bg-white/5 rounded-xl p-4">
            <FaBed className="text-cyan-400 text-2xl mb-2" />
            <span className="text-white font-semibold">
              {property.beds}
            </span>
            <span className="text-gray-400 text-sm">
              Beds
            </span>
          </div>

          <div className="flex flex-col items-center bg-white/5 rounded-xl p-4">
            <FaBath className="text-cyan-400 text-2xl mb-2" />
            <span className="text-white font-semibold">
              {property.baths}
            </span>
            <span className="text-gray-400 text-sm">
              Baths
            </span>
          </div>

          <div className="flex flex-col items-center bg-white/5 rounded-xl p-4">
            <FaRulerCombined className="text-cyan-400 text-2xl mb-2" />
            <span className="text-white font-semibold">
              {property.area}
            </span>
            <span className="text-gray-400 text-sm">
              Area
            </span>
          </div>

        </div>

        {/* Button */}
        <Link to={`/property/${property.id}`}>
          <button className="mt-8 w-full flex items-center justify-center gap-3 bg-cyan-400 hover:bg-cyan-500 text-black py-4 rounded-full font-bold transition duration-300">
            View Details
            <FaArrowRight />
          </button>
        </Link>

      </div>
    </motion.div>
  );
};

export default PropertyCard;