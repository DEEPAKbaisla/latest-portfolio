"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-start pt-8 justify-center px-6 md:px-10 overflow-hidden ">
      {/* MAIN GRID */}
      <div className="grid grid-cols-1 md:grid-cols-3 items-center gap-10 max-w-7xl w-full">
        {/* LEFT */}
        <div className={" text-center md:text-left "}>
          <p className=" font-antonio text-4xl mb-2 ">DEEPAK BAISLA</p>

          <motion.h1
            initial={{ opacity: 0, x: -80 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-[60px] md:text-[110px] font-bold leading-none whitespace-nowrap md:mr-10 md:mb-30">
            FULL STACK
          </motion.h1>
        </div>

        {/* CENTER IMAGE */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="md:flex justify-center relative hidden">
          <div className="rounded-2xl overflow-hidden">
            <Image
              src="/images/hero.png"
              alt="hero"
              width={350}
              height={450}
              priority 
              className="w-full h-auto object-cover"
            />
          </div>
          {/* bg-[#d0ff71] */}
          {/* Floating badge */}
          <div className="absolute -bottom-10 -left-10 bg-[#5e67e6] text-white px-10 py-8 rounded-full text-[32px] font-san">
            Hi
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="flex md:hidden justify-center relative">
          {/* Image */}
          <div className="rounded-2xl overflow-hidden w-64 h-80">
            <Image
              src="/images/hero.png"
              alt="hero"
              width={300}
              height={400}
              priority
              className="w-full h-auto object-cover relative"
            />
          </div>

          {/* Floating badge */}
          <div className="absolute bottom-5 left-2 bg-[#5e67e6] text-white px-7 py-6 rounded-full font-medium font-inter">
            Hi
          </div>
        </motion.div>

        {/* RIGHT */}
        <div className="text-center md:text-right">
          <motion.h1
            initial={{ opacity: 0, x: 80 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-[60px] md:text-[110px] font-bold leading-none">
            DEVELOPER
          </motion.h1>

          <p className="text-gray-400 mt-4 max-w-xs mx-auto md:ml-auto font-inter">
            I'm an India-based Full-Stack Web Developer
          </p>
        </div>
      </div>

      {/* Bottom Toggle */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2">
        {/* <div className="w-12 h-6 bg-lime-400 rounded-full flex items-center px-1">
          <div className="w-4 h-4 bg-black rounded-full" />
        </div> */}
      </div>
    </section>
  );
}
