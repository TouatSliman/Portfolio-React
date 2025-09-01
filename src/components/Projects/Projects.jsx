import Particle from "../Particle";
import ProjectCard from "./ProjectCards";
import { Link } from "react-router-dom";

import dzb from "../../Assets/Projects/dzb.png";
import oe from "../../Assets/Projects/oe.png";
import lawdzImg from "../../Assets/Projects/lawdz.png";
import { FaArrowLeft } from "react-icons/fa6";
import grid from "../../Assets/grid.png";
import MouseHighlight from "../MouseHighlight";

function Projects() {
  return (
    <section className="relative bg-slate-900 text-slate-100 py-20 w-full overflow-hidden">
      <MouseHighlight />
      {/* Grid Background Layer */}
      <div
        className="absolute top-0 left-0 w-full h-full opacity-30 z-10"
        style={{
          backgroundImage: `url(${grid})`,
          backgroundSize: "contain",
          backgroundRepeat: "repeat-y",
          backgroundPosition: "center",
        }}
      ></div>

      <Particle />

      <div className="relative z-20 container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Back Link */}
        <Link
          to="/"
          className="group inline-flex items-center text-sm text-teal-300 mb-6 no-underline transition-all w-fit"
        >
          <FaArrowLeft className="mr-1 transform transition-transform duration-300 group-hover:-translate-x-1" />
          <span className="ml-1">Sliman Touat</span>
        </Link>

        {/* Section Heading */}
        <h1 className="text-3xl sm:text-4xl font-bold mb-2">
          My Recent <span className="text-teal-300">Works</span>
        </h1>
        <p className="text-slate-300 mb-12 text-base sm:text-lg max-w-2xl">
          Here are a few projects I've worked on recently.
        </p>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          <ProjectCard
            imgPath={oe}
            title="Online Education"
            description="Online Education is an application for online education in different fields."
            demoLink="https://touatsliman.github.io/online-education"
            tools={["react", "tailwindcss"]}
          />
          <ProjectCard
            imgPath={dzb}
            title="Dz Best"
            description="Dz Best is an online application for trailers of trending movies on Netflix and more. All trailers are available on YouTube."
            demoLink="https://dzbest-94f5f.web.app"
            tools={["nextjs", "tailwindcss"]}
          />
          <ProjectCard
            imgPath={lawdzImg}
            title="Lawdz"
            description="Lawdz is a web application designed to connect users with legal professionals for consultations and advice."
            demoLink="https://lawdz.onrender.com"
            tools={["react", "tailwindcss", "express", "mongodb", "api"]}
          />
        </div>
      </div>
    </section>
  );
}

export default Projects;
