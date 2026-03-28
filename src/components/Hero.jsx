import React from "react";
import profile from "../assets/profile.png";
import { FaEnvelope, FaDownload } from "react-icons/fa";

export default function Hero() {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center bg-gray-900 text-white px-6 md:px-24"
    >
      <div className="max-w-6xl mx-auto w-full">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12">

          {/* LEFT – CONTENT */}
          <div className="md:w-1/2 text-center md:text-left">

            {/* NAME ONLY */}
            <h1 className="text-5xl md:text-6xl font-extrabold leading-tight mb-6">
              <span className="text-blue-400">
                Bhawani Prabhasha
              </span>
            </h1>

            {/* LINKEDIN DESCRIPTION */}
            <p className="text-gray-300 text-lg mb-8 leading-relaxed">
              Computer Science Undergraduate | University of Ruhuna | CIMA Operational Level (FLP) Candidate
            </p>

            {/* BUTTONS */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">

              {/* Contact */}
              <a
                href="#contact"
                className="inline-flex items-center justify-center gap-2
                bg-blue-600 hover:bg-blue-500 transition-colors
                px-6 py-3 rounded-lg font-medium"
              >
                <FaEnvelope />
                Contact Me
              </a>

              {/* Download CV */}
              <a
                href={`${import.meta.env.BASE_URL}resume.pdf`}
                download
                className="inline-flex items-center justify-center gap-2
                border border-blue-500 text-blue-400
                hover:bg-blue-500 hover:text-white transition-colors
                px-6 py-3 rounded-lg font-medium"
              >
                <FaDownload />
                Download CV
              </a>

            </div>
          </div>

          {/* RIGHT – IMAGE */}
          <div className="md:w-1/2 flex justify-center">
            <img
              src={profile}
              alt="Bhawani Prabhasha"
              className="w-56 h-56 sm:w-64 sm:h-64 md:w-80 md:h-80
              object-cover object-[center_top]
              rounded-full border-4 border-blue-500 shadow-xl
              transition-transform duration-300 hover:scale-105"
            />
          </div>

        </div>
      </div>
    </section>
  );
}