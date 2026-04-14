"use client";

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { useState } from "react";

type FAQItem = {
  id: number;
  question: string;
  answer: string;
};

const faqs: FAQItem[] = [
  { id: 1,
    question: "What services do you offer?",
    answer:
      "I specialize in full-stack web development using the MERN stack. I build responsive UIs, RESTful APIs, and complete web applications.",
  },
  {id: 2,
    question: "What technologies do you work with?",
    answer:
      "I work with React.js, Node.js, Express.js, MongoDB, TypeScript, Tailwind CSS, Redux, and Git.",
  },
  {id: 3,
    question: "How does your development process work?",
    answer:
      "I follow a structured process: requirement analysis, UI/UX design, development, API integration, testing, and deployment.",
  },
  {id: 4,
    question: "What projects have you worked on?",
    answer:
      "I built EcoJute (e-commerce platform with Razorpay) and an AI Resume Builder using OpenAI API.",
  },
  { id: 5,
    question: "Do you offer revisions?",
    answer:
      "Yes, I refine the project based on feedback to ensure the best quality and user experience.",
  },
  { id: 6,
    question: "How do I get started?",
    answer:
      "You can contact me via email or LinkedIn, and we can discuss your project requirements.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className=" text-black py-16 px-6 md:px-36">
      <div className="grid md:grid-cols-2 gap-10 items-start">
        
        {/* LEFT SIDE */}
        <div>
          <h2 className="text-5xl md:text-6xl font-bold mb-6 ">
            FREQUENTLY ASKED QUESTIONS
          </h2>
          <p className="text-[#303030] text-[18px] leading-relaxed font-inter">
            Here are answers to some of the most common questions I receive as a
            developer. If you don’t see your question here, feel free to reach
            out—I’m happy to help!
          </p>
        </div>

        {/* RIGHT SIDE */}
        <Accordion type="single" collapsible className="w-full space-y-4">
  {faqs.map((faq) => (
    <AccordionItem
      key={faq.id}
      value={`item-${faq.id}`}
      className="border-b border-gray-700"
    >
      <AccordionTrigger className="text-left text-lg md:text-[26px] font-semibold hover:no-underline transition-colors data-[state=open]:text-[#5e67e6]">
        {faq.id}. {faq.question}
      </AccordionTrigger>

      <AccordionContent className=" text-[#303030] text-[18px] pb-2 font-inter">
        {faq.answer}
      </AccordionContent>
    </AccordionItem>
  ))}
</Accordion>

      </div>
    </section>
  );
}