import { motion } from "framer-motion";
import {
  FaBuilding,
  FaUsers,
  FaAward,
  FaCity,
} from "react-icons/fa";

const stats = [
  {
    id: 1,
    icon: <FaBuilding />,
    number: "1,250+",
    title: "Luxury Properties",
    color: "from-cyan-500 to-blue-500",
  },
  {
    id: 2,
    icon: <FaUsers />,
    number: "850+",
    title: "Happy Clients",
    color: "from-purple-500 to-pink-500",
  },
  {
    id: 3,
    icon: <FaCity />,
    number: "45+",
    title: "Premium Cities",
    color: "from-orange-500 to-red-500",
  },
  {
    id: 4,
    icon: <FaAward />,
    number: "18+",
    title: "Years Experience",
    color: "from-green-500 to-emerald-500",
  },
];

const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const item = {
  hidden: {
    opacity: 0,
    y: 80,
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
    },
  },
};

const Stats = () => {
  return (
    <section className="relative py-24 bg-[#08111F] overflow-hidden">

      {/* Background Blur */}

      <div className="absolute -top-40 left-0 w-80 h-80 rounded-full bg-cyan-500/20 blur-[120px]" />

      <div className="absolute bottom-0 right-0 w-96 h-96 rounded-full bg-purple-500/20 blur-[120px]" />

      <div className="max-w-7xl mx-auto px-6">

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: .8 }}
          className="text-center mb-16"
        >
          <p className="uppercase tracking-[5px] text-cyan-400 font-semibold">
            Our Achievement
          </p>

          <h2 className="text-5xl md:text-6xl font-bold mt-5">
            Trusted By Thousands
          </h2>

          <p className="text-gray-400 mt-6 max-w-3xl mx-auto leading-8">
            We provide premium real estate services with luxury homes,
            modern apartments and investment opportunities around the world.
          </p>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid lg:grid-cols-4 md:grid-cols-2 gap-8"
        >

          {stats.map((stat) => (

            <motion.div
              key={stat.id}
              variants={item}
              whileHover={{
                y: -12,
                scale: 1.03,
              }}
              transition={{
                duration: .3,
              }}
              className="relative rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl overflow-hidden group"
            >

              {/* Gradient Top */}

              <div
                className={`h-2 w-full bg-gradient-to-r ${stat.color}`}
              />

              <div className="p-10">

                <div
                  className={`w-20 h-20 rounded-2xl bg-gradient-to-r ${stat.color}
                  flex items-center justify-center text-4xl text-white mb-8 mx-auto shadow-lg`}
                >
                  {stat.icon}
                </div>

                <h1 className="text-center text-5xl font-bold text-white">
                  {stat.number}
                </h1>

                <p className="text-center text-gray-400 mt-4 text-lg">
                  {stat.title}
                </p>

              </div>

              {/* Hover Glow */}

              <div
                className={`absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-500 bg-gradient-to-r ${stat.color} blur-3xl`}
                style={{
                  zIndex: -1,
                }}
              />

            </motion.div>

          ))}

        </motion.div>

      </div>

    </section>
  );
};

export default Stats;