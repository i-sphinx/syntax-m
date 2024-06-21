import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    // Load the dark mode state from localStorage
    const darkMode = localStorage.getItem("darkMode") === "true";
    setIsDarkMode(darkMode);
    if (darkMode) {
      document.documentElement.classList.add("dark");
    }
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const toggleDarkMode = () => {
    const darkMode = !isDarkMode;
    setIsDarkMode(darkMode);
    localStorage.setItem("darkMode", darkMode);
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  };

  return (
    <nav className="border-b-2 flex justify-between p-4 w-full items-center mx-auto bg-light-background dark:bg-dark-background text-light-text dark:text-dark-text">
      <div className="flex items-center">
        <Link
          to="/"
          className="text-xs sm:text-xl font-semibold shadow-blue-400 shadow-2xl"
        >
          <span className="px-4 sm:py-1 bg-gradient-to-br from-sky-300 via-sky-400 to-blue-500 rounded-br-full rounded-tl-full text-xl sm:text-3xl uppercase">
            Syntax
          </span>
          <span className="underline p-1">Sunrise</span>
        </Link>
      </div>

      {/* Search bar */}
      <div className="hidden lg:flex flex-1 justify-center">
        <form className="flex max-w-sm w-full">
          <input
            type="text"
            id="simple-search"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full px-6 py-2 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Search..."
            required
          />
          <button
            type="submit"
            className="p-2 flex items-center justify-center text-white bg-gradient-to-r from-blue-400 via-blue-500 to-blue-600 rounded-lg border border-blue-500 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-500 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            <svg
              className="w-4 h-4"
              aria-hidden="true"
              fill="none"
              viewBox="0 0 20 20"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
              />
            </svg>
          </button>
        </form>
      </div>

      {/* Menu and Hamburger button */}
      <div className="flex items-center space-x-3">
        {/* Hamburger menu button */}
        <button
          onClick={toggleMenu}
          type="button"
          className="inline-flex items-center md:hidden w-10 h-10 justify-center text-sm text-gray-500 rounded-lg hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
          aria-controls="navbar-cta"
          aria-expanded={isMenuOpen}
        >
          <svg
            className="w-6 h-6"
            aria-hidden="true"
            fill="none"
            viewBox="0 0 17 14"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M1 1h15M1 7h15M1 13h15"
            />
          </svg>
        </button>
      </div>

      {/* Floating center-aligned mobile menu */}
      {isMenuOpen && (
        <div className="fixed text-center inset-0 bg-gray-800 bg-opacity-75 flex items-center justify-center z-50 md:hidden">
          <div className="bg-white/75 dark:bg-gray-700/75 rounded-xl shadow-lg p-6 w-3/4 max-w-md mx-auto">
            <ul className="flex flex-col space-y-4">
              <li>
                <Link
                  to="/"
                  className="block text-gray-900 dark:text-white rounded hover:bg-gray-100 dark:hover:bg-gray-700 px-4 py-2"
                  onClick={toggleMenu}
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/About"
                  className="block text-gray-900 dark:text-white rounded hover:bg-gray-100 dark:hover:bg-gray-700 px-4 py-2"
                  onClick={toggleMenu}
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  to="/Project"
                  className="block text-gray-900 dark:text-white rounded hover:bg-gray-100 dark:hover:bg-gray-700 px-4 py-2"
                  onClick={toggleMenu}
                >
                  Projects
                </Link>
              </li>
              <li>
                <Link
                  to="/Dashboard"
                  className="block text-gray-900 dark:text-white rounded hover:bg-gray-100 dark:hover:bg-gray-700 px-4 py-2"
                  onClick={toggleMenu}
                >
                  Dashboard
                </Link>
              </li>

              <div className="flex justify-between p-10">
                <button
                  type="button"
                  className="text-white bg-light-primary dark:bg-dark-primary hover:bg-light-secondary dark:hover:bg-dark-secondary focus:ring-4 focus:outline-none focus:ring-light-secondary dark:focus:ring-dark-secondary font-medium rounded-lg text-xs md:text-sm px-4 py-2"
                >
                  Sign In
                </button>
                <button
                  onClick={toggleDarkMode}
                  className="block md:p-0 rounded-full text-gray-900 hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                >
                  {isDarkMode ? (
                    <svg
                      className="w-6 h-6"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M12 3v1m0 16v1m8.657-4.657l-.707.707m-14.85 0l-.707-.707M21 12h-1m-16 0H3m2.464-7.536l-.707.707m0 14.85l-.707-.707M16.95 7.05l-.707.707m-9.192 9.192l-.707-.707M12 5a7 7 0 1 1 0 14 7 7 0 0 1 0-14z"
                      />
                    </svg>
                  ) : (
                    <svg
                      className="w-8 h-6"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M12 3.25v.085a9.75 9.75 0 0 0 0 17.33v.085A9.75 9.75 0 1 1 12 3.25z"
                      />
                    </svg>
                  )}
                </button>
              </div>
            </ul>
            <button
              type="button"
              className="mt-6 w-full text-white bg-red-500 hover:bg-red-600 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm px-4 py-2"
              onClick={toggleMenu}
            >
              Close
            </button>
          </div>
        </div>
      )}

      {/* Default non-mobile menu */}
      <div className="hidden md:flex items-center justify-between w-full md:w-auto md:order-1">
        <ul className="flex space-x-4 text-lg font-medium">
          <li>
            <Link
              to="/"
              className="block md:p-0 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:dark:text-blue-500"
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to="/About"
              className="block md:p-0 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
            >
              About
            </Link>
          </li>
          <li>
            <Link
              to="/Project"
              className="block md:p-0 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
            >
              Projects
            </Link>
          </li>
          <li>
            <Link
              to="/Dashboard"
              className="block md:p-0 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
            >
              Dashboard
            </Link>
          </li>
          <li>
            <button
              onClick={toggleDarkMode}
              className="block md:p-0 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
            >
              {isDarkMode ? (
                <svg
                  className="w-8 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M12 3v1m0 16v1m8.657-4.657l-.707.707m-14.85 0l-.707-.707M21 12h-1m-16 0H3m2.464-7.536l-.707.707m0 14.85l-.707-.707M16.95 7.05l-.707.707m-9.192 9.192l-.707-.707M12 5a7 7 0 1 1 0 14 7 7 0 0 1 0-14z"
                  />
                </svg>
              ) : (
                <svg
                  className="w-8 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M12 3.25v.085a9.75 9.75 0 0 0 0 17.33v.085A9.75 9.75 0 1 1 12 3.25z"
                  />
                </svg>
              )}
            </button>
          </li>
          <button
            type="button"
            className="text-white bg-light-primary dark:bg-dark-primary hover:bg-light-secondary dark:hover:bg-dark-secondary focus:ring-4 focus:outline-none focus:ring-light-secondary dark:focus:ring-dark-secondary font-medium rounded-lg text-xs md:text-sm px-4 py-2"
          >
            Sign In
          </button>
        </ul>
      </div>
    </nav>
  );
};

export default Header;