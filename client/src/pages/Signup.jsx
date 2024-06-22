import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Signup = () => {
  const [formData, setFormData] = useState({});
  const [errorMessage, setErrorMessage] = useState(null); // State for error message
  const [loading, setLoading] = useState(false); // State for loading indicator
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value.trim() });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.username || !formData.password || !formData.email) {
      setErrorMessage("Please fill out all fields");
      return;
    }

    try {
      setLoading(true);
      setErrorMessage(null);
      const res = await fetch("/api/auth/signup", {
        method: "POST",
        headers: { "Content-type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (!res.ok) {
        throw new Error("Signup failed");
      } else if (res.ok) {
        navigate("/Signin");
      }

      const data = await res.json();
      if (data.success === false) {
        return setErrorMessage(data.message);
      }
    } catch (error) {
      setErrorMessage(error.message);
    } finally {
      setLoading(false);
    }
  };

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
          <form
            className="sm:max-w-lg mx-auto bg-gray-200 dark:bg-gray-800 text-gray-800 dark:text-gray-200 rounded-2xl p-12"
            onSubmit={handleSubmit}
          >
            <div className="mb-5">
              <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                Username
              </label>
              <input
                type="text"
                id="username"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Username"
                onChange={handleChange}
              />
            </div>
            <div className="mb-5">
              <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                Password
              </label>
              <input
                type="password"
                id="password"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Password"
                onChange={handleChange}
              />
            </div>
            <div className="mb-5">
              <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                Email
              </label>
              <input
                type="email"
                id="email"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Email"
                onChange={handleChange}
              />
            </div>

            <button
              type="submit"
              className="flex text-white bg-light-primary dark:bg-dark-primary hover:bg-light-secondary dark:hover:bg-dark-secondary focus:ring-4 focus:outline-none focus:ring-light-secondary dark:focus:ring-dark-secondary font-medium rounded-lg text-xs md:text-sm px-4 py-2"
              disabled={loading} // Disable button during loading
            >
              {loading ? (
                <>
                  <div class="flex items-center justify-center w-auto h-auto rounded-lg">
                    <div>
                      <svg
                        aria-hidden="true"
                        class="w-5 h-5 text-gray-200 animate-spin dark:text-gray-100 fill-none dark:border-2 border-2"
                        viewBox="0 0 100 101"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                          fill="currentColor"
                        />
                        <path
                          d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                          fill="currentFill"
                        />
                      </svg>
                    </div>
                    <span class="pl-3">Loading...</span>
                  </div>
                </>
              ) : (
                "Sign Up"
              )}
            </button>
            <div className="mt-5 text-sm">
              <span>Have An Account ? </span>
              <Link to="/Signin" className="text-blue-400">
                Sign In
              </Link>
            </div>

            {errorMessage && (
              <div
                className="p-4 mb-4 mt-4 text-sm text-red-800 rounded-lg bg-red-50 dark:bg-gray-700 dark:text-red-400"
                role="alert"
              >
                {errorMessage}
              </div>
            )}
          </form>
        </div>
      </div>
    </div>
  );
};

export default Signup;
