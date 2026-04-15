
"use client";

import { motion } from "motion/react";
import { useState } from "react";

interface AnimatedButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  fillColor?: string;
}

export default function AnimatedButton({
  children,
  className = "",
  fillColor = "#5e67e6",
  ...props
}: AnimatedButtonProps) {
  const [hovered, setHovered] = useState(false);

  return (
    <button
      {...props}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className={`relative overflow-hidden cursor-pointer ${className}`}
    >
      <motion.span
        aria-hidden
        initial={{ scale: 0, x: "-50%", y: "50%" }}
        animate={
          hovered
            ? { scale: 4, x: "-50%", y: "50%" }
            : { scale: 0, x: "-50%", y: "50%" }
        }
        transition={{ duration: 0.4, ease: [0.25, 0.46, 0.45, 0.94] }}
        style={{
          position: "absolute",
          left: "25%",
          bottom: 0,
          width: "100%",
          aspectRatio: "1",
          borderRadius: "50%",
          background: fillColor,
          pointerEvents: "none",
          zIndex: 0,
        }}
      />

      <span className="relative z-10">{children}</span>
    </button>
  );
}