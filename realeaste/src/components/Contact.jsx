import { motion } from "framer-motion";
import {
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
  FaPaperPlane,
} from "react-icons/fa";

const Contact = () => {
  return (
    <section
      id="contact"
      className="relative py-28 bg-[#0B1120] overflow-hidden"
    >
      {/* Background Blur */}

      <div className="absolute top-0 left-0 w-96 h-96 bg-cyan-500/10 rounded-full blur-[140px]" />

      <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-500/10 rounded-full blur-[140px]" />

      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: .8 }}
          className="text-center mb-20"
        >
          <p className="uppercase tracking-[5px] text-cyan-400 font-semibold">
            Contact Us
          </p>

          <h2 className="text-5xl md:text-6xl font-bold mt-5 text-white">
            Let's Find Your Dream Home
          </h2>

          <p className="text-gray-400 mt-6 max-w-2xl mx-auto leading-8">
            Have questions? Our real estate experts are here to help
            you buy, sell or invest in premium properties.
          </p>

        </motion.div>

        <div className="grid lg:grid-cols-2 gap-14">

          {/* Left Side */}

          <motion.div
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >

            <div className="space-y-8">

              <div className="flex gap-5 items-center bg-white/5 border border-white/10 rounded-3xl p-6">

                <div className="w-16 h-16 rounded-2xl bg-cyan-400 flex items-center justify-center text-black text-2xl">
                  <FaPhoneAlt />
                </div>

                <div>
                  <h3 className="text-xl font-bold text-white">
                    Phone
                  </h3>

                  <p className="text-gray-400">
                    +91 9348505948
                  </p>
                </div>

              </div>

              <div className="flex gap-5 items-center bg-white/5 border border-white/10 rounded-3xl p-6">

                <div className="w-16 h-16 rounded-2xl bg-cyan-400 flex items-center justify-center text-black text-2xl">
                  <FaEnvelope />
                </div>

                <div>
                  <h3 className="text-xl font-bold text-white">
                    Email
                  </h3>

                  <p className="text-gray-400">
                    mohantysonali1228@gmail.com
                  </p>
                </div>

              </div>

              <div className="flex gap-5 items-center bg-white/5 border border-white/10 rounded-3xl p-6">

                <div className="w-16 h-16 rounded-2xl bg-cyan-400 flex items-center justify-center text-black text-2xl">
                  <FaMapMarkerAlt />
                </div>

                <div>
                  <h3 className="text-xl font-bold text-white">
                    Office
                  </h3>

                  <p className="text-gray-400">
                    Bhubaneswar, Odisha, India
                  </p>
                </div>

              </div>

            </div>

          </motion.div>

          {/* Contact Form */}

          <motion.div
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-[35px] p-10"
          >

            <form className="space-y-6">

              <input
                type="text"
                placeholder="Your Name"
                className="w-full bg-[#111827] border border-white/10 rounded-xl px-5 py-4 text-white outline-none focus:border-cyan-400"
              />

              <input
                type="email"
                placeholder="Email Address"
                className="w-full bg-[#111827] border border-white/10 rounded-xl px-5 py-4 text-white outline-none focus:border-cyan-400"
              />

              <input
                type="text"
                placeholder="Phone Number"
                className="w-full bg-[#111827] border border-white/10 rounded-xl px-5 py-4 text-white outline-none focus:border-cyan-400"
              />

              <textarea
                rows="6"
                placeholder="Write Your Message..."
                className="w-full bg-[#111827] border border-white/10 rounded-xl px-5 py-4 text-white outline-none resize-none focus:border-cyan-400"
              ></textarea>

              <button
                type="submit"
                className="w-full bg-cyan-400 hover:bg-cyan-500 transition-all duration-300 text-black font-bold py-4 rounded-full flex items-center justify-center gap-3"
              >
                Send Message
                <FaPaperPlane />
              </button>

            </form>

          </motion.div>

        </div>

      </div>
    </section>
  );
};

export default Contact;