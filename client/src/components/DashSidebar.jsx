import { Link, useLocation } from "react-router-dom";
import { useSelector } from "react-redux";

const DashSidebar = () => {
  const { currentUser } = useSelector((state) => state.user);
  const location = useLocation();
  const activeTab = location.search.split("=")[1];

  return (
    <aside className="top-16 bottom-16 left-0 z-40 w-full md:w-64 h-full border-b-2 md:border-r-2 border-gray-200 dark:border-gray-700 bg-light-background dark:bg-dark-background text-light-text dark:text-dark-text">
      <div className="h-full px-4 py-6 overflow-y-auto">
        <ul className="space-y-2 font-medium">
          <li>
            <Link
              to="/dashboard?tab=profile"
              className={`flex items-center p-3 mb-2 rounded-lg transition duration-200 ease-in-out ${
                activeTab === "profile"
                  ? "bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-200"
                  : "text-gray-900 dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
              }`}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                className="bi bi-person"
                viewBox="0 0 16 16"
              >
                <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6m2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0m4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4m-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10s-3.516.68-4.168 1.332c-.678.678-.83 1.418-.832 1.664z" />
              </svg>
              <span className="ml-4">Profile</span>
              <span className="ml-auto inline-flex items-center justify-center px-2 py-0.5 text-sm font-medium text-gray-800 bg-gray-100 rounded-full dark:bg-gray-700 dark:text-gray-300">
                {currentUser.isAdmin ? "Admin" : "User"}
              </span>
            </Link>
          </li>
          {currentUser.isAdmin && (
            <li>
              <Link
                to="/dashboard?tab=posts"
                className={`flex items-center p-3 my-2 rounded-lg transition duration-200 ease-in-out ${
                  activeTab === "posts"
                    ? "bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-200"
                    : "text-gray-900 dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
                }`}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  className="bi bi-card-text"
                  viewBox="0 0 16 16"
                >
                  <path d="M14.5 3a.5.5 0 0 1 .5.5v9a.5.5 0 0 1-.5.5h-13a.5.5 0 0 1-.5-.5v-9a.5.5 0 0 1 .5-.5zm-13-1A1.5 1.5 0 0 0 0 3.5v9A1.5 1.5 0 0 0 1.5 14h13a1.5 1.5 0 0 0 1.5-1.5v-9A1.5 1.5 0 0 0 14.5 2z" />
                  <path d="M3 5.5a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5M3 8a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9A.5.5 0 0 1 3 8m0 2.5a.5.5 0 0 1 .5-.5h6a.5.5 0 0 1 0 1h-6a.5.5 0 0 1-.5-.5" />
                </svg>
                <span className="ml-4">Posts</span>
              </Link>
            </li>
          )}
          {currentUser.isAdmin && (
            <>
              <li>
                <Link
                  to="/dashboard?tab=users"
                  className={`flex items-center p-3 my-2 rounded-lg transition duration-200 ease-in-out ${
                    activeTab === "users"
                      ? "bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-200"
                      : "text-gray-900 dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
                  }`}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    className="bi bi-people"
                    viewBox="0 0 16 16"
                  >
                    <path d="M15 14s1 0 1-1-1-4-5-4-5 3-5 4 1 1 1 1zm-7.978-1L7 12.996c.001-.264.167-1.03.76-1.72C8.312 10.629 9.282 10 11 10c1.717 0 2.687.63 3.24 1.276.593.69.758 1.457.76 1.72l-.008.002-.014.002zM11 7a2 2 0 1 0 0-4 2 2 0 0 0 0 4m3-2a3 3 0 1 1-6 0 3 3 0 0 1 6 0M6.936 9.28a6 6 0 0 0-1.23-.247A7 7 0 0 0 5 9c-4 0-5 3-5 4q0 1 1 1h4.216A2.24 2.24 0 0 1 5 13c0-1.01.377-2.042 1.09-2.904.243-.294.526-.569.846-.816M4.92 10A5.5 5.5 0 0 0 4 13H1c0-.26.164-1.03.76-1.724.545-.636 1.492-1.256 3.16-1.275ZM1.5 5.5a3 3 0 1 1 6 0 3 3 0 0 1-6 0m3-2a2 2 0 1 0 0 4 2 2 0 0 0 0-4" />
                  </svg>
                  <span className="ml-4">Users</span>
                </Link>
              </li>
              <li>
                <Link
                  to="/dashboard?tab=comments"
                  className={`flex items-center p-3 my-2 rounded-lg transition duration-200 ease-in-out ${
                    activeTab === "comments"
                      ? "bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-200"
                      : "text-gray-900 dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
                  }`}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    className="bi bi-chat-right-dots"
                    viewBox="0 0 16 16"
                  >
                    <path d="M2 1a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h9.586a2 2 0 0 1 1.414.586l2 2V2a1 1 0 0 0-1-1zm12-1a2 2 0 0 1 2 2v12.793a.5.5 0 0 1-.854.353l-2.853-2.853a1 1 0 0 0-.707-.293H2a2 2 0 0 1-2-2V2a2 2 0 0 1 2-2z" />
                    <path d="M5 6a1 1 0 1 1-2 0 1 1 0 0 1 2 0m4 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0m4 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0" />
                  </svg>
                  <span className="ml-4">Comments</span>
                </Link>
              </li>
            </>
          )}
        </ul>
      </div>
    </aside>
  );
};

export default DashSidebar;


