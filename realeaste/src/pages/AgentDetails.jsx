import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  FaPhoneAlt,
  FaEnvelope,
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaArrowLeft,
} from "react-icons/fa";

import agents from "../data/agents";

const AgentDetails = () => {
  const { id } = useParams();

  const agent = agents.find((item) => item.id === Number(id));

  if (!agent) {
    return (
      <div className="min-h-screen bg-[#08111F] flex items-center justify-center text-white">
        <div className="text-center">
          <h1 className="text-5xl font-bold">404</h1>
          <p className="mt-4 text-gray-400">Agent not found.</p>

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
    <section className="min-h-screen bg-[#08111F] py-20 px-6">
      <div className="max-w-7xl mx-auto">

        <Link
          to="/"
          className="inline-flex items-center gap-3 text-cyan-400 mb-10"
        >
          <FaArrowLeft />
          Back to Home
        </Link>

        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* Image */}

          <motion.div
            initial={{ opacity: 0, x: -80 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: .8 }}
          >
            <img
              src={agent.image}
              alt={agent.name}
              className="rounded-3xl w-full h-[650px] object-cover"
            />
          </motion.div>

          {/* Content */}

          <motion.div
            initial={{ opacity: 0, x: 80 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: .8 }}
          >

            <span className="bg-cyan-400 text-black px-4 py-2 rounded-full font-semibold">
              {agent.role}
            </span>

            <h1 className="text-5xl font-bold text-white mt-6">
              {agent.name}
            </h1>

            <p className="text-gray-400 leading-8 mt-8">
              Our experienced property consultant helps clients buy,
              sell and invest in premium residential and commercial
              properties with complete transparency and trust.
            </p>

            <div className="grid grid-cols-2 gap-6 mt-10">

              <div className="bg-white/5 p-6 rounded-2xl">
                <h3 className="text-cyan-400 text-xl font-bold">
                  Experience
                </h3>

                <p className="text-white mt-2">
                  {agent.experience}
                </p>
              </div>

              <div className="bg-white/5 p-6 rounded-2xl">
                <h3 className="text-cyan-400 text-xl font-bold">
                  Properties Sold
                </h3>

                <p className="text-white mt-2">
                  {agent.properties}+
                </p>
              </div>

            </div>

            <div className="mt-10 space-y-5">

              <div className="flex items-center gap-4 text-gray-300">
                <FaPhoneAlt className="text-cyan-400" />
                {agent.phone}
              </div>

              <div className="flex items-center gap-4 text-gray-300">
                <FaEnvelope className="text-cyan-400" />
                {agent.email}
              </div>

            </div>

            <div className="flex gap-4 mt-10">

              <a
                href="#"
                className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center hover:bg-cyan-400 hover:text-black transition"
              >
                <FaFacebookF />
              </a>

              <a
                href="#"
                className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center hover:bg-cyan-400 hover:text-black transition"
              >
                <FaInstagram />
              </a>

              <a
                href="#"
                className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center hover:bg-cyan-400 hover:text-black transition"
              >
                <FaLinkedinIn />
              </a>

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

export default AgentDetails;