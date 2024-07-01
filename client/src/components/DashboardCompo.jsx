import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

export default function DashboardComp() {
  const [users, setUsers] = useState([]);
  const [comments, setComments] = useState([]);
  const [posts, setPosts] = useState([]);
  const [totalUsers, setTotalUsers] = useState(0);
  const [totalPosts, setTotalPosts] = useState(0);
  const [totalComments, setTotalComments] = useState(0);
  const [lastMonthUsers, setLastMonthUsers] = useState(0);
  const [lastMonthPosts, setLastMonthPosts] = useState(0);
  const [lastMonthComments, setLastMonthComments] = useState(0);
  const { currentUser } = useSelector((state) => state.user);

  useEffect(() => {
    const fetchData = async (url, setState, setTotal, setLastMonth) => {
      try {
        const res = await fetch(url);
        const data = await res.json();
        if (res.ok) {
          setState(data.users || data.posts || data.comments);
          setTotal(data.totalUsers || data.totalPosts || data.totalComments);
          setLastMonth(
            data.lastMonthUsers || data.lastMonthPosts || data.lastMonthComments
          );
        }
      } catch (error) {
        console.log(error.message);
      }
    };

    if (currentUser.isAdmin) {
      fetchData(
        "/api/user/getusers?limit=5",
        setUsers,
        setTotalUsers,
        setLastMonthUsers
      );
      fetchData(
        "/api/post/getposts?limit=5",
        setPosts,
        setTotalPosts,
        setLastMonthPosts
      );
      fetchData(
        "/api/comment/getcomments?limit=5",
        setComments,
        setTotalComments,
        setLastMonthComments
      );
    }
  }, [currentUser]);

  const DashboardCard = ({ title, total, lastMonth, icon }) => (
    <div className="flex flex-col p-3 dark:bg-slate-800 gap-4 md:w-80 w-full rounded-md shadow-md">
      <div className="flex justify-between">
        <div>
          <h3 className="text-gray-500 text-md uppercase">{title}</h3>
          <p className="text-2xl dark:text-white">{total}</p>
        </div>
        <div className="bg-blue-500 rounded-full text-white p-3 shadow-lg w-16 h-16">
          {icon}
        </div>
      </div>
      <div className="flex gap-2 text-sm">
        <div className="text-green-500 flex items-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="2"
            stroke="currentColor"
            className="w-5 h-5"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 8v8m-4-4h8"
            />
          </svg>
          <span className="ml-1">{lastMonth}</span>
        </div>
        <span className="text-gray-500">Last Month</span>
      </div>
    </div>
  );

  const UserTable = ({ users }) => (
    <div className="flex flex-col w-full max-w-xs shadow-md p-2 rounded-md dark:bg-gray-800">
      <div className="flex justify-between p-3 text-sm font-semibold">
        <h1 className="text-center p-2 dark:text-white">Recent Users</h1>
        <button className="text-white bg-light-primary font-medium dark:bg-dark-primary hover:bg-light-secondary dark:hover:bg-dark-secondary focus:ring-4 focus:outline-none focus:ring-light-secondary dark:focus:ring-dark-secondary rounded-lg text-sm px-5 py-2.5 text-center">
          <Link to={"/dashboard?tab=users"}>See all</Link>
        </button>
      </div>
      <div className="overflow-x-auto w-full shadow-md sm:rounded-lg">
        <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" className="px-6 py-3">
                User Image
              </th>
              <th scope="col" className="px-6 py-3">
                Username
              </th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => (
              <tr
                key={user._id}
                className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600"
              >
                <td className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                  <img
                    src={user.profilePicture}
                    alt="user"
                    className="w-10 h-10 rounded-full bg-gray-500"
                  />
                </td>
                <td className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                  {user.username}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );

  const CommentTable = ({ comments }) => (
    <div className="flex flex-col w-full max-w-2xl shadow-md p-2 rounded-md dark:bg-gray-800">
      <div className="flex justify-between p-3 text-sm font-semibold">
        <h1 className="text-center p-2 dark:text-white">Recent Comments</h1>
        <button className="text-white bg-light-primary font-medium dark:bg-dark-primary hover:bg-light-secondary dark:hover:bg-dark-secondary focus:ring-4 focus:outline-none focus:ring-light-secondary dark:focus:ring-dark-secondary rounded-lg text-sm px-5 py-2.5 text-center disabled:opacity-50">
          <Link to={"/dashboard?tab=comments"}>See all</Link>
        </button>
      </div>
      <div className="overflow-x-auto w-full shadow-md sm:rounded-lg">
        <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" className="px-6 py-3">
                Comment Content
              </th>
              <th scope="col" className="px-4 py-3">
                Likes
              </th>
            </tr>
          </thead>
          <tbody>
            {comments.map((comment) => (
              <tr
                key={comment._id}
                className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600"
              >
                <td className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white max-w-xl truncate">
                  <p className="line-clamp-2">{comment.content}</p>
                </td>
                <td className="px-4 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                  {comment.numberOfLikes}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );

  const PostTable = ({ posts }) => (
    <div className="flex flex-col w-full max-w-5xl shadow-md p-2 rounded-md dark:bg-gray-800">
      <div className="flex justify-between p-3 text-sm font-semibold">
        <h1 className="text-center p-2 dark:text-white">Recent Posts</h1>
        <button className="text-white bg-light-primary font-medium dark:bg-dark-primary hover:bg-light-secondary dark:hover:bg-dark-secondary focus:ring-4 focus:outline-none focus:ring-light-secondary dark:focus:ring-dark-secondary rounded-lg text-sm px-5 py-2.5 text-center disabled:opacity-50">
          <Link to={"/dashboard?tab=posts"}>See all</Link>
        </button>
      </div>
      <div className="overflow-x-auto w-full shadow-md sm:rounded-lg">
        <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" className="px-6 py-3">
                Post Image
              </th>
              <th scope="col" className="px-6 py-3">
                Post Title
              </th>
              <th scope="col" className="px-6 py-3">
                Category
              </th>
            </tr>
          </thead>
          <tbody>
            {posts.map((post) => (
              <tr
                key={post._id}
                className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600"
              >
                <td className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                  <img
                    src={post.image}
                    alt="post"
                    className="w-14 h-10 rounded-md bg-gray-500"
                  />
                </td>
                <td className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white truncate max-w-2xl">
                  {post.title}
                </td>
                <td className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                  {post.category}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );

  return (
    <div className="p-3 md:mx-auto w-full">
      <div className="flex-wrap flex gap-4 justify-center">
        <DashboardCard
          title="Total Users"
          total={totalUsers}
          lastMonth={lastMonthUsers}
          icon={
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              fill="currentColor"
              className="bi bi-people m-2"
              viewBox="0 0 16 16"
            >
              <path d="M15 14s1 0 1-1-1-4-5-4-5 3-5 4 1 1 1 1zm-7.978-1L7 12.996c.001-.264.167-1.03.76-1.72C8.312 10.629 9.282 10 11 10c1.717 0 2.687.63 3.24 1.276.593.69.758 1.457.76 1.72l-.008.002-.014.002zM11 7a2 2 0 1 0 0-4 2 2 0 0 0 0 4m3-2a3 3 0 1 1-6 0 3 3 0 0 1 6 0M6.936 9.28a6 6 0 0 0-1.23-.247A7 7 0 0 0 5 9c-4 0-5 3-5 4q0 1 1 1h4.216A2.24 2.24 0 0 1 5 13c0-1.01.377-2.042 1.09-2.904.243-.294.526-.569.846-.816M4.92 10A5.5 5.5 0 0 0 4 13H1c0-.26.164-1.03.76-1.724.545-.636 1.492-1.256 3.16-1.275ZM1.5 5.5a3 3 0 1 1 6 0 3 3 0 0 1-6 0m3-2a2 2 0 1 0 0 4 2 2 0 0 0 0-4" />
            </svg>
          }
        />
        <DashboardCard
          title="Total Comments"
          total={totalComments}
          lastMonth={lastMonthComments}
          icon={
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              fill="currentColor"
              className="bi bi-chat-right-dots m-2"
              viewBox="0 0 16 16"
            >
              <path d="M2 1a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h9.586a2 2 0 0 1 1.414.586l2 2V2a1 1 0 0 0-1-1zm12-1a2 2 0 0 1 2 2v12.793a.5.5 0 0 1-.854.353l-2.853-2.853a1 1 0 0 0-.707-.293H2a2 2 0 0 1-2-2V2a2 2 0 0 1 2-2z" />
              <path d="M5 6a1 1 0 1 1-2 0 1 1 0 0 1 2 0m4 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0m4 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0" />
            </svg>
          }
        />
        <DashboardCard
          title="Total Posts"
          total={totalPosts}
          lastMonth={lastMonthPosts}
          icon={
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              fill="currentColor"
              className="bi bi-card-text m-2"
              viewBox="0 0 16 16"
            >
              <path d="M14.5 3a.5.5 0 0 1 .5.5v9a.5.5 0 0 1-.5.5h-13a.5.5 0 0 1-.5-.5v-9a.5.5 0 0 1 .5-.5zm-13-1A1.5 1.5 0 0 0 0 3.5v9A1.5 1.5 0 0 0 1.5 14h13a1.5 1.5 0 0 0 1.5-1.5v-9A1.5 1.5 0 0 0 14.5 2z" />
              <path d="M3 5.5a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5M3 8a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9A.5.5 0 0 1 3 8m0 2.5a.5.5 0 0 1 .5-.5h6a.5.5 0 0 1 0 1h-6a.5.5 0 0 1-.5-.5" />
            </svg>
          }
        />
      </div>
      <div className="flex flex-wrap gap-4 py-3 mx-auto max-w-5xl justify-center">
        <UserTable users={users} />
        <CommentTable comments={comments} />
      </div>
      <div className="flex flex-wrap gap-4 py-3 mx-auto justify-center">
        <PostTable posts={posts} />
      </div>
    </div>
  );
}
