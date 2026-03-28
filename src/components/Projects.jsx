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
      frontend: "https://github.com/HasalKenula/WorkSure-frontend.git",
      backend: "https://github.com/HasalKenula/WorkSure-backend.git",
    },
    {
      id: 2,
      title: "Ticketing Website",
      image: ticketingImg,
      description:
        "A web-based ticketing system developed to manage event bookings and reservations.",
      github: "https://github.com/AdithyaShenal/Ticketing-Website.git",
    },
    {
      id: 3,
      title: "Blood Bank Management System",
      image: bloodbankImg,
      description:
        "A desktop-based blood bank management system to manage donors, patients, and blood stock efficiently.",
      github: "https://github.com/Keshanibalasuriya/Blood-Bank-Management-System.git",
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
            {/* IMAGE */}
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
            />

            {/* DESCRIPTION */}
            <div className="bg-gray-800 text-white p-4">
              <h3 className="text-xl font-bold mb-2">{project.title}</h3>
              <p className="text-gray-300 text-sm">{project.description}</p>
            </div>

            {/* HOVER BUTTONS */}
            <div className="absolute inset-0 bg-black bg-opacity-60 opacity-0 group-hover:opacity-100 transition-opacity flex flex-col justify-center items-center text-white p-4 gap-3">

              {/* WorkSure → 2 buttons */}
              {project.frontend && (
                <>
                  <a
                    href={project.frontend}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2 bg-blue-600 hover:bg-blue-500 rounded-lg"
                  >
                    Frontend
                  </a>

                  <a
                    href={project.backend}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2 bg-purple-600 hover:bg-purple-500 rounded-lg"
                  >
                    Backend
                  </a>
                </>
              )}

              {/* Other projects → 1 button */}
              {project.github && (
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 bg-blue-600 hover:bg-blue-500 rounded-lg"
                >
                  GitHub
                </a>
              )}

            </div>
          </div>
        ))}
      </div>
    </section>
  );
}