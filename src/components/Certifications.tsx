import AnimatedSection from "./AnimatedSection";
import { Shield, CheckCircle2, Award, Leaf } from "lucide-react";

const certs = [
  { icon: Award, name: "ISO 9001:2015", desc: "Sistem manajemen mutu terakreditasi untuk proses produksi dan layanan." },
  { icon: Shield, name: "KAN", desc: "Terakreditasi oleh Komite Akreditasi Nasional untuk jaminan mutu pengujian." },
  { icon: CheckCircle2, name: "NSF", desc: "Sertifikasi internasional untuk produk yang memenuhi standar keamanan air." },
  { icon: Leaf, name: "Halal Compliance", desc: "Komitmen terhadap kepatuhan halal dalam proses produksi yang relevan." },
];

export default function Certifications() {
  return (
    <section id="sertifikasi" className="py-28 md:py-40 bg-secondary/30 relative">
      <div className="container mx-auto px-6 md:px-10">
        <AnimatedSection>
          <div className="text-center mb-16 md:mb-20">
            <div className="flex items-center justify-center gap-3 mb-8">
              <div className="w-8 h-px bg-ocean/40" />
              <span className="section-label">Sertifikasi</span>
              <div className="w-8 h-px bg-ocean/40" />
            </div>
            <h2 className="text-3xl md:text-[2.75rem] font-bold text-foreground leading-[1.1] max-w-lg mx-auto">
              Jaminan mutu & <span className="text-gradient">kepercayaan</span>
            </h2>
          </div>
        </AnimatedSection>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
          {certs.map((c, i) => (
            <AnimatedSection key={c.name} delay={i * 80}>
              <div className="group p-8 bg-card rounded-xl border border-border/60 hover:border-ocean/20 hover:shadow-lg hover:shadow-ocean/5 transition-all duration-500 text-center h-full">
                <div className="w-12 h-12 rounded-xl bg-ocean/8 flex items-center justify-center mx-auto mb-6 group-hover:bg-ocean/12 transition-colors">
                  <c.icon className="w-6 h-6 text-ocean/60 group-hover:text-ocean transition-colors duration-400" />
                </div>
                <h3 className="text-[16px] font-bold text-foreground mb-3">{c.name}</h3>
                <p className="text-[13px] text-muted-foreground leading-[1.75]">{c.desc}</p>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}