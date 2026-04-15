import dynamic from "next/dynamic";
import Navbar from "@/app/components/Navbar";
import Hero from "@/app/components/Hero";
const Services = dynamic(() => import("@/app/components/Services"));
const About = dynamic(() => import("@/app/components/About"));
const Projects = dynamic(() => import("@/app/components/Projects"));
const FAQ = dynamic(() => import("@/app/components/Faq"));
const Contact = dynamic(() => import("@/app/components/contact"));
const Footer = dynamic(() => import("@/app/components/Footer"));
const ScrollFlippingImage = dynamic(() => import("@/app/components/ScrollFlippingImage"));

export default function Home() {
  return (
    <main>
      <ScrollFlippingImage />
      <Navbar />
      <Hero />
      <Services />
      <About />
      <Projects />
      <FAQ />
      <Contact />
      <Footer />
    </main>
  );
}
