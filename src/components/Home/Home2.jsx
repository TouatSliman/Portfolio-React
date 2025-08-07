import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar.svg";
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              LET ME <span className="purple"> INTRODUCE </span> MYSELF 🚀
            </h1>
            <p className="home-about-body">
              I’m a software enthusiast who loves to code and create cool stuff.
              With a background in <b className="purple">Computer Science</b>{" "}
              (yep, got the degree), I’ve spent a lot of time playing around
              with <b className="purple">C++, Python,</b> and{" "}
              <b className="purple">JavaScript</b> — and I think I’ve picked up
              a thing or two along the way. 😄
              <br />
              <br />
              I’m super into building new{" "}
              <b className="purple">web technologies</b> and diving into AI.
              Whether it’s using <b className="purple">Node.js, React.js,</b> or{" "}
              <b className="purple">Express.js,</b> I enjoy creating products
              that actually make a difference. I also co-founded an{" "}
              <b className="purple">AI agency, </b>
              where we tackle some interesting problems with machine learning
              and data science.
              <br />
              <br />
              Oh, and if you’re into <b className="purple">
                CTF challenges,
              </b>{" "}
              I’m all in. It’s a great way to flex those{" "}
              <b className="purple">networking</b> and{" "}
              <b className="purple">security</b> skills while having fun. 🕹️
              <br />
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>FIND ME ON</h1>
            <p>
              Feel free to <span className="purple">connect </span>with me
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/touatsliman"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://twitter.com/#"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiOutlineTwitter />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/mustapha-touat/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.instagram.com/toaut.sliman/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiFillInstagram />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
