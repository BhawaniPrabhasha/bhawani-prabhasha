
import React from "react";
import {
  AiOutlineGithub,
  AiOutlineLinkedin,
  AiOutlineMail,
  AiOutlineWhatsApp,
  AiOutlineMessage,
} from "react-icons/ai";

export default function SocialSidebar() {
  return (
    <div className="fixed left-4 top-1/2 -translate-y-1/2 z-50 hidden md:flex flex-col gap-4">
      
      <a
        href="https://github.com/yourusername"
        target="_blank"
        className="social-icon"
      >
        <AiOutlineGithub />
      </a>

      <a
        href="https://www.linkedin.com/in/yourprofile"
        target="_blank"
        className="social-icon"
      >
        <AiOutlineLinkedin />
      </a>

      <a
        href="mailto:yourmail@gmail.com"
        className="social-icon"
      >
        <AiOutlineMail />
      </a>

      <a
        href="https://wa.me/947XXXXXXXX"
        target="_blank"
        className="social-icon"
      >
        <AiOutlineWhatsApp />
      </a>

      <a
        href="#contact"
        className="social-icon"
      >
        <AiOutlineMessage />
      </a>

    </div>
  );
}
