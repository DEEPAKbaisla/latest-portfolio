"use client";

import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { useState } from "react";

export default function Services() {
  const items = [
    {
      id: "item-1",
      title: "💻 Full-Stack Development",
      image: "/images/fullstack.jpg",
      points: [
        "Build complete web applications using MERN stack",
        "Develop scalable backend APIs and database systems",
        "Connect frontend and backend seamlessly",
      ],
    },
    {
      id: "item-2",
      title: "🎨 Modern & Responsive UI",
      image: "/images/modernUI.jpg",
      points: [
        "Create clean, responsive, and mobile-friendly designs",
        "Build interactive interfaces using React & Tailwind CSS",
        "Ensure smooth user experience across all devices",
      ],
    },
    {
      id: "item-5",
      title: "🤖 AI Integration",
      image: "/images/ai.jpg",
      points: [
        "Add AI-powered features using OpenAI API",
        "Build tools like AI Resume Builder",
        "Automate content generation and suggestions",
      ],
    },
    {
      id: "item-7",
      title: "🛠️ Performance Optimization",
      image: "/images/optimize.jpg",
      points: [
        "Optimize apps for speed and performance",
        "Write clean, maintainable code",
        "Improve loading times and responsiveness",
      ],
    },
  ];

  const [hovered, setHovered] = useState<(typeof items)[0] | null>(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    setPosition({
      x: e.clientX,
      y: e.clientY,
    });
  };

  return (
    <section id="services" className=" text-black py-20 px-6 sm:px-10 lg:px-20">
      <div className="grid md:grid-cols-2 gap-12 items-center">
        {/* LEFT SIDE */}
        <div className="lg:ml-15">
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 tracking-tight">
            WHAT I CAN DO FOR YOU
          </h2>

          <p className=" font-inter mb-10 max-w-lg">
            As a digital designer, I am a visual storyteller, crafting
            experiences that connect deeply and spark creativity.
          </p>

          {/* ACCORDION */}

          <div className="relative" onMouseMove={handleMouseMove}>
            {/* Accordion */}
            <Accordion type="single" collapsible className="w-full space-y-4">
              {items.map((item) => (
                <AccordionItem
                  key={item.id}
                  value={item.id}
                  onMouseEnter={() => setHovered(item)}
                  onMouseLeave={() => setHovered(null)}
                  className="border-b border-gray-300 transition-colors  
             data-[state=open]:border-[#5e67e6]">
                  <AccordionTrigger className="text-2xl hover:no-underline hover:text-[#5e67e6] data-[state=open]:text-[#5e67e6]">
                    {item.title}
                  </AccordionTrigger>

                  <AccordionContent>
                    <ul className="list-['✔'] marker:text-[#5e67e6] ml-6 space-y-2 text-[#303030] text-[18px] ">
                      {item.points.map((point, i) => (
                        <li key={i}>{point}</li>
                      ))}
                    </ul>
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
            {/* Floating Image */}
            <AnimatePresence>
              {hovered?.image && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{
                    opacity: 1,
                    left: position.x + 20,
                    top: position.y - 80,
                  }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.2, ease: "easeOut" }}
                  className="fixed z-[9999] pointer-events-none">
                  <div className="hidden md:block w-[220px] h-[150px] rounded-xl overflow-hidden  bg-black">
                    <Image
                      src={hovered.image}
                      alt="preview"
                      priority
                      width={220}
                      height={150}
                      className="object-cover w-full h-full"
                    />
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>

        {/* RIGHT SIDE IMAGE */}
        <motion.div
          initial={{ rotate: -6, opacity: 0, y: 50 }}
          whileInView={{ rotate: 0, opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="flex justify-center ">
          <div className=" hidden md:block services-img-placeholder rounded-2xl overflow-hidden ">
            <Image
              src="/images/work.jpg"
              alt="workspace"
              width={380}
              height={400}
              priority
              className="object-cover w-full h-full md:opacity-0 rotate-6"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
