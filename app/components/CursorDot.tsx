
"use client";

import { useEffect, useRef } from "react";

export default function CursorDot() {
  const dotRef = useRef<HTMLDivElement>(null);

  const mouse = useRef({ x: 0, y: 0 });
  const pos = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const move = (e: MouseEvent) => {
      mouse.current.x = e.clientX;
      mouse.current.y = e.clientY;
    };

    window.addEventListener("mousemove", move);

    const speed = 0.07;

    const animate = () => {
      pos.current.x += (mouse.current.x - pos.current.x) * speed;
      pos.current.y += (mouse.current.y - pos.current.y) * speed;

      if (dotRef.current) {
        dotRef.current.style.transform = `translate(${pos.current.x+15}px, ${pos.current.y+10}px)`;
      }

      requestAnimationFrame(animate);
    };

    animate();

    return () => window.removeEventListener("mousemove", move);
  }, []);

  return (
    <div
    ref={dotRef}
    // className="fixed top-0 left-0 w-4 h-4 bg-lime-400 rounded-full pointer-events-none z-50 "
    
      className="fixed top-0 left-0 w-4 h-4 bg-[#5e67e6] rounded-full pointer-events-none z-50 "
    />
  );
}