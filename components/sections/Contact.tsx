import { Button } from "@/components/ui/button";
import { Clock, MapPin } from "lucide-react";

export default function Contact() {
  return (
    <section className="py-20 bg-blue-600 dark:bg-blue-900 text-white">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold mb-8">Hubungi Kami</h2>
        <div className="max-w-xl mx-auto space-y-4">
          <p className="flex items-center justify-center gap-2">
            <MapPin className="h-5 w-5 text-orange-400" />
            Jl. Pendidikan No. 123, Jakarta
          </p>
          <p className="flex items-center justify-center gap-2">
            <Clock className="h-5 w-5 text-orange-400" />
            Senin - Jumat: 07:00 - 16:00
          </p>
          <Button className="bg-orange-500 text-white hover:bg-orange-600 dark:bg-orange-600 dark:hover:bg-orange-700">
            Kirim Pesan
          </Button>
        </div>
      </div>
    </section>
  );
}