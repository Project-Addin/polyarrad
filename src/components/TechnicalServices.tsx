import AnimatedSection from "./AnimatedSection";
import { Activity, ClipboardCheck, FileBarChart, GraduationCap } from "lucide-react";

const services = [
  {
    icon: Activity,
    title: "Performance Monitoring",
    desc: "Pemantauan performa sistem pengolahan air secara berkala dan menyeluruh. Tim teknis kami hadir di lapangan untuk memastikan setiap parameter berjalan optimal.",
  },
  {
    icon: ClipboardCheck,
    title: "Quality Control System",
    desc: "Sistem pengendalian mutu terintegrasi dari laboratorium hingga lapangan. Pengujian rutin dan analisis sampel memastikan standar kualitas tertinggi.",
  },
  {
    icon: FileBarChart,
    title: "Reporting",
    desc: "Laporan teknis komprehensif dan transparan. Data performa, tren analisis, dan rekomendasi disajikan dalam format profesional untuk pengambilan keputusan.",
  },
  {
    icon: GraduationCap,
    title: "Training",
    desc: "Program pelatihan bagi operator dan tim teknis klien. Transfer pengetahuan praktis tentang penanganan kimia, pengoperasian sistem, dan troubleshooting.",
  },
];

export default function TechnicalServices() {
  return (
    <section id="layanan" className="py-28 md:py-36 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-secondary/20 to-background" />
      <div className="absolute inset-0 opacity-[0.015]" style={{
        backgroundImage: `linear-gradient(hsl(var(--ocean)) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--ocean)) 1px, transparent 1px)`,
        backgroundSize: '60px 60px'
      }} />

      <div className="container mx-auto px-4 md:px-8 relative z-10">
        <AnimatedSection>
          <div className="text-center max-w-3xl mx-auto mb-20">
            <span className="text-xs font-bold text-aqua tracking-[0.2em] uppercase mb-5 block">Layanan Teknis</span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-foreground leading-tight mb-6">
              Layanan Teknis <span className="text-gradient">Bernilai Tambah</span>
            </h2>
            <p className="text-lg text-muted-foreground">
              Lebih dari sekadar produk — kami hadir sebagai mitra teknis yang mendampingi operasional Anda.
            </p>
          </div>
        </AnimatedSection>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {services.map((s, i) => (
            <AnimatedSection key={s.title} delay={i * 120}>
              <div className="group h-full p-8 rounded-2xl bg-card border border-border hover:border-aqua/25 transition-all duration-700 hover:shadow-2xl hover:shadow-aqua/[0.06] hover:-translate-y-1.5 flex flex-col relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-ocean/[0.02] to-aqua/[0.02] opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                <div className="relative z-10 flex flex-col flex-1">
                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-ocean/10 to-aqua/10 flex items-center justify-center mb-7 group-hover:from-ocean/20 group-hover:to-aqua/15 group-hover:shadow-lg group-hover:shadow-aqua/10 transition-all duration-500">
                    <s.icon className="w-7 h-7 text-ocean group-hover:text-aqua transition-colors duration-500" />
                  </div>
                  <h3 className="text-lg font-bold text-foreground mb-3">{s.title}</h3>
                  <p className="text-muted-foreground leading-relaxed text-sm flex-1">{s.desc}</p>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
