import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am{" "}
            <span className="purple">Touat Sliman Mustapha </span>
            from <span className="purple"> Sidi Bel Abbes, Algeria.</span>
            <br />
            I’ve even co-founded an AI agency, where we get to tackle
            interesting challenges in the world of machine learning.
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> hitting the gym and staying fit
            </li>
            <li className="about-activity">
              <ImPointRight /> digital art and design
            </li>
            <li className="about-activity">
              <ImPointRight /> playing video games or watching anime
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Make yourself so busy that you’re on the edge of handling it,
            because growth happens when you’re stretched to your limits."{" "}
          </p>
          <footer className="blockquote-footer">touat sliman mustapha</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
