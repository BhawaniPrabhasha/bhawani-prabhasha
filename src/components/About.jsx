import React from "react";
import profile from "../assets/profile.png"; // your photo

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

          <p className="text-gray-300 mb-6">
            Hi! I'm Bhawani Prabhasha, a dedicated Full Stack Developer with a strong interest in building modern and efficient web applications. I enjoy creating solutions that are both user-friendly and reliable, with a focus on delivering a smooth and meaningful user experience.
          </p>

          <p className="text-gray-300 mb-6">
            I am passionate about solving real-world problems through technology and continuously improving my skills through hands-on projects and learning. I am always eager to grow as a developer and contribute to impactful software solutions.
          </p>

          {/* Download CV Button */}
          <a
            href={`${import.meta.env.BASE_URL}resume.pdf`}
            download
            className="inline-block bg-blue-600 hover:bg-blue-500 transition-colors px-6 py-3 rounded-lg font-medium"
          >
            Download CV
          </a>
        </div>

        {/* RIGHT SIDE – IMAGE */}
        <div className="md:w-1/2 flex justify-center">
          <img
            src={profile}
            alt="Bhawani Prabhasha"
            className="w-80 h-80 object-cover rounded-lg shadow-xl border-4 border-blue-500"
          />
        </div>

      </div>
    </section>
  );
}