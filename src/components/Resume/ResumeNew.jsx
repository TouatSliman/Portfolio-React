import React, { useState, useEffect } from "react";
import { Container, Row } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Particle from "../Particle";
import { AiOutlineDownload } from "react-icons/ai";
import { Document, Page, pdfjs } from "react-pdf";
import pdfjsWorker from "pdfjs-dist/build/pdf.worker?url";
pdfjs.GlobalWorkerOptions.workerSrc = pdfjsWorker;
import grid from "../../Assets/grid.png";

function ResumeNew() {
  const [width, setWidth] = useState(1200);
  const pdf = "cv.pdf"; // Replace with your PDF URL

  useEffect(() => {
    setWidth(window.innerWidth);
  }, []);

  return (
    <div className="bg-slate-900 text-slate-200 min-h-screen flex flex-col items-center justify-center">
      {/* Grid Background Layer */}
      <div
        className="absolute top-0 left-0 w-full h-full opacity-40 z-10"
        style={{
          backgroundImage: `url(${grid})`,
          backgroundSize: "contain",
          backgroundRepeat: "repeat-y",
          backgroundPosition: "center",
        }}
      ></div>

      <Container fluid className="resume-section">
        <Particle />
        <Row style={{ justifyContent: "center", position: "relative" }}>
          <Button
            variant="primary"
            href={pdf}
            target="_blank"
            className="mb-10 w-12 h-12 flex justify-center items-center px-2 py-2 bg-slate-800/50 shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] backdrop-blur-sm rounded-full hover:bg-slate-700 transition fixed bottom-0 right-0 mr-5 sm:mr-30"
          >
            <AiOutlineDownload size={24} />
          </Button>
        </Row>

        <Row className="w-full flex justify-center m-0">
          <Document
            file={pdf}
            className="flex justify-center items-center w-full"
            onLoadError={(err) => console.error("PDF load error:", err)}
          >
            <Page
              pageNumber={1}
              scale={width > 786 ? 1.7 : 0.6}
              renderTextLayer={false}
              renderAnnotationLayer={false}
            />
          </Document>
        </Row>
      </Container>
    </div>
  );
}

export default ResumeNew;
