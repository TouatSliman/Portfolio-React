import React from "react";
import Particle from "../Particle";
import Github from "./Github";
import Techstack from "./Techstack";
import Aboutcard from "./AboutCard";
import Toolstack from "./Toolstack";
import laptopImg from "../../Assets/about.png";
import { Link } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa6";

function About() {
  return (
    <div className="max-w-6xl mx-auto px-6 py-16 font-sans text-slate-400 bg-[#0F172A]">
      {/* Back Link */}
      <Link
        to="/"
        className="group inline-flex items-center text-sm text-teal-300 mb-6 no-underline transition-all w-fit"
      >
        <FaArrowLeft className="mr-1 transform transition-transform duration-300 group-hover:-translate-x-1" />
        <span className="ml-1">Sliman Touat</span>
      </Link>
      {/* Header Section */}
      <div className="text-center mb-16">
        <h1 className="text-5xl md:text-6xl font-bold text-teal-300 mb-4">
          About Me
        </h1>
        <div className="text-xl md:text-2xl text-slate-200 font-semibold">
          Network Security Engineer | CTF Competitor | Tech Enthusiast
        </div>
      </div>

      <div className="space-y-12">
        {/* Background Section */}
        <div className="bg-slate-800/50 p-8 rounded-xl shadow-lg border-l-4 border-teal-300">
          <h2 className="text-3xl font-semibold text-slate-200 mb-6">
            Background
          </h2>
          <p className="text-sm md:text-lg leading-relaxed text-justify">
            Hello! I'm a passionate network security engineer from Sidi Bel
            Abbès, Algeria, with a strong background in electrical engineering
            transitioning into cybersecurity. I specialize in network
            infrastructure, VPN configurations, and security analysis.
          </p>
        </div>

        {/* Technical Expertise Section */}
        <div className="bg-slate-800/50 p-8 rounded-xl shadow-lg border-l-4 border-teal-300">
          <h2 className="text-3xl font-semibold text-slate-200 mb-6">
            Technical Expertise
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
            <div className=" p-6 transition-shadow duration-300">
              <h3 className="text-xl font-semibold text-teal-300 mb-4">
                Networking & Security
              </h3>
              <ul className="space-y-3">
                <li className="flex items-center">
                  <span className="text-teal-300 mr-3">▶</span>
                  Network Infrastructure Design
                </li>
                <li className="flex items-center">
                  <span className="text-teal-300 mr-3">▶</span>
                  VPN Configuration & Management
                </li>
                <li className="flex items-center">
                  <span className="text-teal-300 mr-3">▶</span>
                  Firewall Administration
                </li>
                <li className="flex items-center">
                  <span className="text-teal-300 mr-3">▶</span>
                  Security Auditing
                </li>
              </ul>
            </div>

            <div className=" p-6 transition-shadow duration-300">
              <h3 className="text-xl font-semibold text-teal-300 mb-4">
                Development
              </h3>
              <ul className="space-y-3">
                <li className="flex items-center">
                  <span className="text-teal-300 mr-3">▶</span>
                  Full-Stack Development
                </li>
                <li className="flex items-center">
                  <span className="text-teal-300 mr-3">▶</span>
                  Python Automation
                </li>
                <li className="flex items-center">
                  <span className="text-teal-300 mr-3">▶</span>
                  API Development
                </li>
                <li className="flex items-center">
                  <span className="text-teal-300 mr-3">▶</span>
                  Database Management
                </li>
              </ul>
            </div>

            <div className=" p-6 transition-shadow duration-300">
              <h3 className="text-xl font-semibold text-teal-300 mb-4">
                Cybersecurity
              </h3>
              <ul className="space-y-3">
                <li className="flex items-center">
                  <span className="text-teal-300 mr-3">▶</span>
                  Penetration Testing
                </li>
                <li className="flex items-center">
                  <span className="text-teal-300 mr-3">▶</span>
                  CTF Competitions
                </li>
                <li className="flex items-center">
                  <span className="text-teal-300 mr-3">▶</span>
                  Vulnerability Assessment
                </li>
                <li className="flex items-center">
                  <span className="text-teal-300 mr-3">▶</span>
                  Incident Response
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* CTF & Competitions Section */}
        <div className="bg-slate-800/50 p-8 rounded-xl shadow-lg border-l-4 border-teal-300">
          <h2 className="text-3xl font-semibold text-slate-200 mb-6">
            CTF & Competitions
          </h2>
          <p className="text-sm md:text-lg leading-relaxed text-justify">
            I actively participate in Capture The Flag competitions, where I've
            achieved notable rankings including a 4th place finish. These
            competitions have sharpened my problem-solving skills and deepened
            my understanding of cybersecurity challenges.
          </p>
        </div>

        {/* Beyond Tech Section */}
        <div className="bg-slate-800/50 p-8 rounded-xl shadow-lg border-l-4 border-teal-300">
          <h2 className="text-3xl font-semibold text-slate-200 mb-6">
            Beyond Tech
          </h2>
          <p className="text-sm md:text-lg leading-relaxed text-justify">
            When I'm not coding or analyzing networks, you'll find me training
            in boxing and MMA. These sports have taught me discipline,
            perseverance, and strategic thinking - qualities that translate
            perfectly into my technical work.
          </p>
        </div>

        {/* Goals & Vision Section */}
        <div className="bg-slate-800/50 p-8 rounded-xl shadow-lg border-l-4 border-teal-300">
          <h2 className="text-3xl font-semibold text-slate-200 mb-6">
            Goals & Vision
          </h2>
          <p className="text-sm md:text-lg leading-relaxed text-justify">
            I'm committed to building a career that bridges the gap between
            network infrastructure and cybersecurity. My goal is to help
            organizations build secure, scalable networks while contributing to
            the cybersecurity community through content creation and mentorship.
          </p>
        </div>

        {/* Contact Section */}
        <div className="bg-gradient-to-r from-blue-900 to-teal-900 p-8 rounded-xl shadow-lg text-white text-center">
          <h2 className="text-3xl font-semibold text-teal-300 mb-6">
            Let's Connect
          </h2>
          <p className="text-sm md:text-lg mb-8 leading-relaxed">
            I'm always open to discussing new opportunities, collaborating on
            projects, or sharing knowledge about networking and cybersecurity.
          </p>
          <div className="flex flex-col sm:flex-row justify-center items-center gap-6">
            <a
              href="https://linkedin.com/in/yourprofile"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-transparent border-2 border-teal-300 text-teal-300 px-6 py-3 rounded-full font-semibold hover:bg-yellow-500 hover:text-slate-200 transform hover:-translate-y-1 transition-all duration-300 min-w-[120px]"
            >
              LinkedIn
            </a>
            <a
              href="https://github.com/yourusername"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-transparent border-2 border-teal-300 text-teal-300 px-6 py-3 rounded-full font-semibold hover:bg-yellow-500 hover:text-slate-200 transform hover:-translate-y-1 transition-all duration-300 min-w-[120px]"
            >
              GitHub
            </a>
            <a
              href="mailto:your.email@example.com"
              className="bg-transparent border-2 border-teal-300 text-teal-300 px-6 py-3 rounded-full font-semibold hover:bg-yellow-500 hover:text-slate-200 transform hover:-translate-y-1 transition-all duration-300 min-w-[120px]"
            >
              Email
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
