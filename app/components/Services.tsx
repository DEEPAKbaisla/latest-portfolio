"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export default function Services() {
  return (
    <section className=" text-black py-20 px-6 md:px-16">
      <div className="grid md:grid-cols-2 gap-10 items-center">
        {/* LEFT SIDE */}
        <div className="md:ml-15">
          <h2 className="text-5xl md:text-6xl font-bold mb-6 tracking-tight">
            WHAT I CAN DO FOR YOU
          </h2>

          <p className=" font-inter mb-10 max-w-lg">
            As a digital designer, I am a visual storyteller, crafting
            experiences that connect deeply and spark creativity.
          </p>

          {/* ACCORDION */}
          <Accordion type="single" collapsible className="w-full space-y-4">
            <AccordionItem value="item-1">
              <AccordionTrigger className="text-2xl hover:no-underline">
                💻 Full-Stack Development
              </AccordionTrigger>
              <AccordionContent>
                <ul className="list-['✔'] marker:text-[#5e67e6] ml-6 space-y-2 text-[#303030] text-[18px] ">
                  <li>Build complete web applications using MERN stack</li>
                  <li>Develop scalable backend APIs and database systems</li>
                  <li>Connect frontend and backend seamlessly</li>
                </ul>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-2">
              <AccordionTrigger className="text-2xl hover:no-underline ">
                🎨 Modern & Responsive UI
              </AccordionTrigger>
              <AccordionContent>
                <ul className="list-['✔'] marker:text-[#5e67e6]  space-y-2 text-[#303030] text-[18px] ml-6">
                  <li>Create clean, responsive, and mobile-friendly designs</li>
                  <li>
                    Build interactive interfaces using React & Tailwind CSS
                  </li>
                  <li>Ensure smooth user experience across all devices</li>
                </ul>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-5">
              <AccordionTrigger className="text-2xl hover:no-underline">
                🤖 AI Integration
              </AccordionTrigger>
              <AccordionContent>
                <ul className="list-['✔'] marker:text-[#5e67e6]  space-y-2 text-[#303030] text-[18px] ml-6">
                  <li>Add AI-powered features using OpenAI API</li>
                  <li>Build tools like AI Resume Builder</li>
                  <li>Automate content generation and suggestions</li>
                </ul>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-7">
              <AccordionTrigger className="text-2xl hover:no-underline">
                🛠️ Performance Optimization
              </AccordionTrigger>
              <AccordionContent className="pb-3 ">
                <ul className="list-['✔'] marker:text-[#5e67e6]  space-y-2 text-[#303030] text-[18px] ml-6">
                  <li>Optimize apps for speed and performance</li>
                  <li>Write clean, maintainable code</li>
                  <li>Improve loading times and responsiveness</li>
                </ul>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-8">
              <AccordionTrigger className="text-2xl hover:no-underline">
                🤝 Collaboration & Opportunities
              </AccordionTrigger>
              <AccordionContent>
                <ul className="list-['✔'] marker:text-[#5e67e6]  space-y-2 text-[#303030] text-[18px] ml-6">
                  <li>Open to internships and freelance work</li>
                  <li>Comfortable working in team environments</li>
                  <li>Always learning and improving</li>
                </ul>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>

        {/* RIGHT SIDE IMAGE */}
        <motion.div
          initial={{ rotate: -6, opacity: 0, y: 50 }}
          whileInView={{ rotate: 0, opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="flex justify-center ">
          <div className="rounded-2xl overflow-hidden shadow-2xl">
            <Image
              src="/images/hero.png"
              alt="workspace"
              width={400}
              height={500}
              priority
              className="object-cover w-full h-full  hidden md:block "
              // rotate-6
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
