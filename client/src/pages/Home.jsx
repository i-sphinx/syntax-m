import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const Home = () => {
  const [recentPosts, setRecentPosts] = useState(null);

  useEffect(() => {
    const fetchRecentPosts = async () => {
      try {
        const res = await fetch(`/api/post/getposts?limit=4`);
        const data = await res.json();
        if (res.ok) {
          setRecentPosts(data.posts);
        }
      } catch (error) {
        console.log(error.message);
      }
    };
    fetchRecentPosts();
  }, []);

  return (
    <div className="grid lg:grid-cols-2 gap-12 min-h-screen w-full h-full bg-light-background dark:bg-gray-900 pt-10">
      {/* Left Side */}
      <div className="flex flex-col items-center justify-center">
        <motion.img
          className="w-48 h-48 lg:w-64 lg:h-64 bg-gray-200 dark:bg-gray-800 text-gray-600 dark:text-gray-400 rounded-full p-4 mb-10 lg:mb-20"
          src="/images/53920.jpg"
          alt="Author"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, ease: "circOut", delay: 0.2 }}
        />

        <div className="text-center space-y-4 p-2">
          <motion.h1
            whileHover={{ scale: 1.05, color: "#007bff" }}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.7, ease: "easeInOut" }}
            className="text-3xl font-bold text-blue-600 dark:text-blue-200 mb-4"
          >
            Hi there, I'm Prince!
          </motion.h1>
          <motion.p
            whileHover={{ scale: 1.05 }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{
              delay: 0.3,
              duration: 0.7,
              ease: "easeInOut",
              staggerChildren: 0.1,
            }}
            className="text-gray-800 dark:text-gray-200 text-lg"
          >
            I'm a self-proclaimed coding and game design apprentice. Right now,
            I'm focusing on learning the fundamentals of web development and
            game design. I enjoy the problem-solving aspect of coding and the
            creative freedom of designing engaging experiences.
          </motion.p>
          <div className="mt-4">
            <ul className="flex justify-center space-x-4">
              <motion.li
                whileHover={{ scale: 1.2 }}
                className="transition transform duration-200"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="w-6 h-6 text-light-secondary dark:text-dark-secondary"
                >
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 1.366.062 2.633.328 3.608 1.302.976.976 1.24 2.243 1.302 3.609.058 1.265.07 1.645.07 4.849 0 3.204-.012 3.584-.07 4.85-.062 1.366-.328 2.633-1.302 3.608-.976.976-2.243 1.24-3.609 1.302-1.265.058-1.645.07-4.849.07-3.204 0-3.584-.012-4.85-.07-1.366-.062-2.633-.328-3.608-1.302-.976-.976-1.24-2.243-1.302-3.609C2.175 15.584 2.163 15.204 2.163 12c0-3.204.012-3.584.07-4.85.062-1.366.328-2.633 1.302-3.608.976-.976 2.243-1.24 3.609-1.302 1.265-.058 1.645-.07 4.849-.07M12 0C8.741 0 8.332.012 7.052.07 5.76.128 4.675.392 3.703 1.364c-.973.973-1.237 2.058-1.295 3.35C2.012 6.833 2 7.242 2 10.5c0 3.258.012 3.667.07 4.947.058 1.292.322 2.377 1.295 3.35.973.973 2.058 1.237 3.35 1.295 1.292.058 1.701.07 4.947.07 3.258 0 3.667-.012 4.947-.07 1.292-.058 2.377-.322 3.35-1.295.973-.973 1.237-2.058 1.295-3.35.058-1.292.07-1.701.07-4.947 0-3.258-.012-3.667-.07-4.947-.058-1.292-.322-2.377-1.295-3.35-.973-.973-2.058-1.237-3.35-1.295C15.667.012 15.258 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324A6.162 6.162 0 0 0 12 5.838zm0 10.124a3.962 3.962 0 1 1 0-7.924 3.962 3.962 0 0 1 0 7.924zm6.406-11.2a1.44 1.44 0 1 0-2.88 0 1.44 1.44 0 0 0 2.88 0z" />
                </svg>
              </motion.li>
              <motion.li
                whileHover={{ scale: 1.2 }}
                className="transition transform duration-200"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="w-6 h-6 text-light-secondary dark:text-dark-secondary"
                >
                  <path d="M12 2C6.477 2 2 6.477 2 12c0 4.418 2.865 8.167 6.839 9.49.5.092.682-.217.682-.482 0-.237-.009-.868-.014-1.703-2.782.604-3.369-1.34-3.369-1.34-.454-1.154-1.11-1.461-1.11-1.461-.907-.62.069-.608.069-.608 1.002.07 1.53 1.03 1.53 1.03.892 1.528 2.341 1.087 2.91.832.092-.647.35-1.087.636-1.338-2.22-.252-4.555-1.11-4.555-4.943 0-1.09.39-1.98 1.03-2.68-.103-.253-.447-1.27.098-2.646 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0 1 12 6.844a9.55 9.55 0 0 1 2.508.336c1.91-1.296 2.75-1.026 2.75-1.026.546 1.376.202 2.393.1 2.646.64.7 1.03 1.59 1.03 2.68 0 3.843-2.337 4.688-4.566 4.935.36.31.68.923.68 1.86 0 1.344-.012 2.427-.012 2.756 0 .267.18.578.688.48A10.003 10.003 0 0 0 22 12c0-5.523-4.477-10-10-10z" />
                </svg>
              </motion.li>
              <motion.li
                whileHover={{ scale: 1.2 }}
                className="transition transform duration-200"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="w-6 h-6 text-light-secondary dark:text-dark-secondary"
                >
                  <path d="M19.769 3H4.231A1.232 1.232 0 0 0 3 4.231v15.538A1.232 1.232 0 0 0 4.231 21h15.538A1.232 1.232 0 0 0 21 19.769V4.231A1.232 1.232 0 0 0 19.769 3zM8.594 18.306H5.779v-7.4h2.815v7.4zM7.187 9.426a1.65 1.65 0 1 1 .002-3.299 1.65 1.65 0 0 1-.002 3.299zm11.119 8.88h-2.814v-3.722c0-.887-.016-2.027-1.237-2.027-1.237 0-1.426.967-1.426 1.967v3.782h-2.815v-7.4h2.703v1.011h.037c.376-.712 1.296-1.463 2.664-1.463 2.85 0 3.376 1.877 3.376 4.319v3.533z" />
                </svg>
              </motion.li>
            </ul>
          </div>
        </div>
      </div>

      {/* Right Side */}
      <div className="space-y-4 p-4 lg:p-8">
        <motion.h2
          whileHover={{ scale: 1.2 }}
          initial={{ opacity: 0, x: -50 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="text-2xl font-bold text-blue-600 dark:text-blue-200 mb-4"
        >
          Recent Posts
          <span className="text-blue-200 dark:text-blue-600">!</span>
        </motion.h2>

        <div className="grid gap-4">
          {recentPosts &&
            recentPosts.map((post) => (
              <motion.div
                whileHover={{ scale: 1.05 }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.5, ease: "easeInOut" }}
                key={post._id}
                post={post}
                className="bg-gray-200 dark:bg-gray-800 text-gray-800 dark:text-gray-200 rounded-lg p-4 mb-4"
              >
                <Link to={`/post/${post.slug}`}>
                  <h3 className="text-blue-600 dark:text-blue-200 line-clamp-1">
                    {post.title}
                  </h3>
                  <p className="text-gray-800 dark:text-gray-200 line-clamp-4">
                    {getPostFirstParagraph(post.content)}
                  </p>
                </Link>
              </motion.div>
            ))}
        </div>
      </div>
    </div>
  );
};

const getPostFirstParagraph = (content) => {
  const cleanedContent = content.replace(/<[^>]+>/g, "").replace(/ /g, " ");

  const paragraphs = cleanedContent.split(/\n|\r\n/);

  if (paragraphs.length > 0) {
    return paragraphs[0].trim();
  }

  return "";
};

export default Home;
