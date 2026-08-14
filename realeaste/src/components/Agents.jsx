import { motion } from "framer-motion";
import AgentCard from "./AgentCard";
import agents from "../data/agents";

const Agents = () => {
  return (
    <section
      id="agents"
      className="relative py-28 bg-[#08111F] overflow-hidden"
    >
      {/* Background Blur */}

      <div className="absolute top-0 left-0 w-96 h-96 bg-cyan-500/10 rounded-full blur-[140px]" />

      <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-500/10 rounded-full blur-[140px]" />

      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}

        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <p className="uppercase tracking-[5px] text-cyan-400 font-semibold">
            OUR AGENTS
          </p>

          <h2 className="text-5xl md:text-6xl font-bold text-white mt-4">
            Meet Our Professional Agents
          </h2>

          <p className="text-gray-400 mt-6 max-w-2xl mx-auto leading-8">
            Our experienced real estate experts are ready to help you
            buy, sell, and invest in premium properties.
          </p>
        </motion.div>

        {/* Cards */}

        <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-8">
          {agents.map((agent, index) => (
            <motion.div
              key={agent.id}
              initial={{ opacity: 0, y: 80 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.6,
                delay: index * 0.15,
              }}
            >
              <AgentCard agent={agent} />
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Agents;