import AnimatedSection from "./AnimatedSection";
import { FlaskConical, Target, ShieldCheck, Gauge, Truck, HeadsetIcon } from "lucide-react";

const values = [
  { icon: FlaskConical, title: "Kimia yang Tepat", desc: "Seleksi bahan kimia optimal berdasarkan analisis mendalam terhadap kondisi dan kebutuhan spesifik sistem Anda." },
  { icon: Target, title: "Program yang Tepat", desc: "Desain program treatment yang presisi, terukur, dan disesuaikan dengan target performa operasional." },
  { icon: ShieldCheck, title: "Produk Berkualitas", desc: "Produk spesialti bermutu tinggi dari fasilitas manufaktur dengan quality control ketat dan konsisten." },
  { icon: Gauge, title: "Quality Control", desc: "Pengawasan mutu berkelanjutan mulai dari bahan baku, proses produksi, hingga aplikasi di lapangan." },
  { icon: Truck, title: "Pengiriman Tepat Waktu", desc: "Komitmen logistik yang andal memastikan ketersediaan produk sesuai jadwal operasional Anda." },
  { icon: HeadsetIcon, title: "Layanan Teknis Terbaik", desc: "Tim teknis berpengalaman siap mendampingi dari survei awal, implementasi, hingga evaluasi berkelanjutan." },
];

export default function WhyArrad() {
  return (
    <section className="py-24 md:py-32 relative overflow-hidden">
      {/* BG gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-secondary/50 to-background" />
      
      <div className="container mx-auto px-4 md:px-8 relative z-10">
        <AnimatedSection>
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-sm font-semibold text-aqua tracking-[0.15em] uppercase mb-4 block">Mengapa ARRAD</span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-foreground leading-tight mb-6">
              Komitmen Kami untuk <span className="text-gradient">Keberhasilan Bersama</span>
            </h2>
            <p className="text-lg text-muted-foreground">
              Enam pilar komitmen yang menjadi fondasi kemitraan kami dengan setiap klien.
            </p>
          </div>
        </AnimatedSection>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {values.map((v, i) => (
            <AnimatedSection key={v.title} delay={i * 100}>
              <div className="group p-8 rounded-2xl bg-card border border-border hover:border-aqua/30 transition-all duration-500 hover:shadow-xl hover:shadow-aqua/5 hover:-translate-y-1">
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-ocean/10 to-aqua/10 flex items-center justify-center mb-6 group-hover:from-ocean/20 group-hover:to-aqua/20 transition-all duration-500">
                  <v.icon className="w-7 h-7 text-ocean group-hover:text-aqua transition-colors duration-300" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-3">{v.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{v.desc}</p>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
