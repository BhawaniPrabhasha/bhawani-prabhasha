import React from "react";
import {
  AiOutlineGithub,
  AiOutlineLinkedin,
  AiOutlineMail,
} from "react-icons/ai";

export default function SocialSidebar() {
  return (
    <div className="fixed left-4 top-1/2 -translate-y-1/2 z-50 hidden md:flex flex-col gap-4">
      
      {/* GitHub */}
      <a
        href="https://github.com/BhawaniPrabhasha"
        target="_blank"
        rel="noopener noreferrer"
        className="social-icon"
      >
        <AiOutlineGithub />
      </a>

      {/* LinkedIn */}
      <a
        href="https://www.linkedin.com/in/bhawani-prabhasha/"
        target="_blank"
        rel="noopener noreferrer"
        className="social-icon"
      >
        <AiOutlineLinkedin />
      </a>

      {/* Email */}
      <a
        href="mailto:bhawaniprabhasha001@gmail.com"
        className="social-icon"
      >
        <AiOutlineMail />
      </a>

    </div>
  );
}