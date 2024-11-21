import { Card, CardContent } from "@/components/ui/card";
import { BookOpen, GraduationCap, Users } from "lucide-react";
import Image from "next/image";

const programs = [
  {
    icon: GraduationCap,
    title: "TK Islam",
    description: "Program pendidikan anak usia dini dengan kurikulum Islam terpadu",
    image: "https://images.unsplash.com/photo-1587554801471-37976a256db0?auto=format&fit=crop&q=80"
  },
  {
    icon: BookOpen,
    title: "SD Islam",
    description: "Pendidikan dasar berkualitas dengan nilai-nilai Islam",
    image: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&q=80"
  },
  {
    icon: Users,
    title: "SMP Islam",
    description: "Program pendidikan menengah dengan keunggulan akademik",
    image: "https://images.unsplash.com/photo-1577896851231-70ef18881754?auto=format&fit=crop&q=80"
  },
];

export default function Programs() {
  return (
    <section className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12 dark:text-white">Program Unggulan</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {programs.map((program, index) => (
            <Card 
              key={index} 
              className="group overflow-hidden hover:shadow-xl transition-all duration-300 dark:bg-gray-800 dark:border-gray-700"
            >
              <div className="relative h-48 overflow-hidden">
                <Image
                  src={program.image}
                  alt={program.title}
                  fill
                  className="object-cover transform group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              </div>
              <CardContent className="p-6 transform group-hover:-translate-y-2 transition-transform duration-300">
                <program.icon className="h-12 w-12 text-orange-500 dark:text-orange-400 mb-4 transform group-hover:scale-110 transition-transform" />
                <h3 className="text-xl font-semibold mb-3 dark:text-white">{program.title}</h3>
                <p className="text-gray-600 dark:text-gray-300">{program.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}