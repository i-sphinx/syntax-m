import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

const PostPage = () => {
  const { postSlug } = useParams();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [post, setPost] = useState(null);

  useEffect(() => {
    const fetchPost = async () => {
      try {
        setLoading(true);
        const res = await fetch(`/api/post/getposts?slug=${postSlug}`);
        if (!res.ok) {
          setError(true);
          setLoading(false);
          return;
        }
        const data = await res.json();
        setPost(data.posts[0]);
        setError(false);
        setLoading(false);
      } catch (error) {
        setError(true);
        setLoading(false);
      }
    };
    fetchPost();
  }, [postSlug]);

  if (loading)
    return (
      <div className="flex justify-center items-center min-h-screen">
        Loading...
      </div>
    );

  return (
    <main className="p-3 flex flex-col max-w-6xl mx-auto min-h-screen bg-light-background dark:bg-gray-900 text-gray-600 dark:text-gray-400">
      <h1 className="text-3xl mt-10 text-center font-serif max-w-4xl mx-auto lg:text-4xl">
        {post && post.title}
      </h1>
      <Link to={`/search?category=${post && post.category}`}>
        <button className="text-gray-500 text-xs rounded-xl border p-2 flex max-w-2xl mx-auto mt-5 hover:text-blue-400">
          {post && post.category}
        </button>
      </Link>
      <img
        src={post && post.image}
        alt={post && post.title}
        className="mt-10 p-3 max-h-[500px] w-full object-contain"
      />
      <div className="flex justify-between p-3 border-b border-slate-500 mx-auto w-full max-w-2xl text-xs">
        <span>{post && new Date(post.createdAt).toLocaleDateString()}</span>
        <span className="italic">
          {post && (post.content.length / 1000).toFixed(0)} mins read
        </span>
      </div>
      <div
        className="p-6 max-w-5xl mt-10 rounded-xl mx-auto w-full post-content dark:bg-gray-800 text-gray-800 dark:text-gray-200"
        dangerouslySetInnerHTML={{ __html: post && post.content }}
      ></div>
    </main>
  );
};

export default PostPage;
