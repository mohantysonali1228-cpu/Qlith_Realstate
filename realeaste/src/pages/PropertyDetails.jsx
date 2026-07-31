import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  FaBed,
  FaBath,
  FaRulerCombined,
  FaMapMarkerAlt,
  FaArrowLeft,
} from "react-icons/fa";

import properties from "../data/properties";

const PropertyDetails = () => {
  const { id } = useParams();

  const property = properties.find(
    (item) => item.id === Number(id)
  );

  if (!property) {
    return (
      <div className="min-h-screen bg-[#08111F] flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-5xl font-bold text-white">
            Property Not Found
          </h1>

          <Link
            to="/"
            className="inline-block mt-8 bg-cyan-400 text-black px-6 py-3 rounded-full font-semibold"
          >
            Back Home
          </Link>
        </div>
      </div>
    );
  }

  return (
    <section className="min-h-screen bg-[#08111F] py-20">
      <div className="max-w-7xl mx-auto px-6">

        <Link
          to="/"
          className="inline-flex items-center gap-3 text-cyan-400 mb-10"
        >
          <FaArrowLeft />
          Back Home
        </Link>

        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* Image */}

          <motion.div
            initial={{ opacity: 0, x: -60 }}
            animate={{ opacity: 1, x: 0 }}
          >
            <img
              src={property.image}
              alt={property.title}
              className="rounded-3xl w-full h-[600px] object-cover"
            />
          </motion.div>

          {/* Content */}

          <motion.div
            initial={{ opacity: 0, x: 60 }}
            animate={{ opacity: 1, x: 0 }}
          >
            <p className="text-cyan-400 text-xl font-semibold">
              {property.location}
            </p>

            <h1 className="text-5xl font-bold text-white mt-4">
              {property.title}
            </h1>

            <h2 className="text-4xl text-cyan-400 font-bold mt-6">
              {property.price}
            </h2>

            <p className="text-gray-400 leading-8 mt-8">
              {property.description}
            </p>

            {/* Features */}

            <div className="grid grid-cols-3 gap-6 mt-12">

              <div className="bg-white/5 rounded-2xl p-6 text-center">
                <FaBed className="mx-auto text-cyan-400 text-3xl mb-3" />
                <h3 className="text-white font-bold">
                  {property.beds}
                </h3>
                <p className="text-gray-400 text-sm">
                  Bedrooms
                </p>
              </div>

              <div className="bg-white/5 rounded-2xl p-6 text-center">
                <FaBath className="mx-auto text-cyan-400 text-3xl mb-3" />
                <h3 className="text-white font-bold">
                  {property.baths}
                </h3>
                <p className="text-gray-400 text-sm">
                  Bathrooms
                </p>
              </div>

              <div className="bg-white/5 rounded-2xl p-6 text-center">
                <FaRulerCombined className="mx-auto text-cyan-400 text-3xl mb-3" />
                <h3 className="text-white font-bold">
                  {property.area}
                </h3>
                <p className="text-gray-400 text-sm">
                  Area
                </p>
              </div>

            </div>

            <div className="mt-10 flex items-center gap-3 text-gray-300">
              <FaMapMarkerAlt className="text-cyan-400" />
              {property.location}
            </div>

            <button className="mt-12 bg-cyan-400 hover:bg-cyan-500 text-black px-10 py-4 rounded-full font-bold transition">
              Contact Agent
            </button>

          </motion.div>

        </div>

      </div>
    </section>
  );
};

export default PropertyDetails;