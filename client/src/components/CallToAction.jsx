export default function CallToAction() {
  return (
    <div className="flex-row sm:flex border-dashed border-2 p-2 dark:border-teal-200 rounded-lg m-5">
      <div className="flex-col m-4 p-4 text-center self-center">
        <h2 className="text-2xl font-bold mb-2 capitalize dark:text-gray-300">
          Want to learn more about cool photos?
        </h2>
        <p>Check out these images on Google.</p>

        <a
          href="#"
          className="block bg-yellow-500 text-white rounded-lg p-2 max-w-full mx-auto my-5 text-center"
          target="_blank"
          rel="noopener noreferrer"
        >
          GET IT NOW!
        </a>
      </div>

      <div className="p-7 rounded-lg border dark:border-teal-200">
        <img
          src="https://png.pngtree.com/thumb_back/fh260/background/20230720/pngtree-blue-and-purple-neon-star-3d-art-background-with-a-cool-image_3705286.jpg"
          alt="image"
          className="w-full rounded-lg"
        />
      </div>
    </div>
  );
}
