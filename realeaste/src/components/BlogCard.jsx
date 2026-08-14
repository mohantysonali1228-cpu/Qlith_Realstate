import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  FaCalendarAlt,
  FaUser,
  FaArrowRight,
} from "react-icons/fa";

const BlogCard = ({ blog }) => {
  return (
    <motion.div
      whileHover={{
        y: -10,
      }}
      transition={{
        duration: 0.3,
      }}
      className="overflow-hidden rounded-3xl bg-white/5 border border-white/10"
    >
      {/* Image */}

      <div className="overflow-hidden">

        <img
          src={blog.image}
          alt={blog.title}
          className="w-full h-72 object-cover hover:scale-110 transition duration-700"
        />

      </div>

      {/* Content */}

      <div className="p-7">

        <span className="inline-block bg-cyan-400 text-black px-4 py-2 rounded-full text-sm font-semibold">
          {blog.category}
        </span>

        <div className="flex items-center gap-6 text-gray-400 text-sm mt-6">

          <div className="flex items-center gap-2">
            <FaCalendarAlt />
            {blog.date}
          </div>

          <div className="flex items-center gap-2">
            <FaUser />
            {blog.author}
          </div>

        </div>

        <h3 className="text-2xl font-bold text-white mt-6">
          {blog.title}
        </h3>

        <p className="text-gray-400 mt-5 leading-7">
          {blog.description}
        </p>

        <Link to={`/blog/${blog.id}`}>
          <button className="mt-8 flex items-center gap-3 text-cyan-400 hover:text-white font-semibold transition">
            Read More
            <FaArrowRight />
          </button>
        </Link>

      </div>

    </motion.div>
  );
};

export default BlogCard;