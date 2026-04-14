"use client";

import Image from "next/image";

export default function About() {
  return (
    <section className=" text-black py-20 px-6 md:px-18">
      <div className="grid md:grid-cols-2 gap-12 items-center">
        {/* LEFT SIDE */}
        <div className="md:ml-15">
          <h2 className="text-5xl md:text-6xl font-bold mb-6 tracking-tight ">
            ABOUT ME
          </h2>
          {/* text-[#5e67e6]  dark mode*/}
          {/* #5e67e6 light mode   */}

          <p className="text-[#303030] mb-8 max-w-lg leading-relaxed text-[18px]">
            Hi, I'm{" "}
            <span className="font-semibold">Deepak Baisla</span> — a
            passionate Full Stack Developer I love building scalable web
            applications, crafting clean UI, and solving real-world problems
            through code.
          </p>

          {/* STATS */}
          {/* <div className=" grid md:grid-cols-3 gap-8 mb-10">
            <div>
              <h3 className="text-4xl font-bold text-green-400">10+</h3>
              <p className="text-gray-400 text-sm">Projects Built</p>
            </div>

            <div>
              <h3 className="text-4xl font-bold text-green-400">1+</h3>
              <p className="text-gray-400 text-sm">Year of Experience</p>
            </div>

            <div>
              <h3 className="text-4xl font-bold text-green-400">5+</h3>
              <p className="text-gray-400 text-sm">Clients on Worldwide</p>
            </div>
          </div> */}

          <div className="grid md:grid-cols-3 gap-6 md:gap-8 mb-10 ">
            <div className="flex items-center gap-2 md:block">
              <h3 className="text-5xl font-bold text-[#5e67e6] ">
                10+
              </h3>
              <p className="text-[#303030] text-xl font-bold">Projects Built</p>
            </div>

            <div className="flex items-center gap-2 md:block">
              <h3 className="text-5xl font-bold text-[#5e67e6]">
                1+
              </h3>
              <p className="text-[#303030] text-xl font-bold">Year of Experience</p>
            </div>

            <div className="flex items-center gap-2 md:block">
              <h3 className="text-5xl font-bold text-[#5e67e6]">
                5+
              </h3>
              <p className="text-[#303030] text-xl font-bold">Clients Worldwide</p>
            </div>
          </div>

          {/* CONTACT */}
          <div className="flex flex-col md:flex-row gap-8 mb-8 text-sm text-gray-400">
            <div>
              <p className="text-[#303030] font-semibold text-2xl">Call:</p>
              <p className="text-[18px]">+91 7988901458</p>
            </div>

            <div>
              <p className="text-[#303030] font-semibold text-2xl">Email:</p>
              <p className="text-[18px]">dkbainsla8@gmail.com</p>
            </div>
          </div>

          {/* BUTTON */}
          <button className="border border-[#5e67e6] text-[#5e67e6] px-7 py-3 rounded-full hover:bg-[#5e67e6] hover:text-white transition font-antonio text-[26px] font-bold tracking-[0.2em]">
            MY STORY
          </button>
        </div>

        {/* RIGHT SIDE IMAGE */}
        <div className="flex justify-center">
          <div className="rounded-2xl overflow-hidden shadow-2xl rotate-[8deg]">
            <Image
              src="/images/hero.png" // replace with your image
              alt="Deepak"
              width={400}
              height={500}
              className="object-cover hidden md:block"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
