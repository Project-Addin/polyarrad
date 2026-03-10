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
    <section id="layanan" className="py-24 md:py-36 relative">
      <div className="container mx-auto px-6 md:px-10">
        {/* Asymmetric layout: narrow left label + wide right content */}
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-16">
          <div className="lg:col-span-4">
            <AnimatedSection>
              <span className="text-ocean/40 text-[11px] font-semibold tracking-[0.25em] uppercase block mb-6">Layanan Teknis</span>
              <h2 className="text-3xl md:text-[2.5rem] font-bold text-foreground leading-[1.12] mb-6 max-w-sm">
                Layanan teknis <span className="text-gradient">bernilai tambah</span>
              </h2>
              <p className="text-muted-foreground text-[15px] leading-[1.8] max-w-sm">
                Lebih dari sekadar produk — kami memberikan layanan teknis menyeluruh untuk memastikan sistem Anda berjalan optimal.
              </p>
            </AnimatedSection>
          </div>

          <div className="lg:col-span-8">
            <div className="grid sm:grid-cols-2 gap-4">
              {services.map((s, i) => (
                <AnimatedSection key={s.title} delay={i * 100}>
                  <div className="group h-full p-8 md:p-9 rounded-xl border border-border/50 bg-card hover:border-ocean/12 hover:shadow-lg hover:shadow-ocean/[0.02] transition-all duration-500">
                    <div className="flex items-center gap-3 mb-5">
                      <s.icon className="w-4 h-4 text-ocean/40 group-hover:text-ocean transition-colors duration-500" />
                      <h3 className="text-[15px] font-bold text-foreground">{s.title}</h3>
                    </div>
                    <p className="text-muted-foreground leading-[1.75] text-[14px]">{s.desc}</p>
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
