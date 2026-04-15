"use client";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Menu, X } from "lucide-react";
import Image from "next/image";
import AnimatedButton from "@/app/components/AnimatedButton";

const Navbar1 = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrollingDown, setIsScrollingDown] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > 100) {
        if (currentScrollY > lastScrollY) {
          setIsScrollingDown(true);
        } else {
          setIsScrollingDown(false);
        }
      } else {
        setIsScrollingDown(false);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <div className="fixed top-0 left-0 right-0 z-50 flex justify-center py-6 px-4 pointer-events-none">
      <motion.div
        style={{ pointerEvents: "auto" }}
        animate={{
          width: isMobile ? "320px" : isScrollingDown ? "280px" : "550px",
        }}
        transition={{ duration: 0.4, ease: "easeInOut" }}
        className="flex items-center justify-between px-6 py-3 bg-white rounded-full border-1 relative z-10 shadow-sm overflow-hidden">
        <div className="flex items-center justify-center shrink-0">
          <div>
            <Image
              src="/images/nav.png"
              alt="profile"
              width={40}
              height={32}
              priority
              className="rounded-full object-cover w-10 h-10"
            />
          </div>
        </div>

        <AnimatePresence mode="wait">
          {!isScrollingDown && !isMobile ? (
            <motion.div
              key="nav-links"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              className="hidden md:flex items-center space-x-8">
              <nav className="flex items-center space-x-8">
                {["Home", "About", "Projects", "Blogs"].map((item) => (
                  <motion.div key={item} whileHover={{ scale: 1.05 }}>
                    <a
                      href={`#${item.toLowerCase()}`}
                      className="text-[16px] text-gray-900 hover:text-[#5e67e6] transition-colors font-medium font-inter">
                      {item}
                    </a>
                  </motion.div>
                ))}
              </nav>

              <a href="#contact">
                <AnimatedButton
                  fillColor="#5e67e6"
                  className="border text-white px-7 py-3 rounded-full hover:bg-[#5e67e6] hover:text-white transition font-inter text-[16px] font-medium bg-[#1a1a1a]">
                  Contact
                </AnimatedButton>
              </a>
            </motion.div>
          ) : (
            <motion.div
              key="status-badge"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              className="flex items-center space-x-3 md:space-x-5 whitespace-nowrap">
              <span className="text-[16px]  text-gray-800 font-inter">
                Available for work
              </span>
              <span className="relative flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
              </span>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Mobile Menu Button - Always visible or only when not status? */}
        {/* User said "show ONLY available for work", but usually you still want a menu button on mobile. */}
        {/* However, for desktop, it will shrink and show the text. */}

        <motion.button
          className="md:hidden flex items-center"
          onClick={toggleMenu}
          whileTap={{ scale: 0.9 }}>
          <Menu className="h-6 w-6 text-gray-900" />
        </motion.button>
      </motion.div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            style={{ pointerEvents: "auto" }}
            className="fixed inset-0 bg-white z-50 pt-24 px-6 md:hidden"
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}>
            <motion.button
              className="absolute top-6 right-6 p-2"
              onClick={toggleMenu}
              whileTap={{ scale: 0.9 }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}>
              <X className="h-6 w-6 text-gray-900" />
            </motion.button>
            <div className="flex flex-col space-y-6">
              {["Home", "About", "Projects", "Blogs"].map((item, i) => (
                <motion.div
                  key={item}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.1 + 0.1 }}
                  exit={{ opacity: 0, x: 20 }}>
                  <a
                    href={`#${item.toLowerCase()}`}
                    className="text-base text-gray-900 font-medium"
                    onClick={toggleMenu}>
                    {item}
                  </a>
                </motion.div>
              ))}

              <button 
                onClick={toggleMenu}
                className="relative px-8 py-3 rounded-full border border-[#5e67e6] text-[#5e67e6] overflow-hidden font-medium"
              >
                {/* Text */}
                <a href="#contact">
                  <span className="relative z-10">Contact Me</span>
                </a>
                

                {/* Animated Background */}
                {/* <motion.span
                    variants={{
                      rest: { x: "-100%" },
                      hover: { x: "0%" },
                    }}
                    transition={{ duration: 0.4, ease: "easeInOut" }}
                    className="absolute inset-0 bg-[#5e67e6]"
                  /> */}

                {/* Text color change on hover */}
                {/* <motion.span
                    variants={{
                      rest: { color: "#5e67e6" },
                      hover: { color: "#ffffff" },
                    }}
                    transition={{ duration: 0.3 }}
                    className="absolute inset-0 flex items-center justify-center">
                    Contact Me
                  </motion.span> */}
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export { Navbar1 };
