import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Footer() {
  const year = new Date().getFullYear();

  return (
    <Container fluid className="footer">
      <Row className="justify-content-center text-center">
        <Col md="4" className="footer-copywright">
          <p>☕ Made with coffee</p>
        </Col>
        <Col md="4" className="footer-copywright">
          <p>© {year} SB</p>
        </Col>
        <Col md="4" className="footer-social">
          <ul className="footer-icons">
            <li className="social-icons">
              <a
                href="https://github.com/touatsliman"
                className="icon-link"
                target="_blank"
                rel="noopener noreferrer"
              >
                <AiFillGithub />
              </a>
            </li>
            <li className="social-icons">
              <a
                href="https://twitter.com/#"
                className="icon-link"
                target="_blank"
                rel="noopener noreferrer"
              >
                <AiOutlineTwitter />
              </a>
            </li>
            <li className="social-icons">
              <a
                href="https://www.linkedin.com/in/mustapha-touat/"
                className="icon-link"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaLinkedinIn />
              </a>
            </li>
            <li className="social-icons">
              <a
                href="https://www.instagram.com/touat.sliman/"
                className="icon-link"
                target="_blank"
                rel="noopener noreferrer"
              >
                <AiFillInstagram />
              </a>
            </li>
          </ul>
        </Col>
      </Row>
    </Container>
  );
}

export default Footer;
