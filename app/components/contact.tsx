"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import { fadeUp } from "@/app/lib/animations";
import TextStack from "./Textstack";
import AnimatedButton from "./AnimatedButton";
import { useState } from "react";
import emailjs from "@emailjs/browser";
import toast from "react-hot-toast";

export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    topic: "General Query",
    message: "",
  });
  const [loading, setLoading] = useState(false);
  const SERVICE_ID = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!;
  const TEMPLATE_ID = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!;
  const PUBLIC_KEY = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!;
  if (!SERVICE_ID || !TEMPLATE_ID || !PUBLIC_KEY) {
    console.error("Missing EmailJS environment variables");
    return;
  }

  const isValidEmail = (email: string) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!form.name || !form.email || !form.message) {
      toast.error("Please fill all fields ❌");
      return;
    }
    if (!isValidEmail(form.email)) {
      toast.error("Enter a valid email address 📧");
      return;
    }

    setLoading(true);

    try {
      emailjs
        .send(
          SERVICE_ID,
          TEMPLATE_ID,
          {
            name: form.name,
            email: form.email,
            topic: form.topic,
            message: form.message,
          },
          PUBLIC_KEY,
        )
        .then(
          () => {
            toast.success("Message sent successfully ✅");
            setLoading(false);

            setForm({
              name: "",
              email: "",
              topic: "General Query",
              message: "",
            });
          },
          () => {
            toast.error("Failed to send ❌");
            setLoading(false);
          },
        );
    } catch (error) {
      console.error("EmailJS error:", error);
      toast.error("An unexpected error occurred ❌");
      setLoading(false);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >,
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };



  return (
    <section id="contact" className="py-32 px-6 md:px-16 text-black">
      <div className="grid md:grid-cols-2 gap-12 items-center">
        {/* LEFT IMAGE */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="flex justify-center">
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
            <div className="absolute -bottom-10 -left-10 bg-[#5e67e6] text-white px-10 py-8 rounded-full text-[32px] font-san">
              <TextStack />
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
              <TextStack />
            </div>
          </motion.div>
        </motion.div>

        {/* RIGHT CONTENT */}
        <div>
          <motion.h2
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="text-4xl md:text-6xl font-bold mb-6 uppercase">
            Let’s work together
          </motion.h2>

          <motion.p
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="text-gray-500 mb-10 max-w-lg text-[16px] font-inter">
            I'm open to internships, freelance work, and collaborations. Let’s
            build something impactful together.
          </motion.p>

          {/* FORM */}

          <motion.form
            onSubmit={handleSubmit}
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            className="space-y-6">
            {/* NAME + EMAIL */}
            <div className="grid md:grid-cols-2 gap-6">
              {/* NAME */}
              <div className="relative">
                <label
                  htmlFor="name"
                  className="block mb-1 text-sm text-[#5e67e6]">
                  Your Name
                </label>
                <input
                  required
                  id="name"
                  type="text"
                  value={form.name}
                  placeholder="John Doe"
                  name="name"
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-full bg-gray-200 border border-white/10 outline-none focus:border-[#5e67e6]"
                />
              </div>

              {/* EMAIL */}
              <div className="relative">
                <label
                  htmlFor="email"
                  className="block mb-1 text-sm text-[#5e67e6]">
                  Email Address
                </label>
                <input
                  required
                  id="email"
                  value={form.email}
                  type="email"
                  name="email"
                  onChange={handleChange}
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
              <select
                name="topic"
                value={form.topic}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-full bg-gray-200 border border-white/10 outline-none focus:border-[#5e67e6]">
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
                required
                rows={5}
                name="message"
                value={form.message}
                onChange={handleChange}
                placeholder="Hello, I'm interested in..."
                className="w-full px-4 py-3 rounded-2xl bg-gray-200 border border-white/10 outline-none focus:border-[#5e67e6]"
              />
            </div>

            {/* BUTTON */}
            <AnimatedButton
              type="submit"
              disabled={loading}
              className="w-full md:w-[200px] border border-[#5e67e6] text-[#5e67e6] px-8 py-3 rounded-full hover:bg-[#5e67e6] hover:text-white transition disabled:opacity-50 disabled:cursor-not-allowed">
              {loading ? "SENDING..." : "SUBMIT"}
            </AnimatedButton>
          </motion.form>
        </div>
      </div>
    </section>
  );
}
