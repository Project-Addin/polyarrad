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
          <div className="flex items-center gap-3 mb-8">
            <div className="w-8 h-px bg-ocean/40" />
            <span className="section-label">Sertifikasi</span>
          </div>
          <h2 className="text-3xl md:text-[2.75rem] font-bold text-foreground leading-[1.1] mb-16 md:mb-20 max-w-lg">
            Jaminan mutu & <span className="text-gradient">kepercayaan</span>
          </h2>
        </AnimatedSection>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-px bg-border/60 rounded-2xl overflow-hidden border border-border/50 max-w-5xl">
          {certs.map((c, i) => (
            <AnimatedSection key={c.name} delay={i * 80}>
              <div className="group p-9 bg-card hover:bg-secondary/30 transition-all duration-500">
                <c.icon className="w-6 h-6 text-ocean/50 mb-6 group-hover:text-ocean transition-colors duration-400" />
                <h3 className="text-[16px] font-bold text-foreground mb-2">{c.name}</h3>
                <p className="text-[13px] text-muted-foreground leading-[1.75]">{c.desc}</p>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
