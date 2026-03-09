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
    <section id="sertifikasi" className="py-24 md:py-32 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-secondary/30 to-background" />

      <div className="container mx-auto px-4 md:px-8 relative z-10">
        <AnimatedSection>
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-sm font-semibold text-aqua tracking-[0.15em] uppercase mb-4 block">Sertifikasi</span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-foreground leading-tight mb-6">
              Jaminan Mutu & <span className="text-gradient">Kepercayaan</span>
            </h2>
            <p className="text-lg text-muted-foreground">
              Sertifikasi dan akreditasi yang menjadi bukti komitmen kami terhadap kualitas dan standar internasional.
            </p>
          </div>
        </AnimatedSection>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
          {certs.map((c, i) => (
            <AnimatedSection key={c.name} delay={i * 120}>
              <div className="group text-center p-8 rounded-2xl bg-card border border-border hover:border-aqua/30 transition-all duration-500 hover:shadow-xl hover:shadow-aqua/5 hover:-translate-y-1">
                <div className="w-16 h-16 mx-auto rounded-2xl bg-gradient-to-br from-ocean/10 to-aqua/10 flex items-center justify-center mb-6 group-hover:from-ocean/20 group-hover:to-aqua/20 group-hover:glow-aqua transition-all duration-500">
                  <c.icon className="w-8 h-8 text-ocean group-hover:text-aqua transition-colors duration-300" />
                </div>
                <h3 className="text-lg font-bold text-foreground mb-2">{c.name}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{c.desc}</p>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
