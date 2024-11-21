import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative h-[90vh] flex items-center justify-center overflow-hidden">
      <Image
        src="https://images.unsplash.com/photo-1546410531-bb4caa6b424d?auto=format&fit=crop&q=80"
        alt="School building"
        fill
        className="object-cover transform scale-105 animate-ken-burns"
        priority
      />
      <div className="absolute inset-0 bg-gradient-to-r from-blue-600/90 to-orange-500/90 dark:from-blue-800/90 dark:to-orange-700/90" />
      <div className="relative z-10 container mx-auto px-4 text-center text-white">
        <h1 className="text-5xl md:text-6xl font-bold mb-6 animate-fade-in-up">Azzahra Mandiri</h1>
        <p className="text-xl md:text-2xl mb-8 max-w-2xl mx-auto animate-fade-in-up animation-delay-200">
          Membentuk Generasi Unggul dengan Pendidikan Berkualitas
        </p>
        <Button 
          className="bg-white text-blue-600 hover:bg-blue-50 hover:scale-105 transition-transform dark:bg-orange-500 dark:text-white dark:hover:bg-orange-600 animate-fade-in-up animation-delay-400"
        >
          Daftar Sekarang <ArrowRight className="ml-2 h-4 w-4" />
        </Button>
      </div>
    </section>
  );
}