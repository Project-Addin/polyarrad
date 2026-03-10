import AnimatedSection from "./AnimatedSection";
import { Brain, Settings2, ShieldCheck, HeadsetIcon } from "lucide-react";

const values = [
  {
    icon: Brain,
    title: "Technical Expertise",
    desc: "Tim ahli kimia dan insinyur berpengalaman yang memahami setiap aspek sistem pengolahan air industri secara mendalam.",
  },
  {
    icon: Settings2,
    title: "Customized Programs",
    desc: "Program treatment yang dirancang khusus berdasarkan analisis kondisi dan kebutuhan spesifik setiap sistem klien.",
  },
  {
    icon: ShieldCheck,
    title: "Quality Assurance",
    desc: "Produk spesialti bermutu tinggi dengan quality control ketat dari laboratorium hingga aplikasi di lapangan.",
  },
  {
    icon: HeadsetIcon,
    title: "On-site Support",
    desc: "Dukungan teknis langsung di lokasi — dari survei awal, implementasi program, hingga evaluasi berkelanjutan.",
  },
];

export default function WhyArrad() {
  return (
    <section className="py-32 md:py-40 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-secondary/30 to-background" />
      
      <div className="container mx-auto px-4 md:px-8 relative z-10">
        <AnimatedSection>
          <div className="text-center max-w-2xl mx-auto mb-20">
            <span className="text-[11px] font-bold text-aqua tracking-[0.25em] uppercase mb-6 block">Mengapa ARRAD</span>
            <h2 className="text-3xl md:text-4xl lg:text-[2.75rem] font-extrabold text-foreground leading-tight mb-5">
              Mengapa <span className="text-gradient">ARRAD Chemicals</span>
            </h2>
            <div className="section-divider mb-6" />
            <p className="text-muted-foreground text-[17px] leading-relaxed">
              Empat pilar keunggulan yang menjadikan kami mitra terpercaya dalam pengolahan air industri.
            </p>
          </div>
        </AnimatedSection>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 lg:gap-6">
          {values.map((v, i) => (
            <AnimatedSection key={v.title} delay={i * 100}>
              <div className="group h-full p-8 lg:p-9 rounded-2xl bg-card border border-border/80 hover:border-ocean/20 transition-all duration-500 hover:shadow-xl hover:shadow-ocean/[0.06] hover:-translate-y-1 relative overflow-hidden card-premium">
                <div className="absolute inset-0 bg-gradient-to-br from-ocean/[0.02] to-aqua/[0.01] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="relative z-10">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-ocean/10 to-aqua/8 flex items-center justify-center mb-7 group-hover:shadow-lg group-hover:shadow-ocean/10 transition-all duration-500">
                    <v.icon className="w-6 h-6 text-ocean group-hover:text-aqua transition-colors duration-400" />
                  </div>
                  <h3 className="text-[17px] font-bold text-foreground mb-3 tracking-tight">{v.title}</h3>
                  <p className="text-muted-foreground leading-[1.7] text-[14px]">{v.desc}</p>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
