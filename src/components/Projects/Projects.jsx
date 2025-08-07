import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import dzb from "../../Assets/Projects/dzb.png";
import oe from "../../Assets/Projects/oe.png";
import lawdz from "../../Assets/Projects/lawdz.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md="auto">
            <ProjectCard
              imgPath={oe}
              title="Online Education"
              description="Online Education is an application for online education in different fields."
              demoLink="https://touatsliman.github.io/online-education"
              tools={["react", "tailwindcss"]}
            />
          </Col>
          <Col md="auto">
            <ProjectCard
              imgPath={dzb}
              title="Dz Best"
              description="Dz Best is an online application for trailers of trending movies on Netflix and more. All trailers are available on YouTube."
              demoLink="https://dzbest-94f5f.web.app"
              tools={["nextjs", "tailwindcss"]}
            />
          </Col>
          <Col md="auto">
            <ProjectCard
              imgPath={lawdz}
              title="Lawdz"
              description="Lawdz is a web application designed to connect users with legal professionals for consultations and advice."
              demoLink="https://lawdz.onrender.com"
              tools={["react", "tailwindcss", "express", "mongodb", "api"]}
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
