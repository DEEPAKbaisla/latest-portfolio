"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

type FAQItem = {
  id: number;
  question: string;
  answer: string;
};

const faqs: FAQItem[] = [
  {
    id: 1,
    question: "What services do you offer?",
    answer:
      "I specialize in full-stack web development using the MERN stack. I build responsive UIs, RESTful APIs, and complete web applications.",
  },
  {
    id: 2,
    question: "What technologies do you work with?",
    answer:
      "I work with React.js, Node.js, Express.js, MongoDB, TypeScript, Tailwind CSS, Redux, and Git.",
  },
  {
    id: 3,
    question: "How does your development process work?",
    answer:
      "I follow a structured process: requirement analysis, UI/UX design, development, API integration, testing, and deployment.",
  },
  {
    id: 4,
    question: "What projects have you worked on?",
    answer:
      "I built EcoJute (e-commerce platform with Razorpay) and an AI Resume Builder using OpenAI API.",
  },
  {
    id: 5,
    question: "Do you offer revisions?",
    answer:
      "Yes, I refine the project based on feedback to ensure the best quality and user experience.",
  },
  {
    id: 6,
    question: "How do I get started?",
    answer:
      "You can contact me via email or LinkedIn, and we can discuss your project requirements.",
  },
];

export default function FAQ() {
  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  // subtle parallax on right side only
  const yRight = useTransform(scrollYProgress, [0, 1], [0, -120]);

  // accordion 
  const FAQList = ({ isMobile = false }: { isMobile?: boolean }) => (
    <Accordion
      type="single"
      collapsible
      className={`w-full ${isMobile ? "space-y-4" : "space-y-6"}`}>
      {faqs.map((faq, i) => (
        <motion.div
          key={faq.id}
          initial={{ opacity: 0, y: isMobile ? 0 : 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: isMobile ? 0 : i * 0.08 }}
          viewport={{ once: true }}>
          <AccordionItem
            value={`item-${faq.id}`}
            className={`border-b ${
              isMobile
                ? "border-gray-700 data-[state=open]:border-[rgb(94,103,230)]"
                : "border-gray-300 data-[state=open]:border-[#5e67e6]"
            }`}>
            <AccordionTrigger
              className={`text-left font-semibold hover:no-underline transition-colors data-[state=open]:text-[#5e67e6] ${
                isMobile ? "text-lg" : "text-lg md:text-[24px]"
              }`}>
              {faq.id}. {faq.question}
            </AccordionTrigger>

            <AccordionContent
              className={`text-[#303030] font-inter ${
                isMobile ? "text-[18px] pb-2" : "text-[17px] pb-4"
              }`}>
              {faq.answer}
            </AccordionContent>
          </AccordionItem>
        </motion.div>
      ))}
    </Accordion>
  );

  return (
    <>
      <motion.section
        ref={ref}
        className="hidden md:block text-black py-20 px-6 md:px-36">
        <div className="grid md:grid-cols-2 gap-16">
          {/* 🔥 LEFT SIDE (STICKY) */}
          <div className="h-fit sticky top-28">
            <motion.div
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}>
              <h2 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
                FREQUENTLY <br /> ASKED QUESTIONS
              </h2>

              <p className="text-[#303030] text-[18px] leading-relaxed font-inter max-w-md">
                Here are answers to some of the most common questions I receive
                as a developer. If you don’t see your question here, feel free
                to reach out—I’m happy to help!
              </p>
            </motion.div>
          </div>

          {/* 🔥 RIGHT SIDE (SCROLLING FAQ) */}
          <motion.div style={{ y: yRight }}>
            <FAQList />
          </motion.div>
        </div>
      </motion.section>
      <section className="md:hidden text-black py-16 px-6 md:px-36">
        <div className="grid md:grid-cols-2 gap-10 items-start">
          {/* LEFT SIDE */}
          <div>
            <h2 className="text-5xl md:text-6xl font-bold mb-6 ">
              FREQUENTLY ASKED QUESTIONS
            </h2>
            <p className="text-[#303030] text-[18px] leading-relaxed font-inter">
              Here are answers to some of the most common questions I receive as
              a developer. If you don’t see your question here, feel free to
              reach out—I’m happy to help!
            </p>
          </div>

          {/* RIGHT SIDE */}
         
          <FAQList isMobile />
        </div>
      </section>
    </>
  );
}
