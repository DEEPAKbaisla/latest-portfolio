"use client";

import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { useEffect, useState } from "react";
import Image from "next/image";
import TextStack from "@/app/components/Textstack";

export default function ScrollFlippingImage() {
  const [rects, setRects] = useState({
    hero: { top: 0, left: 0, width: 350, height: 450 },
    services: { top: 800, left: 400, width: 380, height: 400 },
    about: { top: 1600, left: 400, width: 400, height: 500 }
  });

  const [isReady, setIsReady] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const updateRects = () => {
      const mobile = window.innerWidth < 768;
      setIsMobile(mobile);
      
      if (mobile) return; // Don't calculate rects if mobile
      const getVisibleEl = (className: string) => {
        const els = document.getElementsByClassName(className);
        for (let i = 0; i < els.length; i++) {
          if (els[i].getBoundingClientRect().width > 0) return els[i] as HTMLElement;
        }
        return null;
      };
      
      const heroEl = getVisibleEl("hero-img-placeholder");
      const servicesEl = getVisibleEl("services-img-placeholder");
      const aboutEl = getVisibleEl("about-img-placeholder");

      const getDocRect = (el: HTMLElement) => {
        const rect = el.getBoundingClientRect();
        return {
          top: rect.top + window.scrollY,
          left: rect.left + window.scrollX,
          width: rect.width,
          height: rect.height,
        };
      };

      if (heroEl && servicesEl && aboutEl) {
        setRects({
          hero: getDocRect(heroEl),
          services: getDocRect(servicesEl),
          about: getDocRect(aboutEl)
        });
        setIsReady(true);
      }
    };

    updateRects();
    window.addEventListener("resize", updateRects);
    
    const interval = setInterval(updateRects, 1000);

    return () => {
      window.removeEventListener("resize", updateRects);
      clearInterval(interval);
    };
  }, []);

  const { scrollY } = useScroll();
  const smoothScrollY = useSpring(scrollY, { stiffness: 150, damping: 25, mass: 0.5 });

  const [winHeight, setWinHeight] = useState(800);
  useEffect(() => {
    setWinHeight(window.innerHeight);
  }, []);

  const t1Start = 20;   // flip starts earlier
  const t1End = t1Start + 250; // flip finishes much faster
  
  const t2Start = Math.max(t1End + 100, rects.about.top - winHeight);
  const t2End = rects.about.top - winHeight / 4;

  const top = useTransform(
    smoothScrollY,
    [0, t1Start, t1End, t2Start, t2End],
    [rects.hero.top, rects.hero.top, rects.services.top, rects.services.top, rects.about.top]
  );

  const left = useTransform(
    smoothScrollY,
    [0, t1Start, t1End, t2Start, t2End],
    [rects.hero.left, rects.hero.left, rects.services.left, rects.services.left, rects.about.left]
  );

  const width = useTransform(
    smoothScrollY,
    [0, t1Start, t1End, t2Start, t2End],
    [rects.hero.width, rects.hero.width, rects.services.width, rects.services.width, rects.about.width]
  );

  const height = useTransform(
    smoothScrollY,
    [0, t1Start, t1End, t2Start, t2End],
    [rects.hero.height, rects.hero.height, rects.services.height, rects.services.height, rects.about.height]
  );

  const rotateY = useTransform(
    smoothScrollY,
    [0, t1Start, t1End, t2Start, t2End],
    [0, 0, 180, 180, 360]
  );

  // Badge fades out as it leaves Hero, stays hidden at About
  const badgeOpacity = useTransform(
    smoothScrollY,
    [0, t1Start, t1Start + (t1End - t1Start) * 0.3],
    [1, 1, 0]
  );

  if (!isReady || isMobile) return null;

  return (
    <motion.div
      style={{
        position: "absolute",
        top,
        left,
        width,
        height,
        perspective: 1000,
        zIndex: 50,
        pointerEvents: "none"
      }}
    >
      <motion.div
        style={{
          width: "100%",
          height: "100%",
          position: "relative",
          transformStyle: "preserve-3d",
          rotateY
        }}
      >
         {/* Front Face (Hero & About) */}
         <div 
          className="absolute inset-0"
          style={{ backfaceVisibility: "hidden" }}
         >
           <div className="absolute inset-0 rounded-2xl overflow-hidden shadow-2xl">
             <Image
               src="/images/hero.png"
               alt="Hero"
               fill
               className="object-cover"
               priority
             />
           </div>
           
           {/* Floating badge — only visible during Hero, fades out before flip */}
           <motion.div 
             style={{ opacity: badgeOpacity }}
             className="hidden md:block absolute -bottom-10 -left-10 bg-[#5e67e6] text-white px-10 py-8 rounded-full text-[32px] font-san pointer-events-auto"
           >
             <TextStack />
           </motion.div>
           
           <motion.div 
             style={{ opacity: badgeOpacity }}
             className="md:hidden absolute bottom-5 left-2 bg-[#5e67e6] text-white px-7 py-6 rounded-full font-medium font-inter pointer-events-auto z-10"
           >
             <TextStack />
           </motion.div>
         </div>

         {/* Back Face (Services) */}
         <div 
          className="absolute inset-0 rounded-2xl overflow-hidden "
          style={{ 
            backfaceVisibility: "hidden", 
            transform: "rotateY(180deg)" 
          }}
         >
           <Image
             src="/images/work.jpg"
             alt="Services"
             fill
             className="object-cover w-full h-full"
           />
         </div>
      </motion.div>
    </motion.div>
  );
}
