import React from "react";
import {
  FaReact,
  FaHtml5,
  FaCss3Alt,
  FaJsSquare,
  FaGitAlt,
  FaGithub,
  FaJava,
  FaAws,
} from "react-icons/fa";
import { SiTailwindcss, SiMysql, SiSelenium } from "react-icons/si";

export default function Skills() {
  return (
    <section
      id="skills"
      className="min-h-screen bg-gray-900 text-white px-6 md:px-20 py-20"
    >
      <div className="max-w-6xl mx-auto">

        {/* SECTION TITLE */}
        <h2 className="text-4xl font-bold text-center mb-12 text-blue-400">
          Skills
        </h2>

        {/* SKILLS GRID */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8">

          {/* FRONTEND */}
          <SkillCard icon={<FaReact />} name="React" />
          <SkillCard icon={<SiTailwindcss />} name="Tailwind CSS" />
          <SkillCard icon={<FaJsSquare />} name="JavaScript" />
          <SkillCard icon={<FaHtml5 />} name="HTML" />
          <SkillCard icon={<FaCss3Alt />} name="CSS" />

          {/* BACKEND & DATABASE */}
          <SkillCard icon={<FaJava />} name="Java (Spring Boot)" />
          <SkillCard icon={<SiMysql />} name="MySQL" />

          {/* TOOLS */}
          <SkillCard icon={<FaGitAlt />} name="Git" />
          <SkillCard icon={<FaGithub />} name="GitHub" />

          {/* TESTING & CLOUD */}
          <SkillCard icon={<SiSelenium />} name="Selenium" />
          <SkillCard icon={<FaAws />} name="AWS" />

        </div>
      </div>
    </section>
  );
}

/* Skill Card Component */
function SkillCard({ icon, name }) {
  return (
    <div
      className="bg-gray-800 rounded-xl p-6 flex flex-col items-center justify-center
      hover:scale-105 transition-transform duration-300 shadow-lg hover:shadow-blue-500/30"
    >
      <div className="text-5xl text-blue-400 mb-4">
        {icon}
      </div>
      <p className="text-lg font-medium text-center">{name}</p>
    </div>
  );
}