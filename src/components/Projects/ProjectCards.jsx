import React from "react";
import { CgCPlusPlus } from "react-icons/cg";
import { MdArrowOutward } from "react-icons/md";

import {
  DiJavascript1,
  DiReact,
  DiNodejs,
  DiMongodb,
  DiPython,
  DiGit,
  DiJava,
  DiBootstrap,
} from "react-icons/di";
import {
  SiRedis,
  SiFirebase,
  SiNextdotjs,
  SiSolidity,
  SiPostgresql,
  SiTailwindcss,
  SiExpress,
} from "react-icons/si";
import { FaHtml5, FaCss3Alt, FaJsSquare } from "react-icons/fa";
import { TbBrandGolang } from "react-icons/tb";
import { AiFillApi } from "react-icons/ai";
import { BsGithub } from "react-icons/bs";

function ProjectCard({ imgPath, title, description, demoLink, ghLink, tools }) {
  const renderToolIcon = (tool) => {
    const size = 22;
    const iconProps = {
      size,
      className: "text-teal-300/70 hover:text-teal-300 transition",
    };

    switch (tool) {
      case "cpp":
        return <CgCPlusPlus {...iconProps} />;
      case "html":
        return <FaHtml5 {...iconProps} />;
      case "css":
        return <FaCss3Alt {...iconProps} />;
      case "js":
        return <FaJsSquare {...iconProps} />;
      case "bootstrap":
        return <DiBootstrap {...iconProps} />;
      case "api":
        return <AiFillApi {...iconProps} />;
      case "javascript":
        return <DiJavascript1 {...iconProps} />;
      case "react":
        return <DiReact {...iconProps} />;
      case "nodejs":
        return <DiNodejs {...iconProps} />;
      case "mongodb":
        return <DiMongodb {...iconProps} />;
      case "python":
        return <DiPython {...iconProps} />;
      case "git":
        return <DiGit {...iconProps} />;
      case "java":
        return <DiJava {...iconProps} />;
      case "redis":
        return <SiRedis {...iconProps} />;
      case "firebase":
        return <SiFirebase {...iconProps} />;
      case "nextjs":
        return <SiNextdotjs {...iconProps} />;
      case "solidity":
        return <SiSolidity {...iconProps} />;
      case "postgresql":
        return <SiPostgresql {...iconProps} />;
      case "golang":
        return <TbBrandGolang {...iconProps} />;
      case "express":
        return <SiExpress {...iconProps} />;
      case "tailwindcss":
        return <SiTailwindcss {...iconProps} />;
      default:
        return null;
    }
  };

  return (
    <div className="bg-slate-800/50 rounded-lg overflow-hidden shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] backdrop-blur-sm transition w-full max-w-sm flex flex-col">
      {/* Tools Icons */}
      {tools?.length > 0 && (
        <div className="flex flex-wrap gap-2 p-3 bg-slate-800/50 backdrop-blur-sm">
          {tools.map((tool, index) => (
            <div key={index}>{renderToolIcon(tool)}</div>
          ))}
        </div>
      )}

      {/* Project Image */}
      <img src={imgPath} alt={title} className="w-full h-48 object-cover" />

      {/* Card Body */}
      <div className="p-4 flex flex-col flex-1">
        <h2 className="text-xl font-semibold text-slate-100 mb-2">{title}</h2>
        <p className="text-sm text-slate-300 flex-1">{description}</p>

        {/* Buttons */}
        <div className="mt-4 flex gap-3 flex-wrap">
          {ghLink && (
            <a
              href={ghLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm px-3 py-1.5 border border-slate-400 text-slate-300 hover:bg-slate-700 rounded transition"
            >
              <BsGithub />
              GitHub
            </a>
          )}
          {demoLink && (
            <a
              href={demoLink}
              target="_blank"
              rel="noopener noreferrer"
              className="group no-underline inline-flex items-center gap-2 text-sm px-3 py-1.5 text-teal-300 transition"
            >
              Live Demo
              <MdArrowOutward className="transform transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
            </a>
          )}
        </div>
      </div>
    </div>
  );
}

export default ProjectCard;
