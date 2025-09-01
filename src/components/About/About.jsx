import React from "react";
import Particle from "../Particle";
import Github from "./Github";
import Techstack from "./Techstack";
import Aboutcard from "./AboutCard";
import Toolstack from "./Toolstack";
import laptopImg from "../../Assets/about.png";

function About() {
  return (
    <div className="relative w-full bg-slate-900 text-slate-200 py-12">
      <Particle />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Intro Section */}
        <div className="flex flex-col lg:flex-row items-center lg:items-start gap-8">
          {/* Text */}
          <div className="flex-1">
            <h1 className="text-3xl md:text-4xl font-bold mb-4">
              Know Who <strong className="text-indigo-400">I'M</strong>
            </h1>
            <Aboutcard />
          </div>
          {/* Image */}
          <div className="flex-1 flex justify-center">
            <img
              src={laptopImg}
              alt="about"
              className="w-3/4 sm:w-1/2 lg:w-full max-w-md"
            />
          </div>
        </div>

        {/* Skills Section */}
        <div className="mt-12">
          <h1 className="text-2xl md:text-3xl font-semibold text-center mb-6">
            Professional <strong className="text-indigo-400">Skillset</strong>
          </h1>
          <Techstack />
        </div>

        {/* Tools Section */}
        <div className="mt-12">
          <h1 className="text-2xl md:text-3xl font-semibold text-center mb-6">
            <strong className="text-indigo-400">Tools</strong> I Use
          </h1>
          <Toolstack />
        </div>

        {/* GitHub Section */}
        <div className="mt-12">
          <Github />
        </div>
      </div>
    </div>
  );
}

export default About;
