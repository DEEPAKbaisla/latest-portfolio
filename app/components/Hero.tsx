"use client";

import Image from "next/image";
import TextStack from "@/app/components/Textstack"
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section id="home" className="relative mt-28 md:mb-20 flex items-start pt-8 justify-center px-6 md:px-10 overflow-hidden">
      {/* MAIN GRID */}
      <div className="grid grid-cols-1 md:grid-cols-3 items-center gap-10 max-w-7xl w-full">
        
        {/* LEFT COLUMN */}
        <div className="text-center md:text-left z-20">
          <p className="font-antonio text-3xl md:text-4xl mb-2">DEEPAK BAISLA</p>

          <motion.h1
            initial={{ opacity: 0, x: -80 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-[60px] lg:text-[110px] font-bold leading-none md:whitespace-nowrap"
          >
            FULL STACK
          </motion.h1>
        </div>

        {/* CENTER IMAGE */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="md:flex justify-center relative hidden z-10"
        >
          <div id="hero-image-placeholder" className="hero-img-placeholder rounded-2xl overflow-hidden">
            <Image
              src="/images/hero.png"
              alt="hero"
              width={350}
              height={450}
              priority
              className="w-[350px] h-[450px] object-cover opacity-0"
            />
          </div>
        </motion.div>

        {/* MOBILE IMAGE */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="flex md:hidden justify-center relative "
        >
          <div className="hero-img-placeholder rounded-2xl overflow-hidden w-64 h-80 shadow-xl">
            <Image
              src="/images/hero.png"
              alt="hero"
              width={300}
              height={400}
              priority
              className="w-full h-full object-cover relative"
            />
          </div>

          <div className="absolute bottom-5 left-2 bg-[#5e67e6] text-white px-7 py-6 rounded-full font-medium font-inter pointer-events-auto z-10">
            <TextStack />
          </div>
        </motion.div>

        {/* RIGHT COLUMN */}
        <div className="text-center md:text-right z-20">
          <motion.h1
            initial={{ opacity: 0, x: 80 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-[60px] lg:text-[110px] font-bold leading-none md:whitespace-nowrap md:mt-30"
          >
            DEVELOPER
          </motion.h1>

          <p className="text-gray-400 mt-4 max-w-xs mx-auto md:ml-auto font-inter">
            I'm an India-based Full-Stack Web Developer
          </p>
        </div>
      </div>
    </section>
  );
}
