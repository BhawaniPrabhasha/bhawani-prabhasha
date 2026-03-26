import React from "react";
import worksureImg from "../assets/worksure.png";
import ticketingImg from "../assets/ticketing.png";
import bloodbankImg from "../assets/bloodbank.png";

export default function Projects() {
  const projects = [
    {
      id: 1,
      title: "WorkSure",
      image: worksureImg,
      description:
        "WorkSure is a full-stack service marketplace that connects users with skilled workers across the country. It allows users to search, book, and manage services such as plumbing, electrical, and home maintenance, while providing workers with a platform to register, showcase their skills, and receive job opportunities.",
      github: "https://github.com/HasalKenula/WorkSure-frontend.git",
      medium: "https://github.com/BhawaniPrabhasha/WorkSure-automation.git",
      linkedin: "https://www.linkedin.com/in/yourusername/",
    },
    {
      id: 2,
      title: "Ticketing Website",
      image: ticketingImg,
      description:
        "A web-based ticketing system developed to manage event bookings and reservations. Users can browse events such as music shows, movies, concerts, and festivals, search for events, and book tickets easily through a user-friendly interface.",
      github: "https://github.com/AdithyaShenal/Ticketing-Website.git",
      medium: "#",
      linkedin: "https://www.linkedin.com/in/yourusername/",
    },
    {
      id: 3,
      title: "Blood Bank Management System",
      image: bloodbankImg,
      description:
        "A desktop-based blood bank management system developed to manage donor records, patient details, blood stock levels, and transfer operations efficiently. The system helps streamline blood inventory tracking and ensures proper management of donations and requests.",
      github: "https://github.com/Keshanibalasuriya/Blood-Bank-Management-System.git",
      medium: "#",
      linkedin: "https://www.linkedin.com/in/yourusername/",
    },
  ];

  return (
    <section id="projects" className="py-20 px-6 md:px-20">
      <h2 className="text-4xl font-bold mb-12 text-center text-blue-400">
        Projects
      </h2>

      <div className="grid md:grid-cols-3 gap-8">
        {projects.map((project) => (
          <div
            key={project.id}
            className="relative group overflow-hidden rounded-lg shadow-lg"
          >
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
            />

            <div className="bg-gray-800 text-white p-4">
              <h3 className="text-xl font-bold mb-2">{project.title}</h3>
              <p className="text-gray-300 text-sm">{project.description}</p>
            </div>

            <div className="absolute inset-0 bg-black bg-opacity-60 opacity-0 group-hover:opacity-100 transition-opacity flex flex-col justify-center items-center text-center text-white p-4">
              <div className="flex gap-4 flex-wrap justify-center">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 bg-blue-600 hover:bg-blue-500 rounded-lg"
                >
                  GitHub
                </a>

                <a
                  href={project.medium}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 bg-green-600 hover:bg-green-500 rounded-lg"
                >
                  Medium
                </a>

                <a
                  href={project.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 bg-blue-800 hover:bg-blue-700 rounded-lg"
                >
                  LinkedIn
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}