import { useState } from "react";
import { motion } from "framer-motion";
import { FaSearch, FaMapMarkerAlt } from "react-icons/fa";
import PropertyCard from "./PropertyCard";
import properties from "../data/properties";

const categories = [
  "All",
  "Villa",
  "Apartment",
  "House",
  "Luxury",
];

const Featured = () => {
  const [search, setSearch] = useState("");
  const [active, setActive] = useState("All");

  const filtered = properties.filter((property) => {
    const matchSearch =
      property.title.toLowerCase().includes(search.toLowerCase()) ||
      property.location.toLowerCase().includes(search.toLowerCase());

    if (active === "All") return matchSearch;

    return (
      matchSearch &&
      property.title.toLowerCase().includes(active.toLowerCase())
    );
  });

  return (
    <section
      id="properties"
      className="relative py-28 bg-[#08111F] overflow-hidden"
    >
      {/* Background Blur */}

      <div className="absolute top-0 left-0 w-80 h-80 rounded-full bg-cyan-500/10 blur-[140px]" />

      <div className="absolute bottom-0 right-0 w-80 h-80 rounded-full bg-purple-500/10 blur-[140px]" />

      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: .8 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <p className="uppercase tracking-[5px] text-cyan-400 font-semibold">
            Featured Properties
          </p>

          <h2 className="text-5xl md:text-6xl font-bold mt-5">
            Find Your Dream Home
          </h2>

          <p className="max-w-2xl mx-auto mt-6 text-gray-400 leading-8">
            Discover premium villas, apartments and luxury homes
            designed for modern living.
          </p>
        </motion.div>

        {/* Search */}

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: .3 }}
          className="mt-16"
        >

          <div className="bg-white/5 backdrop-blur-xl rounded-full border border-white/10 flex items-center px-6 py-4">

            <FaSearch className="text-cyan-400 text-xl" />

            <input
              type="text"
              placeholder="Search property..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="bg-transparent outline-none text-white ml-4 flex-1"
            />

            <FaMapMarkerAlt className="text-cyan-400" />

          </div>

        </motion.div>

        {/* Categories */}

        <div className="flex flex-wrap justify-center gap-4 mt-10">

          {categories.map((cat) => (

            <button
              key={cat}
              onClick={() => setActive(cat)}
              className={`px-7 py-3 rounded-full transition-all duration-300
              ${
                active === cat
                  ? "bg-cyan-400 text-black"
                  : "bg-white/5 border border-white/10 text-white hover:bg-cyan-400 hover:text-black"
              }`}
            >
              {cat}
            </button>

          ))}

        </div>

        {/* Cards */}

        <motion.div
          layout
          className="grid lg:grid-cols-4 md:grid-cols-2 gap-8 mt-20"
        >

          {filtered.map((property) => (

            <motion.div
              key={property.id}
              layout
              initial={{
                opacity: 0,
                y: 60,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                duration: .5,
              }}
              viewport={{
                once: true,
              }}
            >
              <PropertyCard property={property} />
            </motion.div>

          ))}

        </motion.div>

        {/* Empty */}

        {filtered.length === 0 && (

          <div className="text-center mt-20">

            <h2 className="text-3xl font-bold">
              No Property Found
            </h2>

            <p className="text-gray-400 mt-4">
              Try another keyword.
            </p>

          </div>

        )}

        {/* CTA */}

        <motion.div
          initial={{
            opacity: 0,
            y: 40,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            delay: .3,
          }}
          viewport={{
            once: true,
          }}
          className="text-center mt-24"
        >

          <button className="bg-cyan-400 hover:bg-cyan-500 text-black px-10 py-4 rounded-full font-bold transition-all duration-300">
            View All Properties
          </button>

        </motion.div>

      </div>
    </section>
  );
};

export default Featured;