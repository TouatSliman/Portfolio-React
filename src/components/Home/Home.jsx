import { FaFacebook, FaEye } from "react-icons/fa";
import {
  AiFillInstagram,
  AiFillGithub,
  AiFillLinkedin,
  AiOutlineFundProjectionScreen,
} from "react-icons/ai";
import { GoDownload } from "react-icons/go";
import { LuBadgeHelp } from "react-icons/lu";
import { Link } from "react-router-dom";
import Type from "./Type";
import MouseHighlight from "../MouseHighlight";
import grid from "../../Assets/grid.png";
import stackBackground from "../../Assets/stackBackground.png";
import cStudent from "../../Assets/cstudent.png";

function Home() {
  return (
    <section className="relative flex flex-col lg:flex-row justify-between items-center bg-[#0F172A] w-full min-h-screen overflow-hidden">
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

      {/* Left Side Content */}
      <div className="flex flex-col justify-start items-start text-slate-200 text-left pt-[15vh] md:pt-[20vh] px-6 md:pl-[5vw] md:h-[100vh] w-full lg:w-[30rem]  z-20">
        <Type />
        <h2 className="text-4xl md:text-[3.2rem] font-bold tracking-tight -tracking-[3px]">
          Sliman Touat
        </h2>
        <h3 className="text-base mt-1 text-lg text-slate-300">
          Full Stack Developer
        </h3>
        <p className="pt-4 max-w-xl text-sm leading-6 text-slate-400">
          Building fast, scalable web apps with modern technologies.
        </p>
        <hr className="w-full my-4 border-slate-500" />

        {/* Social Icons */}
        <div className="text-2xl flex gap-6 mt-4 mx-auto ">
          <a href="#" aria-label="Facebook">
            <FaFacebook className="text-slate-400 hover:text-slate-300 transition duration-200" />
          </a>
          <a href="#" aria-label="LinkedIn">
            <AiFillLinkedin className="text-slate-400 hover:text-slate-300 transition duration-200" />
          </a>
          <a href="#" aria-label="GitHub">
            <AiFillGithub className="text-slate-400 hover:text-slate-300 transition duration-200" />
          </a>
          <a href="#" aria-label="Instagram">
            <AiFillInstagram className="text-slate-400 hover:text-slate-300 transition duration-200" />
          </a>
        </div>
      </div>

      {/* Right Side Image & Background */}
      <div
        className="z-10 w-full lg:w-1/2 h-full lg:h-screen flex justify-center items-end bg-no-repeat bg-center bg-contain mt-10 lg:mt-0"
        style={{ backgroundImage: `url(${stackBackground})` }}
      >
        <img
          src={cStudent}
          alt="home pic"
          className="max-w-[70%] md:max-w-[60%] mx-auto z-20"
        />
      </div>

      {/* Button Group (at bottom on large, below content on small) */}
      <div className="w-full lg:w-[30rem] lg:h-[80vh] px-6 lg:px-0 mt-10 mb-10 lg:mt-[5vh] lg:mb-0 flex  sm:flex-row justify-center sm:justify-evenly items-start gap-6 z-20">
        <Link
          to="/about"
          className="w-12 h-12 bg-slate-800/50 shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] backdrop-blur-sm rounded-full flex justify-center items-center hover:bg-slate-700 transition"
        >
          <LuBadgeHelp className="text-xl text-slate-300" />
        </Link>
        <Link
          to="/projects"
          className="w-12 h-12 bg-slate-800/50 shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] backdrop-blur-sm rounded-full flex justify-center items-center hover:bg-slate-700 transition"
        >
          <AiOutlineFundProjectionScreen className="text-xl text-slate-300" />
        </Link>
        <Link
          to="/resume"
          className="px-4 no-underline py-2 w-auto sm:w-42 h-12 bg-slate-800/50 shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] backdrop-blur-sm rounded-full flex justify-between items-center gap-4 hover:bg-slate-700 transition"
        >
          <span className="flex items-center text-slate-300">
            <FaEye className="mr-1" />
            <i className="text-xs">Resume</i>
          </span>
          <GoDownload className="text-slate-300 w-full" />
        </Link>
      </div>
    </section>
  );
}

export default Home;
