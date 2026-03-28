import React from "react";
import {
  FaEnvelope,
  FaLinkedin,
} from "react-icons/fa";

export default function Contact() {
  return (
    <section
      id="contact"
      className="min-h-screen bg-gray-900 text-white px-6 md:px-20 py-20"
    >
      <div className="max-w-5xl mx-auto">

        {/* SECTION TITLE */}
        <h2 className="text-4xl font-bold text-center mb-4 text-blue-400">
          Contact Me
        </h2>

        <p className="text-center text-gray-400 mb-12">
          Feel free to reach out for collaborations, opportunities, or just a friendly hello 👋
        </p>

        {/* CONTACT CARDS */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">

          {/* Email */}
          <ContactCard
            icon={<FaEnvelope />}
            title="Email"
            value="bhawaniprabhasha001@gmail.com"
            link="mailto:bhawaniprabhasha001@gmail.com"
          />

          {/* LinkedIn */}
          <ContactCard
            icon={<FaLinkedin />}
            title="LinkedIn"
            value="linkedin.com/in/bhawani-prabhasha"
            link="https://www.linkedin.com/in/bhawani-prabhasha/"
          />

        </div>
      </div>
    </section>
  );
}

/* Contact Card Component */
function ContactCard({ icon, title, value, link }) {
  return (
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className="bg-gray-800 rounded-xl p-6 flex items-center gap-6
      hover:scale-105 transition-transform duration-300
      shadow-lg hover:shadow-blue-500/30"
    >
      <div className="text-4xl text-blue-400">
        {icon}
      </div>

      <div>
        <h3 className="text-xl font-semibold">{title}</h3>
        <p className="text-gray-400 text-sm mt-1">{value}</p>
      </div>
    </a>
  );
}