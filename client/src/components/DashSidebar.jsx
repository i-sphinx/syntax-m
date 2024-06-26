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
                className="w-6 h-6 text-gray-600 dark:text-gray-400"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                {/* Profile Icon */}
                <path d="M12 2a7 7 0 0 0 0 14 7 7 0 0 0 0-14zm0 12a5 5 0 1 1 0-10 5 5 0 0 1 0 10zm0 2c-4.418 0-8 1.79-8 4v2h16v-2c0-2.21-3.582-4-8-4z" />
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
                  className="w-6 h-6 text-gray-600 dark:text-gray-400"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  {/* Posts Icon */}
                  <path d="M20 2H4c-1.103 0-2 .897-2 2v16c0 1.103.897 2 2 2h16c1.103 0 2-.897 2-2V4c0-1.103-.897-2-2-2zM4 4h16v2H4V4zm0 16v-2h16v2H4zm16-6H4v-2h16v2z" />
                </svg>
                <span className="ml-4">Posts</span>
              </Link>
            </li>
          )}
        </ul>
      </div>
    </aside>
  );
};

export default DashSidebar;
  