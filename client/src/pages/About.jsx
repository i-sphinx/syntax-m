export default function About() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 dark:bg-gray-900">
      <div className="max-w-2xl mx-auto p-6 bg-white dark:bg-gray-800 rounded-lg shadow-md">
        <img
          src="your-avatar-url.jpg"
          alt="Your Avatar"
          className="w-32 h-32 mx-auto rounded-full shadow-md mb-6"
        />
        <h1 className="text-4xl font-bold text-center my-7 text-gray-800 dark:text-gray-200">
          Who am I?
        </h1>
        <div className="text-lg text-gray-600 dark:text-gray-400 flex flex-col gap-6 leading-relaxed">
          <p>
            Hey there, I'm Prince! The world of games and web development has
            always captivated me. There's something magical about creating
            interactive experiences, whether it's building a sprawling game
            world or crafting a website that connects with users. I'm a curious
            and outgoing person who loves tackling challenges and learning new
            things.
          </p>
          <p>
            I might not be a pro yet, but I'm always eager to dive headfirst
            into new projects, whether it's mastering a new coding language or
            trying a crazy game development idea.
          </p>
          <h3 className="font-semibold text-center text-gray-800 dark:text-gray-200 mt-5 text-2xl">
            Always Levelling Up
          </h3>
          <p>
            I'm a self-proclaimed coding and game design apprentice! Right now,
            I'm focusing on learning the fundamentals of web development and
            game design. I enjoy the problem-solving aspect of coding and the
            creative freedom of designing engaging experiences. This journey of
            learning is what fuels my passion, and I'm excited to see what I can
            create in the future!
          </p>
          <div className="flex justify-center gap-4 mt-6">
            <svg
              className="w-8 h-8 text-gray-800 dark:text-gray-200"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M5 6h14a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2zm0-2a4 4 0 0 0-4 4v8a4 4 0 0 0 4 4h14a4 4 0 0 0 4-4V8a4 4 0 0 0-4-4H5zm11 3v2H8V7h8zm-3 3H8v2h5v-2zm0 3H8v2h5v-2zM5 8h1v8H5V8zm12 0h1v8h-1V8z"></path>
            </svg>
            <svg
              className="w-8 h-8 text-gray-800 dark:text-gray-200"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M8.292 6.293a1 1 0 0 1 1.416 1.414l-4 4a1 1 0 0 1 0 1.414l4 4a1 1 0 0 1-1.416 1.414l-4-4a3 3 0 0 1 0-4.242l4-4zm7.416 1.414a1 1 0 0 1 1.416-1.414l4 4a3 3 0 0 1 0 4.242l-4 4a1 1 0 0 1-1.416-1.414l4-4a1 1 0 0 1 0-1.414l-4-4zm-6.536 8.586a1 1 0 1 0 1.336 1.492l8-7a1 1 0 0 0-1.336-1.492l-8 7z"></path>
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}
