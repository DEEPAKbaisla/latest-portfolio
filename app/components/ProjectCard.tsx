"use client"

import Image from "next/image"

type Project = {
  title: string
  description: string
  image: string
  liveDemo: string
}

const ProjectCard = ({ title, description, image, liveDemo }: Project) => {
  return (
    <div className="relative w-full h-[650px] group overflow-hidden rounded-4xl">
      
      {/* IMAGE */}
      <Image
        src={image}
        alt={title}
        fill
        priority
        className="object-cover w-full h-full"
      />

      {/* OVERLAY */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />

      {/* CONTENT */}
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-6 z-10">
        
        <h3 className="text-2xl md:text-6xl font-bold mb-4 text-white">
          {title}
        </h3>

        <p className="text-gray-300 mb-4 max-w-xl text-[20px]">
          {description}
        </p>

        {/* HOVER BUTTON */}
        <div className="mt-6 opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
          <a
            href={liveDemo}
            className="px-6 py-3 bg-[#5e67e6] text-white rounded-full text-sm font-semibold font-antonio "
          >
            Live Demo
          </a>
        </div>

      </div>
    </div>
  )
}

export default ProjectCard