import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  FaArrowLeft,
  FaCalendarAlt,
  FaUser,
  FaTag,
} from "react-icons/fa";

import blogs from "../data/blogs";

const BlogDetails = () => {
  const { id } = useParams();

  const blog = blogs.find((item) => item.id === Number(id));

  if (!blog) {
    return (
      <div className="min-h-screen bg-[#08111F] flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-5xl font-bold text-white">
            Blog Not Found
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
      <div className="max-w-6xl mx-auto px-6">

        {/* Back Button */}

        <Link
          to="/"
          className="inline-flex items-center gap-3 text-cyan-400 mb-10 hover:text-white transition"
        >
          <FaArrowLeft />
          Back Home
        </Link>

        {/* Image */}

        <motion.img
          initial={{ opacity: 0, y: -40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          src={blog.image}
          alt={blog.title}
          className="w-full h-[500px] object-cover rounded-3xl"
        />

        {/* Content */}

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="mt-12"
        >

          <div className="flex flex-wrap gap-6 text-gray-400">

            <div className="flex items-center gap-2">
              <FaCalendarAlt className="text-cyan-400" />
              {blog.date}
            </div>

            <div className="flex items-center gap-2">
              <FaUser className="text-cyan-400" />
              {blog.author}
            </div>

            <div className="flex items-center gap-2">
              <FaTag className="text-cyan-400" />
              {blog.category}
            </div>

          </div>

          <h1 className="text-5xl font-bold text-white mt-8">
            {blog.title}
          </h1>

          <p className="text-gray-400 leading-8 text-lg mt-8">
            {blog.description}
          </p>

          <div className="mt-10 space-y-6 text-gray-300 leading-8">

            <p>
              The real estate market continues to evolve with new
              opportunities for home buyers, investors, and sellers.
              Understanding market trends, pricing, and property
              locations is essential before making any investment.
            </p>

            <p>
              Whether you're looking for a luxury villa, an apartment,
              or commercial property, researching the area and working
              with experienced professionals can help you make the
              right decision.
            </p>

            <p>
              Our expert team regularly shares buying guides,
              investment strategies, and market insights to help you
              stay informed and make smarter real estate decisions.
            </p>

          </div>

          {/* Tags */}

          <div className="mt-12 flex flex-wrap gap-4">

            <span className="bg-cyan-400 text-black px-5 py-2 rounded-full font-semibold">
              Real Estate
            </span>

            <span className="bg-white/10 text-white px-5 py-2 rounded-full">
              Property
            </span>

            <span className="bg-white/10 text-white px-5 py-2 rounded-full">
              Investment
            </span>

            <span className="bg-white/10 text-white px-5 py-2 rounded-full">
              Luxury Homes
            </span>

          </div>

        </motion.div>

      </div>
    </section>
  );
};

export default BlogDetails;