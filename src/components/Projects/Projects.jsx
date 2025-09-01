import React from "react";
import Particle from "../Particle";
import ProjectCard from "./ProjectCards";

import dzb from "../../Assets/Projects/dzb.png";
import oe from "../../Assets/Projects/oe.png";
import lawdz from "../../Assets/Projects/lawdz.png";
import { FaArrowLeft } from "react-icons/fa6";
import { Link } from "react-router-dom";
import grid from "../../Assets/grid.png";

function Projects() {
  return (
    <section className="relative bg-slate-900 text-slate-100 py-20 w-full">
      {/* Grid Background Layer */}
      <div
        className="absolute top-0 left-0 w-full h-full opacity-40 z-10"
        style={{
          backgroundImage: `url(${grid})`,
          backgroundSize: "contain",
          backgroundRepeat: "repeat-y",
          backgroundPosition: "center",
        }}
      ></div>
      <Particle />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <Link
          to="/"
          className="group inline-flex text-teal-300 items-center text-sm mb-4 transition-all no-underline w-40 text-right"
        >
          <FaArrowLeft className="mr-1 transform transition-transform duration-300 group-hover:-translate-x-1" />
          Sliman Touat
        </Link>

        <h1 className="text-3xl sm:text-4xl font-bold text-left mb-4">
          My Recent <span className="text-teal-300">Works</span>
        </h1>
        <p className="text-left text-slate-300 mb-12">
          Here are a few projects I've worked on recently.
        </p>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 justify-items-center">
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
            imgPath={lawdz}
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
