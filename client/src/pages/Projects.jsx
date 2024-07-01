import CallToAction from "../components/CallToAction";

export default function Projects() {
  return (
    <div>
      <div className="items-center text-center max-w-5xl mx-auto justify-center mt-2 text-red-300">
        <span>
          These are some demo projects real ones will be added in the future so
          stay stune!
        </span>
      </div>
      {/* remove above all div */}

      <div className="min-h-screen max-w-5xl mx-auto flex justify-center items-center flex-col gap-6 p-3">
        <h1 className="text-3xl font-semibold uppercase underline">Projects</h1>
        <p className="text-md text-gray-500">
          Build fun and engaging projects while learning HTML, CSS, and
          JavaScript!
        </p>
        <CallToAction />
      </div>
    </div>
  );
}
