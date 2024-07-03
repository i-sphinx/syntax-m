import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const getPostFirstParagraph = (content) => {
  const cleanedContent = content
    .replace(/<[^>]+>/g, "")
    .replace(/&nbsp;/g, " ");
  const paragraphs = cleanedContent.split(/\n|\r\n/);
  if (paragraphs.length > 0) {
    return paragraphs[0].trim();
  }
  return "";
};

const Blog = () => {
  const { currentUser } = useSelector((state) => state.user);
  const [showMore, setShowMore] = useState(true);
  const [userPosts, setUserPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const res = await fetch(`/api/post/getposts?sortDirection=1`);
        const data = await res.json();
        if (res.ok) {
          setUserPosts(data.posts);
          if (data.posts.length < 9) {
            setShowMore(false);
          }
        }
      } catch (error) {
        console.log(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchPosts();
  }, [currentUser._id]);

  const handleShowMore = async () => {
    const startIndex = userPosts.length;
    try {
      const res = await fetch(
        `/api/post/getposts?sortDirection=1&startIndex=${startIndex}`
      );
      const data = await res.json();
      if (res.ok) {
        setUserPosts((prev) => [...prev, ...data.posts]);
        if (data.posts.length < 9) {
          setShowMore(false);
        }
      }
    } catch (error) {
      console.log(error);
    }
  };

  const loadingSkeletons = Array(3)
    .fill("")
    .map((_, index) => (
      <motion.div
        key={index}
        className="flex flex-col md:flex-row items-center bg-white border border-gray-200 rounded-lg shadow-lg mb-4 w-full"
        initial={{ opacity: 0.5 }}
        animate={{ opacity: [0.5, 1, 0.5] }}
        transition={{ repeat: Infinity, duration: 1 }}
      >
        <div className="w-full md:w-1/3 h-48 bg-gray-300 rounded-t-lg md:rounded-l-lg"></div>
        <div className="flex flex-col justify-between p-4 leading-normal w-full md:w-2/3">
          <div className="h-6 bg-gray-300 rounded mb-2"></div>
          <div className="h-4 bg-gray-300 rounded mb-2"></div>
          <div className="h-4 bg-gray-300 rounded mb-2"></div>
        </div>
      </motion.div>
    ));

  const postVariants = {
    hidden: { opacity: 0, scale: 0.8, x: 100 },
    visible: { opacity: 1, scale: 1, x: 0 },
  };

  return (
    <div className="min-h-screen bg-gradient-to-r from-gray-100 to-gray-300 dark:from-gray-800 dark:to-gray-900">
      <div className="items-center text-center max-w-5xl mx-auto justify-center mt-2 text-red-300">
        <span>
          These are some demo posts real ones will be added in the future so
          stay stune!
        </span>
      </div>
      {/* remove above div only one.. */}

      <div className="max-w-6xl w-full mx-auto p-4">
        {loading ? (
          <div className="flex flex-col items-center">{loadingSkeletons}</div>
        ) : (
          <>
            <motion.div
              initial="hidden"
              animate="visible"
              transition={{ staggerChildren: 0.2 }}
            >
              {userPosts.length > 0 ? (
                userPosts.map((post) => (
                  <motion.div
                    key={post._id}
                    variants={postVariants}
                    transition={{ type: "spring", stiffness: 100 }}
                  >
                    <Link
                      to={`/post/${post.slug}`}
                      className="flex flex-col md:flex-row items-center bg-white border border-gray-200 rounded-lg shadow-lg hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700 mb-4 transition-transform transform hover:scale-105"
                    >
                      <div className="w-full md:w-1/3 h-48 flex items-center justify-center bg-gray-200 rounded-t-lg md:rounded-l-lg overflow-hidden">
                        <img
                          className="object-cover w-full h-full"
                          src={post.image}
                          alt={post.title}
                          style={{
                            width: "100%",
                            height: "100%",
                            objectFit: "cover",
                          }}
                        />
                      </div>
                      <div className="flex flex-col justify-between p-4 leading-normal w-full md:w-2/3">
                        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white line-clamp-2">
                          {post.title}
                        </h5>
                        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400 line-clamp-4">
                          {getPostFirstParagraph(post.content)}
                        </p>
                      </div>
                    </Link>
                  </motion.div>
                ))
              ) : (
                <p className="text-center text-gray-500 dark:text-gray-400">
                  No posts available
                </p>
              )}
            </motion.div>
            {showMore && userPosts.length > 0 && (
              <motion.button
                onClick={handleShowMore}
                className="w-full bg-green-500 text-white text-sm py-3 mt-4 rounded-lg hover:bg-green-600 transition-colors"
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.8 }}
                animate={{ opacity: [1, 0.8, 1], scale: [1, 1.1, 1] }}
                transition={{ duration: 1 }}
              >
                Show more
              </motion.button>
            )}
          </>
        )}
      </div>
    </div>
  );
};

export default Blog;
