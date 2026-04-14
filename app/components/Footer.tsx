"use client";

import Link from "next/link";
import { FaXTwitter, FaInstagram, FaBehance, FaDribbble } from "react-icons/fa6";
import { CiMail } from "react-icons/ci";

export default function Footer() {
  return (
    <footer className="bg-[#5e67e6] text-white px-6 md:px-16 py-10 font-inter">
      
      {/* TOP SECTION */}
      <div className="flex flex-col md:flex-row justify-between gap-8 border-b border-white/30 pb-6 md:mx-20 ">
        
        {/* EMAIL */}
        <div>
          <p className="text-[16px] opacity-80">Email :</p>
          <p className="text-[18px] font-semibold">
            dkbainsla8@gmail.com
          </p>
        </div>

        {/* PHONE */}
        <div>
          <p className="text-[16px] opacity-80">Call Today :</p>
          <p className="text-[18px] font-semibold">
            +91 7988901458
          </p>
        </div>

        {/* SOCIAL */}
        <div>
          <p className="text-[16px] opacity-80 mb-2">Social :</p>
          <div className="flex gap-4 text-xl">
            <Link href="#"><FaXTwitter /></Link>
            <Link href="#"><FaInstagram /></Link>
            <Link href="#"><CiMail /></Link>
            <Link href="#"><FaDribbble /></Link>
          </div>
        </div>

      </div>

      {/* BOTTOM SECTION */}
      <div className="flex flex-col md:flex-row justify-between items-center mt-6 gap-4 text-sm md:mx-20">
        
        {/* LEFT */}
        <p>
          © Copyright 2025. All Rights Reserved by{" "}
          <Link href="#" className="underline">
            Deepak
          </Link>
        </p>

        {/* RIGHT */}
        <div className="flex items-center gap-3">
          <span>Created by</span>

          <div className="flex items-center gap-2">
            {/* Circle logo */}
            <div className="w-8 h-8 flex items-center justify-center rounded-full bg-[#0f172a] text-white font-bold">
              DB
            </div>

            <Link href="#" className="underline">
              Deepak baisla
            </Link>
          </div>

         
        </div>

      </div>
    </footer>
  );
}