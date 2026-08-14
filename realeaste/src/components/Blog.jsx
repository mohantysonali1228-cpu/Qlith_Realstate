import { motion } from "framer-motion";
import BlogCard from "./BlogCard";
import blogs from "../data/blogs";

const Blog = () => {
  return (
    <section
      id="blog"
      className="py-24 bg-[#08111F] text-white"
    >
      <div className="max-w-7xl mx-auto px-6">

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-cyan-400 uppercase tracking-[4px] font-semibold">
            Latest Blog
          </p>

          <h2 className="text-5xl font-bold mt-4">
            News & Articles
          </h2>

          <p className="text-gray-400 mt-5 max-w-2xl mx-auto">
            Stay updated with the latest real estate market news,
            property investment tips, and home buying guides.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-8">
          {blogs.map((blog) => (
            <BlogCard
              key={blog.id}
              blog={blog}
            />
          ))}
        </div>

      </div>
    </section>
  );
};

export default Blog;