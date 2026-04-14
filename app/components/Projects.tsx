"use client";

import { i } from "framer-motion/client";
import ProjectCard from "./ProjectCard";

export default function Projects() {


  const projects = [
  { id: 1,
    title: "EcoJute – Ecommerce Platform",
    description:
      "Full-stack e-commerce application with Razorpay integration, admin dashboard, and secure authentication.",
    image: "/images/ecojute.png",
    liveDemo: "#",
  },
  {id: 2,
    title: "AI Resume Builder",
    description:
      "AI-powered resume generator with OpenAI API and smart suggestions.",
    image: "/images/resume.png",
    liveDemo: "#",
  },
]
  return (
    <section className=" text-black py-20 px-6 md:px-36">
      
      {/* HEADER */}
      <div className="mb-12 max-w-2xl">
        <h2 className="text-5xl md:text-6xl font-bold tracking-tight mb-4">
          FEATURED PROJECTS
        </h2>
        <p className="text-gray-400">
          These projects showcase my ability to build scalable full-stack
          applications using the MERN stack and modern technologies.
        </p>
      </div>

      {/* PROJECT CARD */}
     <div className="space-y-12">
  {projects.map((project) => (
    <ProjectCard key={project.id} {...project} />
  ))}
</div>
    </section>
  );
}


