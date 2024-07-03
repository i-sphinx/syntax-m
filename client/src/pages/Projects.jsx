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

      <div className="min-h-screen max-w-5xl mx-auto flex justify-center items-center flex-col gap-6 p-3 mt-4">
        <h1 className="text-3xl font-bold uppercase underline dark:text-gray-300">
          Projects
        </h1>
        <p className="text-md text-gray-500 mb-20">
          Learning to Code: Web Apps and Unity Games
        </p>

        {/* add your projects here... */}
        <CallToAction
          title="Made a full stack mern Project with my personal blogs in it!"
          description="In this project i have used full stack mern with firebase auth and fully functional database setup"
          buttonText="EXPLORE"
          buttonLink="https://syntax-sunrise.onrender.com/"
          imageUrl="/images/projects/webpreview.png"
        />

        <CallToAction
          title="Want to learn more about cool photos? demo"
          description="Check out these images on Google."
          buttonText="GET IT NOW!"
          buttonLink="https://www.google.com"
          imageUrl="https://png.pngtree.com/thumb_back/fh260/background/20230720/pngtree-blue-and-purple-neon-star-3d-art-background-with-a-cool-image_3705286.jpg"
        />
      </div>
    </div>
  );
}
