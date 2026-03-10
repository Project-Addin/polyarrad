import AnimatedSection from "./AnimatedSection";
import { Brain, Settings2, ShieldCheck, HeadsetIcon } from "lucide-react";

const values = [
  {
    icon: Brain,
    num: "01",
    title: "Technical Expertise",
    desc: "Tim ahli kimia dan insinyur berpengalaman yang memahami setiap aspek sistem pengolahan air industri secara mendalam.",
  },
  {
    icon: Settings2,
    num: "02",
    title: "Customized Programs",
    desc: "Program treatment yang dirancang khusus berdasarkan analisis kondisi dan kebutuhan spesifik setiap sistem klien.",
  },
  {
    icon: ShieldCheck,
    num: "03",
    title: "Quality Assurance",
    desc: "Produk spesialti bermutu tinggi dengan quality control ketat dari laboratorium hingga aplikasi di lapangan.",
  },
  {
    icon: HeadsetIcon,
    num: "04",
    title: "On-site Support",
    desc: "Dukungan teknis langsung di lokasi — dari survei awal, implementasi program, hingga evaluasi berkelanjutan.",
  },
];

export default function WhyArrad() {
  return (
    <section className="py-28 md:py-40 relative bg-secondary/30">
      <div className="container mx-auto px-6 md:px-10">
        <AnimatedSection>
          <div className="flex items-center gap-3 mb-8">
            <div className="w-8 h-px bg-ocean/40" />
            <span className="section-label">Keunggulan</span>
          </div>
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between mb-16 md:mb-20 gap-6">
            <h2 className="text-3xl md:text-[2.75rem] font-bold text-foreground leading-[1.1] max-w-lg">
              Mengapa <span className="text-gradient">ARRAD Chemicals</span>
            </h2>
            <p className="text-muted-foreground text-[16px] leading-relaxed max-w-md">
              Empat pilar keunggulan yang menjadikan kami mitra terpercaya dalam pengolahan air industri.
            </p>
          </div>
        </AnimatedSection>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-px bg-border/60 rounded-2xl overflow-hidden border border-border/50">
          {values.map((v, i) => (
            <AnimatedSection key={v.title} delay={i * 80}>
              <div className="group h-full p-8 lg:p-10 bg-card hover:bg-secondary/40 transition-all duration-500 relative">
                <span className="text-[11px] font-semibold text-muted-foreground/40 tracking-wider mb-8 block">{v.num}</span>
                <v.icon className="w-6 h-6 text-ocean mb-6 group-hover:text-aqua transition-colors duration-400" />
                <h3 className="text-[16px] font-bold text-foreground mb-3">{v.title}</h3>
                <p className="text-muted-foreground leading-[1.75] text-[14px]">{v.desc}</p>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
