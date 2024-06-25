import React, { useState, useRef } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

const CreatePost = () => {
  const [imagePreview, setImagePreview] = useState(null);
  const quillRef = useRef(null); // Create a ref for ReactQuill

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImagePreview(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="bg-light-background dark:bg-gray-900 text-light-text dark:text-dark-text">
      <div className="p-6 max-w-3xl mx-auto min-h-screen flex flex-col justify-center">
        <h1 className="text-center text-4xl my-10 font-bold text-blue-600 dark:text-blue-400">
          Create Post
        </h1>
        <form className="flex flex-col gap-6 bg-white dark:bg-gray-800 p-8 rounded-lg shadow-lg">
          <div className="flex flex-col gap-4">
            <input
              type="text"
              placeholder="Title"
              required
              id="title"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-lg rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-3 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            />
          </div>
          <div className="flex flex-col gap-4 items-center">
            {imagePreview ? (
              <div className="relative">
                <img
                  src={imagePreview}
                  alt="Preview"
                  className="h-24 w-24 object-cover rounded-full border border-gray-300"
                />
                <button
                  type="button"
                  className="absolute top-0 right-0 bg-red-600 text-white p-1 rounded-full"
                  onClick={() => setImagePreview(null)}
                >
                  ✕
                </button>
              </div>
            ) : (
              <div className="flex items-center justify-center border-4 border-blue-400 border-dotted p-4 rounded-lg bg-gray-100 dark:bg-gray-700">
                <input
                  id="file-input"
                  className="hidden"
                  type="file"
                  accept="image/*"
                  onChange={handleImageChange}
                />
                <label
                  htmlFor="file-input"
                  className="cursor-pointer text-blue-600 dark:text-blue-400 hover:underline"
                >
                  Choose an image to upload
                </label>
              </div>
            )}
          </div>
          <ReactQuill
            ref={quillRef} // Attach ref to ReactQuill
            theme="snow"
            placeholder="Write something..."
            className="h-72 mb-12"
          />
          <button
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 rounded-lg focus:outline-none focus:ring-4 focus:ring-blue-300 dark:bg-blue-500 dark:hover:bg-blue-600 dark:focus:ring-blue-800"
          >
            Publish
          </button>
        </form>
      </div>
    </div>
  );
};

export default CreatePost;
