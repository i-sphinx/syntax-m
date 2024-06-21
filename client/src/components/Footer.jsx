import React from "react";

function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 border-t-2 border-gray-700 border-solid py-8 text-lg font-medium dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 sm:text-base">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <span>{new Date().getFullYear()} &copy; All Right Reserved</span>
          <div className="flex items-center">
            Built With{" "}
            <span className="text-blue-600 dark:text-blue-200 text-2xl px-1">
              &#9825;
            </span>{" "}
            By &nbsp; Prince
          </div>
          <a
            href="mailto:sphinxatlinux@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 dark:text-blue-200 hover:underline"
          >
            Say Hello
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
