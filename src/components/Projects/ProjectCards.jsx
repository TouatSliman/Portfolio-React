import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { CgCPlusPlus } from "react-icons/cg";
import { CgWebsite } from "react-icons/cg";
import {
  DiJavascript1,
  DiReact,
  DiNodejs,
  DiMongodb,
  DiPython,
  DiGit,
  DiJava,
} from "react-icons/di";
import {
  SiRedis,
  SiFirebase,
  SiNextdotjs,
  SiSolidity,
  SiPostgresql,
  SiTailwindcss,
} from "react-icons/si";
import { TbBrandGolang } from "react-icons/tb";
import { SiExpress } from "react-icons/si";
import { FaHtml5, FaCss3Alt, FaJsSquare } from "react-icons/fa";
import { DiBootstrap } from "react-icons/di";
import { AiFillApi } from "react-icons/ai";
import { BsGithub } from "react-icons/bs";
import "./ProjectCards.css"; // import custom styles

function ProjectCards({
  imgPath,
  title,
  description,
  demoLink,
  ghLink,
  tools,
}) {
  return (
    <Card className="project-card-view">
      <div className="tools-overlay">
        {tools?.map((tool, index) => (
          <div
            key={index}
            className={`tool-icon ${tool}`}
            style={{ fontSize: "1.25em" }}
          >
            {tool === "cpp" && <CgCPlusPlus />}
            {tool === "html" && <FaHtml5 />}
            {tool === "css" && <FaCss3Alt />}
            {tool === "js" && <FaJsSquare />}
            {tool === "bootstrap" && <DiBootstrap />}
            {tool === "api" && <AiFillApi />}
            {tool === "javascript" && <DiJavascript1 />}
            {tool === "react" && <DiReact />}
            {tool === "nodejs" && <DiNodejs />}
            {tool === "mongodb" && <DiMongodb />}
            {tool === "python" && <DiPython />}
            {tool === "git" && <DiGit />}
            {tool === "java" && <DiJava />}
            {tool === "redis" && <SiRedis />}
            {tool === "nextjs" && <SiNextdotjs />}
            {tool === "solidity" && <SiSolidity />}
            {tool === "postgresql" && <SiPostgresql />}
            {tool === "golang" && <TbBrandGolang />}
            {tool === "express" && <SiExpress />}
            {tool === "tailwindcss" && <SiTailwindcss />}
          </div>
        ))}
      </div>
      <Card.Img
        variant="top"
        src={imgPath}
        alt={title}
        className="card-image"
      />
      <Card.Body>
        <Card.Title className="card-title">{title}</Card.Title>
        <Card.Text className="card-description">{description}</Card.Text>
        {ghLink && (
          <Button variant="outline-light" href={ghLink} target="_blank">
            <BsGithub /> &nbsp; GitHub
          </Button>
        )}
        {demoLink && (
          <Button
            variant="outline-primary"
            href={demoLink}
            target="_blank"
            className="ms-2"
          >
            <CgWebsite /> &nbsp; Demo
          </Button>
        )}
      </Card.Body>
    </Card>
  );
}

export default ProjectCards;
