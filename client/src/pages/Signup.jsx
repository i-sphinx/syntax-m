import { Link } from "react-router-dom";

const Signup = () => {
  return (
    <div className="min-h-screen pt-32 overflow-hidden w-full bg-light-background dark:bg-gray-900 text-light-text dark:text-dark-text">
      <div className="flex flex-col md:flex-row mx-5 sm:max-w-[80%] gap-4 items-center sm:mx-auto">
        <div className="flex-1 ">
          <Link
            to="/"
            className="text-sm sm:text-2xl font-semibold shadow-blue-400 shadow-2xl mx-20 sm:mx-0"
          >
            <span className="px-4 sm:py-1 bg-gradient-to-br from-sky-300 via-sky-400 to-blue-500 rounded-br-full rounded-tl-full text-2xl sm:text-3xl uppercase">
              Syntax
            </span>
            <span className="underline p-1">Sunrise</span>
          </Link>
          <p className="mt-5 p-5">
            Get started with these custom Tailwind CSS form components to gather
            information from your users using input text elements, checkboxes,
            radios, textareas, selects, file uploads, toggle switches, and more.
          </p>
        </div>

        {/* right side ...... */}

        <div className="flex-1 mb-10">
          <form className="sm:max-w-lg mx-auto bg-gray-200 dark:bg-gray-800 text-gray-800 dark:text-gray-200 rounded-2xl p-12">
            <div className="mb-5">
              <label
                
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Username
              </label>
              <input
                type="text"
                id="username"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Username"
                required
              />
            </div>
            <div className="mb-5">
              <label
                
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Password
              </label>
              <input
                type="password"
                id="password"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Password"
                required
              />
            </div>
            <div className="mb-5">
              <label
                
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Email"
                required
              />
            </div>

            <button
              type="submit"
              className="text-white bg-light-primary dark:bg-dark-primary hover:bg-light-secondary dark:hover:bg-dark-secondary focus:ring-4 focus:outline-none focus:ring-light-secondary dark:focus:ring-dark-secondary font-medium rounded-lg text-xs md:text-sm px-4 py-2"
            >
              Sign Up
            </button>
            <div className="mt-5 text-sm">
              <span>Have An Account ? </span>
              <Link to="/Signin" className="text-blue-400">Sign In</Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Signup;
