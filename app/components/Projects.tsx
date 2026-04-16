"use client";
import ProjectCard from "./ProjectCard";

export default function Projects() {
  const projects = [
    {
      id: 1,
      title: "EcoJute – Ecommerce Platform",
      description:
        "Full-stack e-commerce application with Razorpay integration, admin dashboard, and secure authentication.",
      image: "/images/ecojute.png",
      liveDemo: "#",
    },
    {
      id: 2,
      title: "AI Resume Builder",
      description:
        "AI-powered resume generator with OpenAI API and smart suggestions.",
      image: "/images/resume.png",
      liveDemo: "#",
    },
    {
      id: 3,
      title: "Hotel Booking System",
      description:
        "Full-stack hotel booking application with real-time availability checks and payment integration.",
      image: "/images/vsheaven.png",
      liveDemo: "#",
    },
  ];
  return (
    <section id="projects" className=" text-black py-20 px-6 sm:px-10 lg:px-20 xl:px-40">
      {/* HEADER */}
      <div className="mb-12 max-w-2xl">
        <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight mb-4">
          FEATURED PROJECTS
        </h2>
        <p className="text-gray-400">
          These projects showcase my ability to build scalable full-stack
          applications using the MERN stack and modern technologies.
        </p>
      </div>

      {/* PROJECT CARD */}
      <div className="space-y-12">
        {projects.map((project, index) => (
          <ProjectCard key={index} {...project} index={index} />
        ))}
      </div>
    </section>
  );
}
