import React from "react";
import profile from "../assets/profile.png";
import { FaGraduationCap, FaChartLine } from "react-icons/fa";

export default function About() {
  return (
    <section
      id="about"
      className="min-h-screen flex items-center bg-gray-800 text-white px-6 md:px-20 py-20"
    >
      <div className="flex flex-col md:flex-row items-center justify-between w-full gap-10">
        {/* LEFT SIDE – TEXT */}
        <div className="md:w-1/2 text-center md:text-left md:pl-5">
          <h2 className="text-4xl font-bold mb-4 text-blue-400">
            About Me
          </h2>

          <p className="text-gray-300 mb-6 leading-relaxed">
            I am Bhawani Prabhasha, a Computer Science undergraduate at the
            University of Ruhuna with a strong interest in building impactful
            software solutions. I am currently following the CIMA Operational
            Level (FLP), which strengthens my understanding of business,
            analytical thinking, and professional development alongside my
            technical studies.
          </p>

          <p className="text-gray-300 mb-8 leading-relaxed">
            I am passionate about developing user-focused applications that are
            efficient, reliable, and easy to use. Through academic work,
            certifications, and projects, I continue to improve my skills and
            prepare myself to contribute effectively in a professional
            environment.
          </p>

          {/* TIMELINE */}
          <div className="mt-8 space-y-6">
            <div className="flex items-start gap-4">
              <div className="bg-blue-600 p-3 rounded-full">
                <FaGraduationCap className="text-white text-lg" />
              </div>
              <div>
                <h3 className="text-lg font-semibold">
                  University of Ruhuna
                </h3>
                <p className="text-gray-400 text-sm">
                  BSc (Hons) in Computer Science Undergraduate
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="bg-blue-600 p-3 rounded-full">
                <FaChartLine className="text-white text-lg" />
              </div>
              <div>
                <h3 className="text-lg font-semibold">
                  CIMA Operational Level (FLP)
                </h3>
                <p className="text-gray-400 text-sm">
                  Business, finance, and analytical development
                </p>
              </div>
            </div>
          </div>

          {/* DOWNLOAD CV BUTTON */}
          <a
            href={`${import.meta.env.BASE_URL}Bhawani_Prabhasha_SE_Intern (2).pdf`}
            download
            className="inline-block bg-blue-600 hover:bg-blue-500 transition-colors px-6 py-3 rounded-lg font-medium mt-8"
          >
            Download CV
          </a>
        </div>

        {/* RIGHT SIDE – IMAGE */}
        <div className="md:w-1/2 flex justify-center">
          <img
            src={profile}
            alt="Bhawani Prabhasha"
            className="w-80 h-80 object-cover object-[center_top]
            rounded-lg shadow-xl border-4 border-blue-500"
          />
        </div>
      </div>
    </section>
  );
}