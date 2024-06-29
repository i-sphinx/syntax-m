import React from "react";

export const CallToAction = () => {
  return (
    <div className="flex-row sm:flex border-dashed border-2 p-2 dark:border-teal-200 rounded-lg m-5">
      <div className="flex-col m-4 p-4 text-center self-center">
        <h2 className="text-2xl font-bold mb-2 capitalize dark:text-gray-300">
          Want to learn more about cool photos ?
        </h2>
        <p>
          check out these images on googl check out these images on check out
          these images on check out these images on e
        </p>

        <button className="bg-yellow-500 text-white rounded-lg p-2 max-w-full mx-auto my-5">
          <a href="#" target={"_blank"} rel="noopener noreferrer">
            GET IT Now!
          </a>
        </button>
      </div>

      <div className="p-7 rounded-lg border dark:border-teal-200">
        <img
          src="https://png.pngtree.com/thumb_back/fh260/background/20230720/pngtree-blue-and-purple-neon-star-3d-art-background-with-a-cool-image_3705286.jpg"
          alt="image"
        />
      </div>
    </div>
  );
};
