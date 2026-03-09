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
    <section id="sertifikasi" className="py-28 md:py-36 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-secondary/20 to-background" />

      <div className="container mx-auto px-4 md:px-8 relative z-10">
        <AnimatedSection>
          <div className="text-center max-w-3xl mx-auto mb-20">
            <span className="text-xs font-bold text-aqua tracking-[0.2em] uppercase mb-5 block">Sertifikasi</span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-foreground leading-tight mb-6">
              Jaminan Mutu & <span className="text-gradient">Kepercayaan</span>
            </h2>
            <p className="text-lg text-muted-foreground">
              Sertifikasi dan akreditasi yang menjadi bukti komitmen kami terhadap kualitas dan standar internasional.
            </p>
          </div>
        </AnimatedSection>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 max-w-5xl mx-auto">
          {certs.map((c, i) => (
            <AnimatedSection key={c.name} delay={i * 120}>
              <div className="group text-center p-9 rounded-2xl bg-card border border-border hover:border-aqua/25 transition-all duration-700 hover:shadow-2xl hover:shadow-aqua/[0.06] hover:-translate-y-1.5 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-ocean/[0.01] to-aqua/[0.02] opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                <div className="relative z-10">
                  <div className="w-16 h-16 mx-auto rounded-2xl bg-gradient-to-br from-ocean/10 to-aqua/10 flex items-center justify-center mb-7 group-hover:from-ocean/20 group-hover:to-aqua/15 group-hover:shadow-xl group-hover:shadow-aqua/10 transition-all duration-500">
                    <c.icon className="w-8 h-8 text-ocean group-hover:text-aqua transition-colors duration-500" />
                  </div>
                  <h3 className="text-lg font-bold text-foreground mb-3">{c.name}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{c.desc}</p>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
