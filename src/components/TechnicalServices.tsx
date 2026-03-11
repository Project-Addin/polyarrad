import AnimatedSection from "./AnimatedSection";
import { Activity, ClipboardCheck, FileBarChart, GraduationCap } from "lucide-react";
import servicesImage from "@/assets/services-fieldwork.jpg";

const services = [
  {
    icon: Activity,
    title: "Performance Monitoring",
    desc: "Pemantauan performa sistem pengolahan air secara berkala untuk memastikan setiap parameter berjalan optimal.",
  },
  {
    icon: ClipboardCheck,
    title: "Quality Control System",
    desc: "Pengendalian mutu terintegrasi dari laboratorium hingga lapangan dengan pengujian rutin dan analisis sampel.",
  },
  {
    icon: FileBarChart,
    title: "Reporting",
    desc: "Laporan teknis komprehensif — data performa, tren analisis, dan rekomendasi dalam format profesional.",
  },
  {
    icon: GraduationCap,
    title: "Training",
    desc: "Pelatihan bagi operator dan tim teknis klien. Transfer pengetahuan praktis tentang penanganan kimia.",
  },
];

export default function TechnicalServices() {
  return (
    <section id="layanan" className="py-16 sm:py-28 md:py-40 bg-secondary/30 relative overflow-hidden">
      <div className="container mx-auto px-5 sm:px-6 md:px-10">
        <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-20">
          {/* Left — image */}
          <AnimatedSection>
            <div className="relative rounded-xl overflow-hidden aspect-[3/2] sm:aspect-[4/3] lg:aspect-auto lg:h-full min-h-[240px] sm:min-h-[320px] lg:min-h-[360px]">
              <img
                src={servicesImage}
                alt="Tim teknis melakukan inspeksi sistem pengolahan air di fasilitas industri"
                className="absolute inset-0 w-full h-full object-cover"
              />
              <div
                className="absolute inset-0"
                style={{
                  background:
                    "linear-gradient(135deg, hsl(var(--navy) / 0.15) 0%, transparent 50%, hsl(var(--ocean) / 0.1) 100%)",
                }}
              />
            </div>
          </AnimatedSection>

          {/* Right — services grid */}
          <div>
            <AnimatedSection>
              <div className="flex items-center gap-3 mb-6 sm:mb-8">
                <div className="w-8 h-px bg-ocean/40" />
                <span className="section-label">Layanan Teknis</span>
              </div>
              <h2 className="text-[1.75rem] sm:text-3xl md:text-[2.75rem] font-bold text-foreground leading-[1.15] sm:leading-[1.1] mb-8 sm:mb-12 max-w-lg">
                Layanan teknis{" "}
                <span className="text-gradient">bernilai tambah</span>
              </h2>
            </AnimatedSection>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
              {services.map((s, i) => (
                <AnimatedSection key={s.title} delay={i * 80}>
                  <div className="group p-5 sm:p-6 rounded-xl bg-card border border-border/50 hover:border-ocean/15 transition-all duration-500 card-elevated h-full">
                    <s.icon className="w-5 h-5 text-ocean/50 mb-4 sm:mb-5 group-hover:text-ocean transition-colors duration-400" />
                    <h3 className="text-[14px] sm:text-[15px] font-bold text-foreground mb-2">
                      {s.title}
                    </h3>
                    <p className="text-muted-foreground leading-[1.65] sm:leading-[1.7] text-[12px] sm:text-[13px]">
                      {s.desc}
                    </p>
                  </div>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
