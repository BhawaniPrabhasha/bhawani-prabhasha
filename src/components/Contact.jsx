import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import {
  FaEnvelope,
  FaLinkedin,
} from "react-icons/fa";

export default function Contact() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_fe1ndto",
        "template_dgqgj7o",
        form.current,
        "YOUR_PUBLIC_KEY"
      )
      .then(
        () => {
          alert("Message sent successfully!");
          form.current.reset();
        },
        (error) => {
          alert("Failed to send message. Please try again.");
          console.log(error.text);
        }
      );
  };

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
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mb-12">
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

        {/* CONTACT FORM */}
        <div className="max-w-3xl mx-auto bg-gray-800 rounded-xl p-6 shadow-lg">
          <h3 className="text-2xl font-semibold mb-6 text-center text-white">
            Send Me a Message
          </h3>

          <form ref={form} onSubmit={sendEmail} className="flex flex-col gap-4">
            <input
              type="text"
              name="from_name"
              placeholder="Your Name"
              required
              className="p-3 rounded bg-gray-900 text-white border border-gray-700 focus:outline-none focus:border-blue-500"
            />

            <input
              type="email"
              name="from_email"
              placeholder="Your Email"
              required
              className="p-3 rounded bg-gray-900 text-white border border-gray-700 focus:outline-none focus:border-blue-500"
            />

            <textarea
              name="message"
              placeholder="Your Message"
              required
              rows="5"
              className="p-3 rounded bg-gray-900 text-white border border-gray-700 focus:outline-none focus:border-blue-500"
            />

            <button
              type="submit"
              className="bg-blue-600 hover:bg-blue-500 py-3 rounded font-medium transition-colors"
            >
              Send Message
            </button>
          </form>
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