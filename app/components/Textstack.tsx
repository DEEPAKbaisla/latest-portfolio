
"use client";

import { useState, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { IoHandLeftOutline } from "react-icons/io5";

const words = ["Hii", "hand"];

export default function TextStack() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % words.length);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex items-center gap-3 text-5xl font-bold">
      <div className="relative h-[60px] w-[40px] overflow-hidden">
        <AnimatePresence mode="popLayout">
          <motion.span
            key={index}
            initial={{ y: 60, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -60, opacity: 0 }}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
            className="absolute inset-0 flex items-center text-white font-inter text-[32px]"
          >
            {index === 1 ? (
              <motion.span
                animate={{ rotate: [0, 20, -10, 20, -5, 10, 0] }}
                transition={{
                  duration: 1.2,
                  ease: "easeInOut",
                  delay: 0.5,         // wait for slide-in to finish first
                  repeat: Infinity,
                  repeatDelay: 0.8,   // pause between each wave
                }}
                style={{ display: "inline-block", transformOrigin: "70% 80%" }}
              >
                <IoHandLeftOutline color="white" />
              </motion.span>
            ) : (
              words[index]
            )}
          </motion.span>
        </AnimatePresence>
      </div>
    </div>
  );
}