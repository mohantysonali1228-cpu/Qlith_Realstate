import { motion } from "framer-motion";
import { FaStar, FaQuoteLeft } from "react-icons/fa";

const testimonials = [
  {
    id: 1,
    name: "John Anderson",
    role: "Property Investor",
    image:
      "https://randomuser.me/api/portraits/men/32.jpg",
    review:
      "Buying my dream villa was incredibly easy. The team was professional, transparent, and always available to answer every question.",
  },
  {
    id: 2,
    name: "Sophia Williams",
    role: "Home Owner",
    image:
      "https://randomuser.me/api/portraits/women/44.jpg",
    review:
      "Their premium property collection exceeded my expectations. I found my perfect home within just a few days.",
  },
  {
    id: 3,
    name: "David Miller",
    role: "Business Owner",
    image:
      "https://randomuser.me/api/portraits/men/75.jpg",
    review:
      "Excellent customer service and outstanding investment advice. Highly recommended for anyone looking for luxury properties.",
  },
];

const Testimonials = () => {
  return (
    <section
      id="testimonials"
      className="relative py-28 bg-[#0B1120] overflow-hidden"
    >
      {/* Background Glow */}

      <div className="absolute top-0 left-0 w-96 h-96 bg-cyan-500/10 rounded-full blur-[140px]" />

      <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-500/10 rounded-full blur-[140px]" />

      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: .8 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <p className="uppercase tracking-[5px] text-cyan-400 font-semibold">
            Testimonials
          </p>

          <h2 className="text-5xl md:text-6xl font-bold mt-5 text-white">
            What Our Clients Say
          </h2>

          <p className="text-gray-400 mt-6 max-w-2xl mx-auto leading-8">
            Trusted by hundreds of happy homeowners and investors
            across the world.
          </p>

        </motion.div>

        {/* Cards */}

        <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-8">

          {testimonials.map((item) => (

            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 70 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: .6 }}
              whileHover={{
                y: -10,
              }}
              className="relative bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-8 overflow-hidden group"
            >

              {/* Quote */}

              <FaQuoteLeft className="text-cyan-400 text-5xl opacity-30" />

              {/* Review */}

              <p className="text-gray-300 leading-8 mt-6">
                {item.review}
              </p>

              {/* Stars */}

              <div className="flex gap-1 mt-8 text-yellow-400">

                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />

              </div>

              {/* User */}

              <div className="flex items-center gap-4 mt-8">

                <img
                  src={item.image}
                  alt={item.name}
                  className="w-16 h-16 rounded-full object-cover border-2 border-cyan-400"
                />

                <div>

                  <h3 className="text-xl font-bold text-white">
                    {item.name}
                  </h3>

                  <p className="text-gray-400">
                    {item.role}
                  </p>

                </div>

              </div>

              {/* Glow */}

              <div className="absolute -bottom-24 left-1/2 -translate-x-1/2 w-64 h-64 bg-cyan-500/20 blur-[100px] opacity-0 group-hover:opacity-100 transition duration-500" />

            </motion.div>

          ))}

        </div>

      </div>
    </section>
  );
};

export default Testimonials;