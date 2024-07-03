import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import CallToAction from "../components/CallToAction";
import CommentSection from "../components/CommentSection";
import PostCard from "../components/PostCard";
import hljs from "highlight.js";
import "highlight.js/styles/github-dark.css";
// import "highlight.js/styles/monokai.css";

const PostPage = () => {
  const { postSlug } = useParams();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [post, setPost] = useState(null);
  const [recentPosts, setRecentPosts] = useState(null);

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

  useEffect(() => {
    const fetchRecentPosts = async () => {
      try {
        const res = await fetch(`/api/post/getposts?limit=3`);
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

  useEffect(() => {
    if (post) {
      document.querySelectorAll("pre code").forEach((block) => {
        hljs.highlightBlock(block);
      });
    }
  }, [post]);

  if (loading)
    return (
      <div className="flex justify-center items-center min-h-screen">
        <svg
          className="animate-spin h-8 w-8 text-blue-500"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
        >
          <circle
            className="opacity-25"
            cx="12"
            cy="12"
            r="10"
            stroke="currentColor"
            strokeWidth="4"
          ></circle>
          <path
            className="opacity-75"
            fill="currentColor"
            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zM2 12a10 10 0 0110-10V0c-5.523 0-10 4.477-10 10h2zm6 10a10 10 0 0010-10H18a8 8 0 01-8 8v2zm8-8a8 8 0 01-8 8v2a10 10 0 0010-10h-2z"
          ></path>
        </svg>
      </div>
    );

  if (error)
    return (
      <div className="flex justify-center items-center min-h-screen">
        <p className="text-red-500">
          Failed to load the post. Please try again later.
        </p>
      </div>
    );

  return (
    <main className="p-3 flex flex-col max-w-6xl mx-auto min-h-screen bg-light-background dark:bg-gray-900 text-gray-600 dark:text-gray-400">
      <h1 className="text-3xl mt-10 text-center font-serif max-w-4xl mx-auto lg:text-4xl">
        {post && post.title}
      </h1>
      <Link to={`/search?category=${post && post.category}`}>
        <button className="text-gray-500 text-xs rounded-xl border p-2 flex max-w-2xl mx-auto mt-5 hover:text-blue-400 transition-colors dark:border-gray-600 hover:border-blue-400 hover:dark:border-blue-400">
          {post && post.category}
        </button>
      </Link>
      <img
        src={post && post.image}
        alt={post && post.title}
        className="mt-10 p-3 max-h-[500px] w-full object-contain rounded-lg shadow-lg"
      />
      <div className="flex justify-between p-3 border-b border-slate-500 mx-auto w-full max-w-2xl text-xs">
        <span>{post && new Date(post.createdAt).toLocaleDateString()}</span>
        <span className="italic">
          {post && (post.content.length / 1000).toFixed(0)} mins read
        </span>
      </div>
      <div
        className="p-6 max-w-5xl mt-10 rounded-xl mx-auto w-full post-content dark:bg-gray-800 text-gray-800 dark:text-gray-200 leading-relaxed"
        dangerouslySetInnerHTML={{ __html: post && post.content }}
      ></div>
      <div className="max-w-6xl mx-auto w-full my-6">
        <CallToAction />
      </div>
      <CommentSection postId={post._id} />
      <div className="flex flex-col justify-center items-center mb-5">
        <h1 className="text-lg mt-5">Recent articles</h1>
        <div className="flex flex-wrap mt-5 gap-5 justify-center">
          {recentPosts &&
            recentPosts.map((post) => <PostCard key={post._id} post={post} />)}
        </div>
      </div>
    </main>
  );
};

export default PostPage;
