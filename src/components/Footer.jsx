import React from "react";
import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaWhatsapp,
} from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-gray-800 text-gray-400 py-10">
      <div className="max-w-6xl mx-auto px-6 text-center">

        {/* NAME */}
        <h3 className="text-2xl font-bold text-white mb-2">
          Bhawani Prabhasha
        </h3>

        {/* ROLE */}
        <p className="text-sm mb-6">
          Full Stack Developer • Web Applications • Cloud Enthusiast
        </p>

        {/* SOCIAL ICONS */}
        <div className="flex justify-center gap-6 text-2xl mb-6">

          <SocialIcon
            icon={<FaGithub />}
            link="https://github.com/BhawaniPrabhasha"
          />

          <SocialIcon
            icon={<FaLinkedin />}
            link="https://www.linkedin.com/in/bhawani-prabhasha/"
          />

          <SocialIcon
            icon={<FaEnvelope />}
            link="mailto:bhawaniprabhasha001@gmail.com"
          />

          <SocialIcon
            icon={<FaWhatsapp />}
            link="https://wa.me/94741386207"
          />

        </div>

        {/* COPYRIGHT */}
        <p className="text-xs text-gray-500">
          © {new Date().getFullYear()} Bhawani Prabhasha. All rights reserved.
        </p>

      </div>
    </footer>
  );
}

/* Social Icon Component */
function SocialIcon({ icon, link }) {
  return (
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className="hover:text-blue-400 transition-colors"
    >
      {icon}
    </a>
  );
}