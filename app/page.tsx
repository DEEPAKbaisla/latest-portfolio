import Navbar from "@/app/components/Navbar";
import Hero from "@/app/components/Hero";
import About from "@/app/components/About";
import Projects from "@/app/components/Projects";
import Contact from "@/app/components/contact";
import Services from "@/app/components/Services";
import FAQ from "@/app/components/Faq";
import Footer from "@/app/components/Footer";

export default function Home() {
  return (
    <main>
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
