import AnimatedSection from "./AnimatedSection";
import { Brain, Settings2, ShieldCheck, HeadsetIcon } from "lucide-react";

const values = [
  {
    icon: Brain,
    title: "Technical Expertise",
    desc: "Tim ahli kimia dan insinyur berpengalaman yang memahami setiap aspek sistem pengolahan air industri.",
  },
  {
    icon: Settings2,
    title: "Customized Programs",
    desc: "Program treatment dirancang khusus berdasarkan analisis kondisi dan kebutuhan spesifik setiap sistem.",
  },
  {
    icon: ShieldCheck,
    title: "Quality Assurance",
    desc: "Produk bermutu tinggi dengan quality control ketat dari laboratorium hingga aplikasi di lapangan.",
  },
  {
    icon: HeadsetIcon,
    title: "On-site Support",
    desc: "Dukungan teknis langsung di lokasi — dari survei awal, implementasi, hingga evaluasi berkelanjutan.",
  },
];

export default function WhyArrad() {
  return (
    <section className="py-20 md:py-32 relative bg-navy overflow-hidden">
      {/* Subtle ambient */}
      <div className="absolute bottom-0 left-[20%] w-[500px] h-[500px] bg-ocean/4 rounded-full blur-[200px]" />

      <div className="container mx-auto px-6 md:px-10 relative z-10">
        <AnimatedSection>
          <div className="grid lg:grid-cols-5 gap-10 lg:gap-16">
            {/* Left — large header */}
            <div className="lg:col-span-2 lg:sticky lg:top-32 lg:self-start">
              <span className="text-aqua/40 text-[11px] font-semibold tracking-[0.25em] uppercase block mb-6">Keunggulan</span>
              <h2 className="text-3xl md:text-[2.5rem] font-bold text-white leading-[1.12] mb-6">
                Mengapa memilih{" "}
                <span className="text-gradient">ARRAD</span>
              </h2>
              <p className="text-white/25 text-[15px] leading-[1.8] max-w-sm">
                Empat pilar keunggulan yang menjadikan kami mitra terpercaya dalam pengolahan air industri.
              </p>
            </div>

            {/* Right — stacked cards */}
            <div className="lg:col-span-3 flex flex-col gap-4">
              {values.map((v, i) => (
                <AnimatedSection key={v.title} delay={i * 100}>
                  <div className="group flex items-start gap-6 p-7 md:p-8 rounded-xl bg-white/[0.02] border border-white/[0.04] hover:bg-white/[0.04] hover:border-white/[0.08] transition-all duration-500">
                    <div className="w-10 h-10 rounded-lg bg-white/[0.04] flex items-center justify-center flex-shrink-0 group-hover:bg-ocean/10 transition-colors duration-500">
                      <v.icon className="w-5 h-5 text-white/20 group-hover:text-aqua/70 transition-colors duration-500" />
                    </div>
                    <div>
                      <h3 className="text-[15px] font-bold text-white/80 mb-1.5 group-hover:text-white transition-colors duration-500">{v.title}</h3>
                      <p className="text-white/20 group-hover:text-white/35 leading-[1.7] text-[14px] transition-colors duration-500">{v.desc}</p>
                    </div>
                  </div>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
