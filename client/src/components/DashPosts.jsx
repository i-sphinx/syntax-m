import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const DashPosts = () => {
  const { currentUser } = useSelector((state) => state.user);
  const [showMore, setShowMore] = useState(true);
  const [userPosts, setUserPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const res = await fetch(`/api/post/getposts?userId=${currentUser._id}`);
        const data = await res.json();
        if (res.ok) {
          setUserPosts(data.posts);
          if (data.posts.length < 9) {
            setShowMore(false);
          }
        }
      } catch (error) {
        console.log(error.message);
      }
    };
    if (currentUser.isAdmin) {
      fetchPosts();
    }
  }, [currentUser._id]);

  const handleShowMore = async () => {
    const startIndex = userPosts.length;
    try {
      const res = await fetch(
        `/api/post/getposts?userId=${currentUser._id}&startIndex=${startIndex}`
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

  return (
    <div className="w-full max-w-[80%] overflow-auto p-4 bg-light-background dark:bg-gray-900 text-light-text dark:text-dark-text">
      {currentUser.isAdmin && userPosts.length > 0 ? (
        <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
          <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
            <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
              <tr>
                <th scope="col" className="px-6 py-3">
                  Date Updated
                </th>
                <th scope="col" className="px-6 py-3">
                  Post Image
                </th>
                <th scope="col" className="px-6 py-3">
                  Post Title
                </th>
                <th scope="col" className="px-6 py-3">
                  Category
                </th>
                <th scope="col" className="px-6 py-3">
                  Delete
                </th>
                <th scope="col" className="px-6 py-3">
                  Edit
                </th>
              </tr>
            </thead>
            <tbody>
              {userPosts.map((post) => (
                <tr
                  key={post._id}
                  className="bg-white border-b dark:bg-gray-800 dark:border-gray-700"
                >
                  <th
                    scope="row"
                    className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                  >
                    {new Date(post.updatedAt).toLocaleDateString()}
                  </th>
                  <td className="px-6 py-4">
                    <Link to={`/post/${post.slug}`}>
                      <img
                        src={post.image}
                        alt={post.title}
                        className="w-20 h-10 object-cover bg-gray-500 rounded-md"
                      ></img>
                    </Link>
                  </td>
                  <td className="px-6 py-4">
                    <Link
                      to={`/post/${post.slug}`}
                      className="text-slate-800 dark:text-blue-200 font-sans text-[120%]"
                    >
                      <span className="block truncate max-w-2xl">
                        {post.title}
                      </span>
                    </Link>
                  </td>
                  <td className="px-6 py-4">{post.category}</td>
                  <td className="px-6 py-4 text-right">
                    <span className="font-medium text-red-500 dark:text-blue-500 hover:underline cursor-pointer">
                      Delete
                    </span>
                  </td>
                  <td className="px-6 py-4 text-right">
                    <Link to={`/update-post/${post._id}`}>
                      <span className="font-medium text-green-500 dark:text-blue-500 hover:underline">
                        Edit
                      </span>
                    </Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          {showMore && (
            <button
              onClick={handleShowMore}
              className="w-full self-center text-green-500 text-sm py-7"
            >
              Show more
            </button>
          )}
        </div>
      ) : (
        <p className="text-gray-800 dark:text-gray-200">
          You have no posts yet!
        </p>
      )}
    </div>
  );
};

export default DashPosts;
