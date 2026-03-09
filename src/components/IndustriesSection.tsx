import AnimatedSection from "./AnimatedSection";
import { Zap, Building, TreePine, UtensilsCrossed, FlaskRound, Sprout, Cpu, CircleDot } from "lucide-react";

const industries = [
  { icon: Zap, name: "Pembangkit Listrik" },
  { icon: Building, name: "Hotel & Gedung" },
  { icon: TreePine, name: "Pulp & Kertas" },
  { icon: UtensilsCrossed, name: "Industri Makanan" },
  { icon: FlaskRound, name: "Industri Kimia" },
  { icon: Sprout, name: "Industri Pupuk" },
  { icon: Cpu, name: "Industri Elektronik" },
  { icon: CircleDot, name: "Karet & Ban" },
];

const partners = [
  "Sinar Mas Group", "Jawa Pos Group", "Unilever Indonesia", "Cargill Group",
  "Gudang Garam Group", "PLN", "Pertamina", "Medco Group",
  "Pakuwon Group", "Semen Indonesia", "Pupuk Indonesia",
];

export default function IndustriesSection() {
  return (
    <section id="industri" className="py-24 md:py-32 bg-navy relative overflow-hidden">
      <div className="absolute inset-0 opacity-[0.03]" style={{
        backgroundImage: `radial-gradient(circle at 1px 1px, hsl(var(--aqua)) 1px, transparent 0)`,
        backgroundSize: '40px 40px'
      }} />

      <div className="container mx-auto px-4 md:px-8 relative z-10">
        <AnimatedSection>
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-sm font-semibold text-aqua tracking-[0.15em] uppercase mb-4 block">Industri</span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-white leading-tight mb-6">
              Melayani Berbagai <span className="text-gradient">Sektor Industri</span>
            </h2>
            <p className="text-lg text-white/50">
              Solusi kimia pengolahan air kami dipercaya oleh beragam industri di seluruh Indonesia.
            </p>
          </div>
        </AnimatedSection>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 mb-20">
          {industries.map((ind, i) => (
            <AnimatedSection key={ind.name} delay={i * 80}>
              <div className="group glass-card rounded-xl p-6 text-center hover:border-aqua/30 transition-all duration-500 hover:-translate-y-1">
                <div className="w-14 h-14 mx-auto rounded-xl bg-gradient-to-br from-ocean/20 to-aqua/20 flex items-center justify-center mb-4 group-hover:from-ocean/30 group-hover:to-aqua/30 transition-all">
                  <ind.icon className="w-7 h-7 text-aqua/80 group-hover:text-aqua transition-colors" />
                </div>
                <h3 className="text-sm md:text-base font-semibold text-white/80 group-hover:text-white transition-colors">{ind.name}</h3>
              </div>
            </AnimatedSection>
          ))}
        </div>

        {/* Partners */}
        <AnimatedSection>
          <div className="text-center mb-10">
            <span className="text-sm font-semibold text-aqua/70 tracking-[0.15em] uppercase">Dipercaya Oleh</span>
          </div>
          <div className="overflow-hidden relative">
            <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-navy to-transparent z-10" />
            <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-navy to-transparent z-10" />
            <div className="flex animate-marquee whitespace-nowrap">
              {[...partners, ...partners].map((p, i) => (
                <div key={i} className="mx-8 flex-shrink-0 py-4 px-6 glass-card rounded-lg">
                  <span className="text-white/50 font-semibold text-sm whitespace-nowrap">{p}</span>
                </div>
              ))}
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
