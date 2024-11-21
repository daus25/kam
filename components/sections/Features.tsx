import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { BookOpen, Building2, Clock, GraduationCap, MapPin, Users } from "lucide-react";
import Image from "next/image";

const features = {
  facilities: [
    {
      icon: Building2,
      title: "Gedung Modern",
      description: "Fasilitas modern dengan ruang kelas ber-AC dan perpustakaan digital",
      image: "https://images.unsplash.com/photo-1562774053-701939374585?auto=format&fit=crop&q=80"
    },
    {
      icon: MapPin,
      title: "Lokasi Strategis",
      description: "Terletak di pusat kota dengan akses mudah dan lingkungan yang nyaman",
      image: "https://images.unsplash.com/photo-1564951434112-64d74cc2a2d7?auto=format&fit=crop&q=80"
    },
  ],
  curriculum: [
    {
      icon: BookOpen,
      title: "Kurikulum Nasional",
      description: "Mengikuti standar kurikulum nasional dengan pengayaan nilai Islam",
      image: "https://images.unsplash.com/photo-1588072432836-e10032774350?auto=format&fit=crop&q=80"
    },
    {
      icon: Clock,
      title: "Program Unggulan",
      description: "Program tahfidz, bahasa Arab, dan pengembangan karakter",
      image: "https://images.unsplash.com/photo-1603354350317-6f7aaa5911c5?auto=format&fit=crop&q=80"
    },
  ],
  activities: [
    {
      icon: Users,
      title: "Ekstrakurikuler",
      description: "Berbagai kegiatan pengembangan bakat dan minat siswa",
      image: "https://images.unsplash.com/photo-1571260899304-425eee4c7efc?auto=format&fit=crop&q=80"
    },
    {
      icon: GraduationCap,
      title: "Program Pembinaan",
      description: "Bimbingan akademik dan karakter secara intensif",
      image: "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?auto=format&fit=crop&q=80"
    },
  ],
};

export default function Features() {
  return (
    <section className="py-20 bg-white dark:bg-gray-800">
      <div className="container mx-auto px-4">
        <Tabs defaultValue="facilities" className="w-full">
          <TabsList className="grid w-full grid-cols-1 md:grid-cols-3 bg-gray-100 dark:bg-gray-700">
            <TabsTrigger value="facilities">Fasilitas</TabsTrigger>
            <TabsTrigger value="curriculum">Kurikulum</TabsTrigger>
            <TabsTrigger value="activities">Kegiatan</TabsTrigger>
          </TabsList>
          {Object.entries(features).map(([key, items]) => (
            <TabsContent key={key} value={key} className="mt-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {items.map((item, index) => (
                  <div key={index} className="group relative overflow-hidden rounded-lg hover:shadow-xl transition-shadow duration-300">
                    <div className="relative h-64">
                      <Image
                        src={item.image}
                        alt={item.title}
                        fill
                        className="object-cover transform group-hover:scale-105 transition-transform duration-300"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    </div>
                    <div className="absolute bottom-0 left-0 right-0 p-6 text-white transform translate-y-6 group-hover:translate-y-0 transition-transform duration-300">
                      <item.icon className="h-8 w-8 text-orange-400 mb-3 transform group-hover:scale-110 transition-transform" />
                      <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                      <p className="text-gray-200 opacity-0 group-hover:opacity-100 transition-opacity duration-300">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </section>
  );
}