"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import { fadeUp } from "@/app/lib/animations";

export default function Contact() {
  return (
    <section id="contact" className="py-32 px-6 md:px-16 text-black">
      <div className="grid md:grid-cols-2 gap-12 items-center">

        {/* LEFT IMAGE */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          className="flex justify-center"
        >
          {/* <div className="rounded-2xl overflow-hidden shadow-2xl ">
            <Image
              src="/images/hero.png"
              alt="Deepak"
              width={400}
              height={500}
              className="object-cover"
            />
          </div> */}

          <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8 }}
                    className="hidden md:flex justify-center relative ">
                    <div className="rounded-2xl overflow-hidden">
                      <Image
                        src="/images/hero.png"
                        alt="hero"
                        width={350}
                        height={450}
                        priority
                        className="object-cover w-full h-auto"
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
                            <div className="absolute bottom-5 right-53 bg-[#5e67e6] text-white px-7 py-6 rounded-full font-medium font-inter">
                              Hi
                            </div>
                          </motion.div>
                  
        </motion.div>

        {/* RIGHT CONTENT */}
        <div>
          <motion.h2
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            className="text-4xl md:text-6xl font-bold mb-6 uppercase"
          >
            Let’s work together
          </motion.h2>

          <motion.p
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            className="text-gray-500 mb-10 max-w-lg text-[16px] font-inter"
          >
            I'm open to internships, freelance work, and collaborations.
            Let’s build something impactful together.
          </motion.p>

          {/* FORM */}
         

<motion.form
  variants={fadeUp}
  initial="hidden"
  whileInView="show"
  className="space-y-6"
>
  {/* NAME + EMAIL */}
  <div className="grid md:grid-cols-2 gap-6">

    {/* NAME */}
    <div className="relative">
      <label
        htmlFor="name"
        className="block mb-1 text-sm text-[#5e67e6]"
      >
        Your Name
      </label>
      <input
        id="name"
        type="text"
        placeholder="John Doe"
        className="w-full px-4 py-3 rounded-full bg-gray-200 border border-white/10 outline-none focus:border-[#5e67e6]"
      />
    </div>

    {/* EMAIL */}
    <div className="relative">
      <label
        htmlFor="email"
        className="block mb-1 text-sm text-[#5e67e6]"
      >
        Email Address
      </label>
      <input
        id="email"
        type="email"
        placeholder="john.doe@email.com"
        className="w-full px-4 py-3 rounded-full bg-gray-200 border border-white/10 outline-none focus:border-[#5e67e6]"
      />
    </div>
  </div>

  {/* SELECT */}
  <div className="relative">
    <label className="block mb-1 text-sm text-[#5e67e6]">
      Select Topic
    </label>
    <select className="w-full px-4 py-3 rounded-full bg-gray-200 border border-white/10 outline-none focus:border-[#5e67e6]">
      <option>Internship Opportunity</option>
      <option>Freelance Project</option>
      <option>Collaboration</option>
      <option>General Query</option>
    </select>
  </div>

  {/* MESSAGE */}
  <div className="relative">
    <label className="block mb-1 text-sm text-[#5e67e6]">
      Message
    </label>
    <textarea
      rows={5}
      placeholder="Hello, I'm interested in..."
      className="w-full px-4 py-3 rounded-2xl bg-gray-200 border border-white/10 outline-none focus:border-[#5e67e6]"
    />
  </div>

  {/* BUTTON */}
  <button
    type="submit"
    className="w-full border border-[#5e67e6] text-[#5e67e6] px-8 py-3 rounded-full hover:bg-[#5e67e6] hover:text-white transition"
  >
    SUBMIT
  </button>
</motion.form>

        </div>
      </div>
    </section>
  );
}