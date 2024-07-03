import React from "react";

export default function CallToAction({
  title,
  description,
  buttonText,
  buttonLink,
  imageUrl,
}) {
  return (
    <div className="flex-row sm:flex border-dashed border-2 p-2 border-gray-200 dark:border-teal-200 rounded-lg m-5">
      <div className="flex-col m-4 p-4 text-center self-center">
        <h2 className="text-2xl font-bold mb-2 capitalize text-gray-900 dark:text-gray-300">
          {title}
        </h2>
        <p className="text-gray-700 dark:text-gray-400">{description}</p>

        <a
          href={buttonLink}
          className="block bg-yellow-500 text-white rounded-lg p-2 max-w-full mx-auto my-5 text-center hover:bg-yellow-600 dark:bg-yellow-600 dark:hover:bg-yellow-700"
          target="_blank"
          rel="noopener noreferrer"
        >
          {buttonText}
        </a>
      </div>

      <div className="p-7 rounded-lg border border-gray-200 dark:border-teal-200">
        <img src={imageUrl} alt="image" className="w-full rounded-lg" />
      </div>
    </div>
  );
}
