import React, { useState, useEffect } from "react";
import { Document, Page, pdfjs } from "react-pdf";
import pdfjsWorker from "pdfjs-dist/build/pdf.worker?url";
import Particle from "../Particle";
import { AiOutlineDownload } from "react-icons/ai";
import { FaArrowLeft } from "react-icons/fa6";
import { Link } from "react-router-dom";

import grid from "../../Assets/grid.png";

pdfjs.GlobalWorkerOptions.workerSrc = pdfjsWorker;

function ResumeNew() {
  const [width, setWidth] = useState(1200);
  const pdf = "cv.pdf";

  useEffect(() => {
    setWidth(window.innerWidth);
  }, []);

  return (
    <div className="relative bg-slate-900 text-slate-100 min-h-screen flex flex-col items-center justify-center px-4">
      {/* Grid Background Layer */}
      <div
        className="absolute top-0 left-0 w-full h-full opacity-30 z-0"
        style={{
          backgroundImage: `url(${grid})`,
          backgroundSize: "contain",
          backgroundRepeat: "repeat-y",
          backgroundPosition: "center",
        }}
      ></div>

      {/* Particle Background */}
      <Particle />

      {/* Return Link */}
      <Link
        to="/"
        className="group no-underline fixed top-6 left-6 sm:top-8 sm:left-10 z-30 text-teal-300 text-sm inline-flex items-center hover:text-teal-200 transition"
      >
        <FaArrowLeft className="mr-2 transition-transform duration-300 group-hover:-translate-x-1" />
        <span className="font-medium">Sliman Touat</span>
      </Link>

      {/* PDF Display */}
      <div className="relative z-20 w-full flex justify-center items-center pt-20 pb-16">
        <Document
          file={pdf}
          onLoadError={(err) => console.error("PDF load error:", err)}
          className="flex justify-center"
        >
          <Page
            pageNumber={1}
            scale={width > 1024 ? 1.6 : width > 768 ? 1.1 : 0.6}
            renderTextLayer={false}
            renderAnnotationLayer={false}
          />
        </Document>
      </div>

      {/* Download Button */}
      <a
        href={pdf}
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-30 bg-slate-800/50 text-teal-300 hover:bg-slate-700 hover:text-white transition shadow-lg backdrop-blur-md rounded-full p-3"
        title="Download CV"
      >
        <AiOutlineDownload size={24} />
      </a>
    </div>
  );
}

export default ResumeNew;
