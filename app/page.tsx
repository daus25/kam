import Hero from "@/components/sections/Hero";
import Programs from "@/components/sections/Programs";
import Features from "@/components/sections/Features";
import Contact from "@/components/sections/Contact";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <Programs />
      <Features />
      <Contact />
    </main>
  );
}