import React from "react";
import { Link } from "react-router-dom";
import { FaLinkedinIn } from "react-icons/fa";
import { TbBrandGithubFilled } from "react-icons/tb";
import grd from "../../Assets/grd.png";
import team from "../../Assets/team0.jpg";
import univ from "../../Assets/univ.jpg";
import award from "../../Assets/award.png";
import event from "../../Assets/event.jpg";
import lab from "../../Assets/lab.jpg";
import stdio from "../../Assets/stdio.png";
import hackathon from "../../Assets/hackathon.jpg";
import { FaArrowLeft } from "react-icons/fa6";

// ─────────────────────────────────────────────────────────────────
// Gallery photo data — replace src with your actual image imports
// e.g. import ctf1 from "../../Assets/gallery/ctf1.jpg";
// ─────────────────────────────────────────────────────────────────
const GALLERY_ITEMS = [
  {
    id: 1,
    src: stdio,
    alt: "Me at the terminal",
    caption: "Me at the terminal",
    featured: true,
  },
  { id: 2, src: univ, alt: "University", caption: "University" },
  { id: 3, src: hackathon, alt: "Team Hackathon", caption: "Team Hackathon" },
  { id: 4, src: award, alt: "Award Ceremony", caption: "Award Ceremony" },
  { id: 5, src: lab, alt: "Lab Session", caption: "Lab Session" },
  { id: 6, src: event, alt: "Campus Event", caption: "Campus Event" },
  { id: 7, src: team, alt: "CTF Team", caption: "CTF Team" },
  { id: 8, src: grd, alt: "Graduation", caption: "Graduation" },
];

/* ──────── small sub-components ──────── */

function GalleryItem({ item }) {
  return (
    <div
      role="listitem"
      tabIndex={0}
      aria-label={item.alt}
      className={[
        "gallery-item group relative overflow-hidden rounded-2xl bg-slate-800 cursor-pointer",
        "transition-transform duration-300 hover:scale-[1.02]",
        item.featured
          ? "col-span-2 row-span-2 md:col-span-2 md:row-span-2"
          : "",
      ].join(" ")}
    >
      {item.src ? (
        <img
          src={item.src}
          alt={item.alt}
          loading="lazy"
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
      ) : (
        <div className="flex flex-col items-center justify-center w-full h-full gap-2 text-slate-600 text-xs text-center p-4">
          {/* Replace with your image */}
          <svg
            className="opacity-40"
            width="28"
            height="28"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
            aria-hidden="true"
          >
            <rect x="3" y="3" width="18" height="18" rx="2" />
            <circle cx="8.5" cy="8.5" r="1.5" />
            <path d="M21 15l-5-5L5 21" />
          </svg>
          <span>{item.caption}</span>
        </div>
      )}
      {/* Hover overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
        <span className="text-xs text-white font-medium tracking-wide">
          {item.caption}
        </span>
      </div>
    </div>
  );
}

function SectionCard({ label, num, title, children }) {
  return (
    <section
      aria-label={label}
      className="relative bg-slate-800 border border-white/[0.07] rounded-3xl p-8 md:p-10 shadow-md overflow-hidden"
    >
      {/* Top shimmer line */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-teal-400/20 to-transparent" />
      {/* Decorative section number */}
      <span className="absolute top-5 right-8 font-serif italic text-8xl text-teal-300/[0.03] pointer-events-none select-none leading-none">
        {num}
      </span>

      <p className="text-xs uppercase tracking-widest text-teal-400 font-medium mb-3">
        {label}
      </p>
      <h2 className="font-serif text-3xl md:text-4xl font-normal text-slate-100 mb-5 leading-tight">
        {title}
      </h2>
      {children}
    </section>
  );
}

/* ──────── main component ──────── */

export default function About() {
  return (
    <div className="max-w-4xl mx-auto px-5 py-14 font-sans text-slate-400  min-h-screen">
      {/* Back link */}
      <Link
        to="/"
        className="group inline-flex items-center gap-2 text-sm text-teal-400 mb-12 transition-all"
      >
        <FaArrowLeft className="transition-transform duration-300 group-hover:-translate-x-1" />
        <span>Sliman Touat</span>
      </Link>

      {/* Hero */}
      <header className="text-center mb-20">
        <span className=" inline-block text-xs uppercase tracking-widest text-teal-400 border border-teal-400/30 px-4 py-1 rounded-full mb-6">
          About me
        </span>
        {/*
        <h1 className="font-serif text-5xl md:text-7xl font-normal italic text-slate-100 leading-tight mb-4">
          Full-Stack Developer &<br />
          <span className="text-teal-400">Security Enthusiast</span>
        </h1>
        */}
        <div className="flex justify-center flex-wrap items-center gap-2 text-sm text-slate-500">
          <span>Computer Science Student</span>
          <span className="w-1 h-1 rounded-full bg-slate-700 inline-block" />
          <span>CTF Competitor</span>
          <span className="w-1 h-1 rounded-full bg-slate-700 inline-block" />
          <span>Sidi Bel Abbès, Algeria</span>
        </div>
      </header>

      <div className="space-y-8">
        {/* Background */}
        <SectionCard label="Background" num="01" title="Who I am">
          <p className="text-slate-400 leading-relaxed max-w-2xl">
            Hello! I'm a passionate full-stack developer from Sidi Bel Abbès,
            Algeria, with a strong background in software development — focused
            on building responsive, user-friendly web applications and exploring
            the intersection of networking and cybersecurity. <br />
            oh i forgot to mention that i use arch linux by the way 😀
          </p>
        </SectionCard>

        {/* Technical Expertise */}
        <SectionCard
          label="Technical Expertise"
          num="02"
          title="What I build with"
        >
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-2">
            {[
              {
                title: "Frontend & UI",
                items: [
                  "React (Hooks, Context, Suspense)",
                  "TypeScript & modern ESNext",
                  "TailwindCSS / CSS Modules",
                  "Accessibility & performance",
                ],
              },
              {
                title: "Backend & APIs",
                items: [
                  "Node.js (Express, NestJS)",
                  "RESTful APIs & GraphQL",
                  "PostgreSQL & MongoDB",
                  "Auth & testing (Jest, Supertest)",
                ],
              },
              {
                title: "DevOps & Tooling",
                items: [
                  "Git, GitHub Actions, CI/CD",
                  "Docker & containerization",
                  "AWS (S3, EC2, Lambda)",
                  "Monitoring & security",
                ],
              },
            ].map((col) => (
              <div
                key={col.title}
                className="bg-slate-800/60 border border-white/[0.06] rounded-2xl p-5"
              >
                <h3 className="text-sm font-semibold text-teal-400 mb-4">
                  {col.title}
                </h3>
                <ul className="space-y-2.5">
                  {col.items.map((item) => (
                    <li
                      key={item}
                      className="flex items-start gap-2 text-sm text-slate-400"
                    >
                      <span className="mt-[0.45em] w-1.5 h-1.5 min-w-[6px] rounded-full bg-teal-400/60 inline-block" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </SectionCard>

        {/* CTF 
        <SectionCard label="CTF & Competitions" num="03" title="Hacking challenges">
          <p className="text-slate-400 leading-relaxed max-w-2xl">
            I actively participate in Capture The Flag competitions. These events have sharpened my
            problem-solving skills and deepened my understanding of real-world cybersecurity challenges —
            from binary exploitation and reverse engineering to web vulnerabilities and cryptography.
          </p>
        </SectionCard>*/}

        {/* Gallery */}
        <SectionCard label="Gallery" num="03" title="Moments & memories">
          {/*
            Gallery grid: 4 columns on desktop.
            First item (featured) spans 2 cols × 2 rows.
            Replace `src: null` in GALLERY_ITEMS with your real image imports.
          */}
          <div
            role="list"
            className="grid grid-cols-2 md:grid-cols-4 gap-3 mt-2"
            style={{ gridAutoRows: "clamp(80px, 14vw, 140px)" }}
          >
            {GALLERY_ITEMS.map((item) => (
              <GalleryItem key={item.id} item={item} />
            ))}
          </div>
        </SectionCard>

        {/* Beyond Tech */}
        <SectionCard
          label="Beyond Tech"
          num="04"
          title="Life outside the terminal"
        >
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-2">
            {[
              {
                icon: "🥋",
                title: "Judo & Martial Arts",
                text: "Training in Judo has instilled discipline, perseverance, and strategic thinking — qualities that translate directly into technical work.",
              },
              {
                icon: "📚",
                title: "Reading & Learning",
                text: "Constantly reading — technical books, novels, philosophy. Curiosity drives everything I do, from networking theory to history.",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="bg-slate-800/60 border border-white/[0.06] rounded-2xl p-5"
              >
                <div className="text-2xl mb-3">{item.icon}</div>
                <h4 className="text-sm font-semibold text-slate-100 mb-2">
                  {item.title}
                </h4>
                <p className="text-sm text-slate-400 leading-relaxed">
                  {item.text}
                </p>
              </div>
            ))}
          </div>
        </SectionCard>

        {/* Goals 
        <SectionCard label="Goals & Vision" num="06" title="Where I'm headed">
          <p className="text-slate-400 leading-relaxed max-w-2xl">
            I'm committed to building a career that bridges network
            infrastructure and cybersecurity — helping organizations construct
            secure, scalable systems while contributing back to the community
            through open-source work, content creation, and mentorship.
          </p>
        </SectionCard>*/}

        {/* Contact */}
        <section
          aria-label="Contact"
          className="relative bg-gradient-to-br from-slate-900 via-[#0a1628] to-slate-900 border border-teal-400/20 rounded-3xl px-8 py-14 text-center overflow-hidden"
        >
          {/* Radial glow */}
          <div className="absolute -top-16 left-1/2 -translate-x-1/2 w-80 h-80 rounded-full bg-teal-400/5 blur-3xl pointer-events-none" />
          <h2 className="font-serif text-3xl md:text-4xl font-normal italic text-slate-100 mb-3 relative">
            Let's connect
          </h2>
          <p className="text-sm text-slate-400 max-w-md mx-auto mb-10 relative">
            Open to new opportunities, collaborations, or just a good
            conversation about networking and security.
          </p>
          <div className="flex flex-wrap justify-center gap-3 relative">
            <a
              href="https://www.linkedin.com/in/mustapha-touat/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex no-underline items-center gap-2 bg-teal-400 text-slate-900 font-semibold text-sm px-6 py-3 rounded-full hover:bg-teal-300 transition-all duration-200 hover:-translate-y-0.5"
            >
              <FaLinkedinIn />
              LinkedIn
            </a>
            <a
              href="https://github.com/touatsliman"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex no-underline items-center gap-2 border border-teal-400/40 text-teal-400 text-sm px-6 py-3 rounded-full hover:bg-teal-400 hover:text-slate-900 hover:border-teal-400 transition-all duration-200 hover:-translate-y-0.5"
            >
              <TbBrandGithubFilled />
              GitHub
            </a>
            <a
              href="mailto:touat_mustapha@outlook.com"
              className="inline-flex no-underline items-center gap-2 border border-teal-400/40 text-teal-400 text-sm px-6 py-3 rounded-full hover:bg-teal-400 hover:text-slate-900 hover:border-teal-400 transition-all duration-200 hover:-translate-y-0.5"
            >
              <svg
                width="16"
                height="16"
                fill="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path d="M20 4H4C2.897 4 2 4.897 2 6v12c0 1.103.897 2 2 2h16c1.103 0 2-.897 2-2V6c0-1.103-.897-2-2-2zm0 2l-8 5-8-5h16zm0 12H4V8l8 5 8-5v10z" />
              </svg>
              Email
            </a>
          </div>
        </section>
      </div>
    </div>
  );
}
