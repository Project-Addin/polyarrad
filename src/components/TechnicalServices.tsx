import AnimatedSection from "./AnimatedSection";
import { Activity, ClipboardCheck, FileBarChart, GraduationCap } from "lucide-react";

const services = [
  {
    icon: Activity,
    title: "Performance Monitoring",
    desc: "Pemantauan performa sistem pengolahan air secara berkala dan menyeluruh untuk memastikan setiap parameter berjalan optimal.",
  },
  {
    icon: ClipboardCheck,
    title: "Quality Control System",
    desc: "Sistem pengendalian mutu terintegrasi dari laboratorium hingga lapangan dengan pengujian rutin dan analisis sampel.",
  },
  {
    icon: FileBarChart,
    title: "Reporting",
    desc: "Laporan teknis komprehensif — data performa, tren analisis, dan rekomendasi disajikan dalam format profesional.",
  },
  {
    icon: GraduationCap,
    title: "Training",
    desc: "Program pelatihan bagi operator dan tim teknis klien. Transfer pengetahuan praktis tentang penanganan kimia.",
  },
];

export default function TechnicalServices() {
  return (
    <section id="layanan" className="py-28 md:py-40 bg-secondary/30 relative">
      <div className="container mx-auto px-6 md:px-10">
        <AnimatedSection>
          <div className="flex items-center gap-3 mb-8">
            <div className="w-8 h-px bg-ocean/40" />
            <span className="section-label">Layanan Teknis</span>
          </div>
          <h2 className="text-3xl md:text-[2.75rem] font-bold text-foreground leading-[1.1] mb-16 md:mb-20 max-w-lg">
            Layanan teknis <span className="text-gradient">bernilai tambah</span>
          </h2>
        </AnimatedSection>

        <div className="grid sm:grid-cols-2 gap-px bg-border/60 rounded-2xl overflow-hidden border border-border/50">
          {services.map((s, i) => (
            <AnimatedSection key={s.title} delay={i * 80}>
              <div className="group h-full p-10 lg:p-12 bg-card hover:bg-secondary/30 transition-all duration-500">
                <s.icon className="w-6 h-6 text-ocean/60 mb-8 group-hover:text-ocean transition-colors duration-400" />
                <h3 className="text-lg font-bold text-foreground mb-3">{s.title}</h3>
                <p className="text-muted-foreground leading-[1.75] text-[14px]">{s.desc}</p>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
