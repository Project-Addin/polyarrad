import AnimatedSection from "./AnimatedSection";
import { Brain, Settings2, ShieldCheck, HeadsetIcon } from "lucide-react";

const values = [
  {
    icon: Brain,
    title: "Technical Expertise",
    desc: "Tim ahli kimia dan insinyur berpengalaman yang memahami setiap aspek sistem pengolahan air industri secara mendalam.",
    accent: "from-ocean to-blue-400",
  },
  {
    icon: Settings2,
    title: "Customized Programs",
    desc: "Program treatment yang dirancang khusus berdasarkan analisis kondisi dan kebutuhan spesifik setiap sistem klien.",
    accent: "from-ocean to-aqua",
  },
  {
    icon: ShieldCheck,
    title: "Quality Assurance",
    desc: "Produk spesialti bermutu tinggi dengan quality control ketat dari laboratorium hingga aplikasi di lapangan.",
    accent: "from-aqua to-teal-400",
  },
  {
    icon: HeadsetIcon,
    title: "On-site Technical Support",
    desc: "Dukungan teknis langsung di lokasi — dari survei awal, implementasi program, hingga evaluasi berkelanjutan.",
    accent: "from-cyan-500 to-aqua",
  },
];

export default function WhyArrad() {
  return (
    <section className="py-28 md:py-36 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-secondary/40 to-background" />
      
      <div className="container mx-auto px-4 md:px-8 relative z-10">
        <AnimatedSection>
          <div className="text-center max-w-3xl mx-auto mb-20">
            <span className="text-xs font-bold text-aqua tracking-[0.2em] uppercase mb-5 block">Mengapa ARRAD</span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-foreground leading-tight mb-6">
              Mengapa <span className="text-gradient">ARRAD Chemicals</span>
            </h2>
            <p className="text-lg text-muted-foreground">
              Empat pilar keunggulan yang menjadikan kami mitra terpercaya dalam pengolahan air industri.
            </p>
          </div>
        </AnimatedSection>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {values.map((v, i) => (
            <AnimatedSection key={v.title} delay={i * 120}>
              <div className="group h-full p-8 rounded-2xl bg-card border border-border hover:border-aqua/25 transition-all duration-700 hover:shadow-2xl hover:shadow-aqua/[0.06] hover:-translate-y-1.5 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-ocean/[0.02] to-aqua/[0.02] opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                <div className="relative z-10">
                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-ocean/10 to-aqua/10 flex items-center justify-center mb-7 group-hover:from-ocean/20 group-hover:to-aqua/20 transition-all duration-500 group-hover:shadow-lg group-hover:shadow-aqua/10">
                    <v.icon className="w-7 h-7 text-ocean group-hover:text-aqua transition-colors duration-500" />
                  </div>
                  <h3 className="text-lg font-bold text-foreground mb-3">{v.title}</h3>
                  <p className="text-muted-foreground leading-relaxed text-sm">{v.desc}</p>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
