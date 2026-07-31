import { motion } from "framer-motion";
import {
  FaHome,
  FaKey,
  FaHandshake,
  FaChartLine,
  FaBuilding,
  FaHeadset,
} from "react-icons/fa";

const services = [
  {
    id: 1,
    icon: <FaHome />,
    title: "Buy Property",
    description:
      "Discover premium apartments, villas and luxury homes in the best locations.",
  },
  {
    id: 2,
    icon: <FaKey />,
    title: "Rent Property",
    description:
      "Find affordable and luxury rental properties with flexible leasing options.",
  },
  {
    id: 3,
    icon: <FaHandshake />,
    title: "Property Selling",
    description:
      "Sell your property faster with our professional marketing and expert guidance.",
  },
  {
    id: 4,
    icon: <FaChartLine />,
    title: "Investment",
    description:
      "Maximize your returns with smart real estate investment opportunities.",
  },
  {
    id: 5,
    icon: <FaBuilding />,
    title: "Property Management",
    description:
      "Complete property management including maintenance and tenant support.",
  },
  {
    id: 6,
    icon: <FaHeadset />,
    title: "24/7 Support",
    description:
      "Our dedicated team is always available to help you with any questions.",
  },
];

const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const item = {
  hidden: {
    opacity: 0,
    y: 60,
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
    },
  },
};

const Services = () => {
  return (
    <section
      id="services"
      className="relative py-28 bg-[#0B1120] overflow-hidden"
    >
      {/* Background Blur */}

      <div className="absolute top-0 left-0 w-80 h-80 bg-cyan-500/20 rounded-full blur-[140px]" />

      <div className="absolute bottom-0 right-0 w-80 h-80 bg-blue-500/20 rounded-full blur-[140px]" />

      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: .7 }}
          className="text-center mb-20"
        >
          <p className="uppercase tracking-[5px] text-cyan-400 font-semibold">
            Our Services
          </p>

          <h2 className="text-5xl md:text-6xl font-bold mt-5 text-white">
            Everything You Need
          </h2>

          <p className="max-w-2xl mx-auto mt-6 text-gray-400 leading-8">
            We provide complete real estate solutions for buying,
            selling, renting and investing in premium properties.
          </p>

        </motion.div>

        {/* Cards */}

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid lg:grid-cols-3 md:grid-cols-2 gap-8"
        >

          {services.map((service) => (

            <motion.div
              key={service.id}
              variants={item}
              whileHover={{
                y: -10,
                scale: 1.02,
              }}
              className="group relative rounded-3xl bg-white/5 border border-white/10 backdrop-blur-xl overflow-hidden"
            >

              {/* Gradient */}

              <div className="absolute top-0 left-0 h-1 w-full bg-gradient-to-r from-cyan-400 to-blue-500" />

              <div className="p-10">

                <div className="w-20 h-20 rounded-2xl bg-gradient-to-r from-cyan-400 to-blue-500 flex items-center justify-center text-4xl text-white shadow-xl group-hover:rotate-6 transition duration-300">

                  {service.icon}

                </div>

                <h3 className="text-2xl font-bold text-white mt-8">
                  {service.title}
                </h3>

                <p className="text-gray-400 mt-5 leading-8">
                  {service.description}
                </p>

                <button className="mt-8 text-cyan-400 font-semibold hover:text-white transition">
                  Learn More →
                </button>

              </div>

              {/* Hover Glow */}

              <div className="absolute -bottom-20 left-1/2 -translate-x-1/2 w-60 h-60 bg-cyan-500/20 blur-[100px] opacity-0 group-hover:opacity-100 transition duration-500" />

            </motion.div>

          ))}

        </motion.div>

      </div>
    </section>
  );
};

export default Services;