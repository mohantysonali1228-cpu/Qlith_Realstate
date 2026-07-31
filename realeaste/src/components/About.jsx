import { motion } from "framer-motion";
import {
  FaCheckCircle,
  FaHome,
  FaUsers,
  FaAward,
  FaArrowRight,
} from "react-icons/fa";

const features = [
  "Premium Luxury Properties",
  "100% Verified Documentation",
  "Professional Real Estate Agents",
  "Best Investment Opportunities",
];

const About = () => {
  return (
    <section
      id="about"
      className="relative py-28 bg-[#08111F] overflow-hidden"
    >
      {/* Background Blur */}

      <div className="absolute top-0 left-0 w-80 h-80 rounded-full bg-cyan-500/10 blur-[120px]" />

      <div className="absolute bottom-0 right-0 w-80 h-80 rounded-full bg-blue-500/10 blur-[120px]" />

      <div className="max-w-7xl mx-auto px-6">

        <div className="grid lg:grid-cols-2 gap-20 items-center">

          {/* Left Image */}

          <motion.div
            initial={{ opacity: 0, x: -80 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: .8 }}
            className="relative"
          >
            <img
              src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1200"
              alt="Luxury Home"
              className="rounded-[30px] shadow-2xl"
            />

            {/* Experience Card */}

            <div className="absolute -bottom-10 -right-6 bg-white/10 backdrop-blur-xl border border-white/10 rounded-3xl p-8">

              <h2 className="text-5xl font-bold text-cyan-400">
                18+
              </h2>

              <p className="text-gray-300 mt-2">
                Years Experience
              </p>

            </div>

          </motion.div>

          {/* Right Content */}

          <motion.div
            initial={{ opacity: 0, x: 80 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: .8 }}
          >

            <p className="uppercase tracking-[5px] text-cyan-400 font-semibold">
              About Us
            </p>

            <h2 className="text-5xl md:text-6xl font-bold mt-5 leading-tight text-white">
              Discover Luxury Living With Confidence
            </h2>

            <p className="text-gray-400 mt-8 leading-8">
              We help families and investors discover the finest
              luxury homes, apartments and commercial properties.
              Our experienced team ensures a seamless buying,
              selling and investment experience.
            </p>

            {/* Features */}

            <div className="mt-10 space-y-5">

              {features.map((item, index) => (

                <div
                  key={index}
                  className="flex items-center gap-4"
                >
                  <FaCheckCircle className="text-cyan-400 text-xl" />

                  <span className="text-gray-300 text-lg">
                    {item}
                  </span>

                </div>

              ))}

            </div>

            {/* Small Cards */}

            <div className="grid grid-cols-3 gap-5 mt-12">

              <div className="bg-white/5 border border-white/10 rounded-3xl p-6 text-center">

                <FaHome className="text-cyan-400 text-4xl mx-auto mb-4" />

                <h3 className="text-3xl font-bold text-white">
                  1200+
                </h3>

                <p className="text-gray-400 mt-2">
                  Properties
                </p>

              </div>

              <div className="bg-white/5 border border-white/10 rounded-3xl p-6 text-center">

                <FaUsers className="text-cyan-400 text-4xl mx-auto mb-4" />

                <h3 className="text-3xl font-bold text-white">
                  850+
                </h3>

                <p className="text-gray-400 mt-2">
                  Clients
                </p>

              </div>

              <div className="bg-white/5 border border-white/10 rounded-3xl p-6 text-center">

                <FaAward className="text-cyan-400 text-4xl mx-auto mb-4" />

                <h3 className="text-3xl font-bold text-white">
                  18+
                </h3>

                <p className="text-gray-400 mt-2">
                  Awards
                </p>

              </div>

            </div>

            {/* Button */}

            <button className="mt-12 bg-cyan-400 hover:bg-cyan-500 transition-all duration-300 text-black px-10 py-4 rounded-full font-bold flex items-center gap-3">

              Explore More

              <FaArrowRight />

            </button>

          </motion.div>

        </div>

      </div>
    </section>
  );
};

export default About;