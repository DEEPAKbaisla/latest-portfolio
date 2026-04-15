"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import AnimatedButton from "./AnimatedButton";
import Counter from "./Count";
import { useInView } from "framer-motion";
import { useRef } from "react";

export default function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { amount: 0.5 });
  return (
    <section id="about" className=" text-black py-20 px-6 md:px-18">
      <div className="grid md:grid-cols-2 gap-12 items-center">
        {/* LEFT SIDE */}
        <div className="md:ml-15">
          <h2 className="text-5xl md:text-6xl font-bold mb-6 tracking-tight ">
            ABOUT ME
          </h2>
          {/* text-[#5e67e6]  dark mode*/}
          {/* #5e67e6 light mode   */}

          <p className="text-[#303030] mb-8 max-w-lg leading-relaxed text-[18px]">
            Hi, I'm <span className="font-semibold">Deepak Baisla</span> — a
            passionate Full Stack Developer I love building scalable web
            applications, crafting clean UI, and solving real-world problems
            through code.
          </p>

          {/* STATS */}
          <motion.div
            ref={ref}
            className="grid md:grid-cols-3 gap-6 md:gap-8 mb-10"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : 40 }}
            transition={{ duration: 0.6 }}>
            {/* Projects */}
            <div className="flex items-center gap-2 md:block">
              <h3 className="text-5xl font-bold text-[#5e67e6]">
                <Counter target={10} start={isInView} />+
              </h3>
              <p className="text-[#303030] text-xl font-bold">Projects Built</p>
            </div>

            {/* Experience */}
            <div className="flex items-center gap-2 md:block">
              <h3 className="text-5xl font-bold text-[#5e67e6]">
                <Counter target={1} start={isInView} />+
              </h3>
              <p className="text-[#303030] text-xl font-bold">
                Year of Experience
              </p>
            </div>

            {/* Clients */}
            <div className="flex items-center gap-2 md:block">
              <h3 className="text-5xl font-bold text-[#5e67e6]">
                <Counter target={5} start={isInView} />+
              </h3>
              <p className="text-[#303030] text-xl font-bold">
                Clients Worldwide
              </p>
            </div>
          </motion.div>

          {/* CONTACT */}
          <div className="flex flex-col md:flex-row gap-8 mb-8 text-sm text-gray-400">
            <div>
              <p className="text-[#303030] font-semibold text-2xl">Call:</p>
              <p className="text-[18px]">+91 7988901458</p>
            </div>

            <div>
              <p className="text-[#303030] font-semibold text-2xl">Email:</p>
              <p className="text-[18px]">dkbainsla8@gmail.com</p>
            </div>
          </div>

          {/* BUTTON */}
          <AnimatedButton
            fillColor="#5e67e6"
            className="border border-[#5e67e6] text-[#5e67e6] px-7 py-3 rounded-full hover:bg-[#5e67e6] hover:text-white transition font-antonio text-[26px] font-bold tracking-[0.2em]">
            MY STORY
          </AnimatedButton>
        </div>

        {/* RIGHT SIDE IMAGE */}
        <div className="flex justify-center">
          <div className="hidden md:block about-img-placeholder rounded-2xl overflow-hidden ">
            <Image
              src="/images/hero.png"
              alt="Deepak"
              width={400}
              height={500}
              className="object-cover md:opacity-0"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
