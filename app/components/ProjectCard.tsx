// "use client"

// import Image from "next/image"

// type Project = {
//   title: string
//   description: string
//   image: string
//   liveDemo: string
// }

// const ProjectCard = ({ title, description, image, liveDemo }: Project) => {
//   return (
//     <div className="sticky top-0 w-full h-[650px] group overflow-hidden rounded-4xl">
      
//       {/* IMAGE */}
//       <Image
//         src={image}
//         alt={title}
//         fill
//         priority
//         className="object-cover w-full h-full"
//       />

//       {/* OVERLAY */}
//       <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />

//       {/* CONTENT */}
//       <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-6 z-10">
        
//         <h3 className="text-2xl md:text-6xl font-bold mb-4 text-white">
//           {title}
//         </h3>

//         <p className="text-gray-300 mb-4 max-w-xl text-[20px]">
//           {description}
//         </p>

//         {/* HOVER BUTTON */}
//         <div className="mt-6 opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
//           <a
//             href={liveDemo}
//             className="px-6 py-3 bg-[#5e67e6] text-white rounded-full text-sm font-semibold font-antonio "
//           >
//             Live Demo
//           </a>
//         </div>

//       </div>
//     </div>
//   )
// }

// export default ProjectCard


"use client"

import Image from "next/image"
import { motion, useScroll, useTransform } from "framer-motion"
import { useRef, useState } from "react"

type Project = {
  title: string
  description: string
  image: string
  liveDemo: string
  index: number
}

const ProjectCard = ({ title, description, image, liveDemo, index }: Project) => {
  const ref = useRef(null)
  const [open, setOpen] = useState(false);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "start start"],
  })

  // 👇 Scale animation
  const scale = useTransform(
    scrollYProgress,
    [0, 1],
    index === 0 ? [1, 0.9] : [1.1, 1]
  )

  return (
    <>
    <motion.div
      ref={ref}
      style={{ scale }}
      className="hidden md:block sticky top-0 w-full h-[650px] group overflow-hidden rounded-4xl"
    >
      {/* IMAGE */}
      <Image
        src={image}
        alt={title}
        fill
        priority
        className="object-cover  w-full h-full"
      />

      {/* OVERLAY */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />

      {/* CONTENT */}
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-6 z-10">
        
        <h3 className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 text-white">
          {title}
        </h3>

        <p className="text-gray-300 mb-4 max-w-xl text-[20px]">
          {description}
        </p>

        <div className="mt-6 opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
          <a
            href={liveDemo}
            className="px-6 py-3 bg-[#5e67e6] text-white rounded-full text-sm font-semibold font-antonio"
          >
            Live Demo
          </a>
        </div>
      </div>
    </motion.div>
    {/* MOBILE CARD */}
 <div className="md:hidden w-full">

      {/* IMAGE CARD */}
      <div
        onClick={() => setOpen(!open)}
        className="relative w-full h-[260px] rounded-3xl overflow-hidden"
      >
        <Image
          src={image}
          alt={title}
          fill
          priority
          className="object-cover"
          sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
        />

        {/* DARK OVERLAY */}
        <div className="absolute inset-0 bg-black/30" />

        {/* TITLE (ON CLICK) */}
        <div
          className={`absolute inset-0 flex items-center justify-center transition-all duration-300 ${
            open ? "opacity-100" : "opacity-0"
          }`}
        >
          <h3 className="text-white text-2xl font-bold text-center px-4">
            {title}
          </h3>
        </div>
      </div>

      {/* DESCRIPTION BELOW IMAGE */}
      <div className="mt-4 px-2">
        <p className="text-[#303030] text-[16px] leading-relaxed font-antonio">
          {description}
        </p>

        <a
          href={liveDemo}
          className="inline-block mt-4 px-5 py-2 bg-[#5e67e6] text-white rounded-full text-sm font-semibold font-inter"
        >
          Live Demo
        </a>
      </div>
    </div>
    </>
  )
}

export default ProjectCard