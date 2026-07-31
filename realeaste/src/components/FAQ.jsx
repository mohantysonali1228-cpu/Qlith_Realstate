import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaChevronDown } from "react-icons/fa";

const faqs = [
  {
    id: 1,
    question: "How do I buy a property?",
    answer:
      "Browse our premium listings, choose your preferred property, schedule a visit, and our expert agents will guide you through the complete buying process.",
  },
  {
    id: 2,
    question: "Do you provide home loan assistance?",
    answer:
      "Yes. We work with trusted banking partners to help you get the best home loan options with competitive interest rates.",
  },
  {
    id: 3,
    question: "Can I schedule a property visit?",
    answer:
      "Absolutely! Contact us or click the 'View Details' button on any property to arrange a visit at your preferred time.",
  },
  {
    id: 4,
    question: "Do you deal with commercial properties?",
    answer:
      "Yes. We offer residential homes, luxury villas, apartments, office spaces, commercial buildings, and investment properties.",
  },
  {
    id: 5,
    question: "Are all properties verified?",
    answer:
      "Every listed property goes through a thorough verification process to ensure legal documentation and ownership authenticity.",
  },
  {
    id: 6,
    question: "How can I contact your team?",
    answer:
      "You can contact us through our contact form, phone number, email, or live chat. Our support team is available 24/7.",
  },
];

const FAQ = () => {
  const [active, setActive] = useState(0);

  return (
    <section
      id="faq"
      className="relative py-28 bg-[#08111F] overflow-hidden"
    >
      {/* Background Blur */}

      <div className="absolute top-0 left-0 w-96 h-96 bg-cyan-500/10 rounded-full blur-[140px]" />

      <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-500/10 rounded-full blur-[140px]" />

      <div className="max-w-5xl mx-auto px-6">

        {/* Heading */}

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: .8 }}
          className="text-center mb-20"
        >
          <p className="uppercase tracking-[5px] text-cyan-400 font-semibold">
            FAQ
          </p>

          <h2 className="text-5xl md:text-6xl font-bold mt-5 text-white">
            Frequently Asked Questions
          </h2>

          <p className="text-gray-400 mt-6 max-w-2xl mx-auto leading-8">
            Find answers to the most common questions about buying,
            renting and investing in premium real estate.
          </p>

        </motion.div>

        {/* FAQ */}

        <div className="space-y-6">

          {faqs.map((faq, index) => (

            <motion.div
              key={faq.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                delay: index * 0.1,
              }}
              className="rounded-3xl bg-white/5 border border-white/10 backdrop-blur-xl overflow-hidden"
            >

              <button
                onClick={() =>
                  setActive(active === index ? null : index)
                }
                className="w-full flex items-center justify-between p-7"
              >

                <h3 className="text-xl font-semibold text-white text-left">
                  {faq.question}
                </h3>

                <motion.div
                  animate={{
                    rotate: active === index ? 180 : 0,
                  }}
                  transition={{
                    duration: .3,
                  }}
                >
                  <FaChevronDown className="text-cyan-400" />
                </motion.div>

              </button>

              <AnimatePresence>

                {active === index && (

                  <motion.div
                    initial={{
                      height: 0,
                      opacity: 0,
                    }}
                    animate={{
                      height: "auto",
                      opacity: 1,
                    }}
                    exit={{
                      height: 0,
                      opacity: 0,
                    }}
                    transition={{
                      duration: .3,
                    }}
                  >

                    <div className="px-7 pb-7 text-gray-400 leading-8">
                      {faq.answer}
                    </div>

                  </motion.div>

                )}

              </AnimatePresence>

            </motion.div>

          ))}

        </div>

      </div>
    </section>
  );
};

export default FAQ;