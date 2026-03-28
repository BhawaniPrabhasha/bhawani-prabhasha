import React from "react";
import Slider from "react-slick";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

import awsImg from "../assets/aws.png";
import businessImg from "../assets/business.png";
import testingImg from "../assets/testing.png";
import qaImg from "../assets/qa.png";
import digitalFinanceImg from "../assets/digital-finance.png";
import dockerImg from "../assets/docker.png";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function NextArrow({ onClick }) {
  return (
    <button
      onClick={onClick}
      className="absolute -right-4 top-1/2 -translate-y-1/2 z-10 bg-gray-900 text-blue-400 p-3 rounded-full shadow-lg hover:bg-blue-500 hover:text-white transition"
      type="button"
    >
      <FaChevronRight />
    </button>
  );
}

function PrevArrow({ onClick }) {
  return (
    <button
      onClick={onClick}
      className="absolute -left-4 top-1/2 -translate-y-1/2 z-10 bg-gray-900 text-blue-400 p-3 rounded-full shadow-lg hover:bg-blue-500 hover:text-white transition"
      type="button"
    >
      <FaChevronLeft />
    </button>
  );
}

export default function Certifications() {
  const certificates = [
    {
      title: "AWS Cloud Practitioner",
      issuer: "AWS",
      image: awsImg,
    },
    {
      title: "Business & Finance Essentials",
      issuer: "AICPA & CIMA",
      image: businessImg,
    },
    {
      title: "Getting Started with Software Testing",
      issuer: "LinkedIn Learning",
      image: testingImg,
    },
    {
      title: "Programming Foundations: Software Testing/QA",
      issuer: "LinkedIn Learning",
      image: qaImg,
    },
    {
      title: "Digital Finance",
      issuer: "AICPA & CIMA",
      image: digitalFinanceImg,
    },
    {
      title: "Docker for Absolute Beginner - DevOps",
      issuer: "Udemy",
      image: dockerImg,
    },
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: true,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <section
      id="certifications"
      className="bg-gray-800 text-white px-6 md:px-20 py-20"
    >
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12 text-blue-400">
          Certifications
        </h2>

        <div className="relative">
          <Slider {...settings}>
            {certificates.map((cert, index) => (
              <div key={index} className="px-3">
                <div
                  className="bg-gray-900 rounded-xl overflow-hidden shadow-lg
                  hover:scale-105 transition-transform duration-300
                  hover:shadow-blue-500/30"
                >
                  <div className="bg-white">
                    <img
                      src={cert.image}
                      alt={cert.title}
                      className="w-full h-auto max-h-64 object-contain"
                    />
                  </div>

                  <div className="p-4">
                    <h3 className="text-lg font-semibold mb-1">
                      {cert.title}
                    </h3>
                    <p className="text-gray-400 text-sm">
                      {cert.issuer}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </section>
  );
}