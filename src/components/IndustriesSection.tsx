import AnimatedSection from "./AnimatedSection";
import { Zap, Building, TreePine, UtensilsCrossed, FlaskRound, Sprout, Cpu, CircleDot } from "lucide-react";

const industries = [
  { icon: Zap, name: "Pembangkit Listrik", desc: "Cooling water, boiler feed water, dan waste water treatment." },
  { icon: Building, name: "Hotel & Gedung", desc: "Sistem HVAC, kolam renang, dan pengolahan air bersih." },
  { icon: TreePine, name: "Pulp & Kertas", desc: "Proses bleaching, recovery boiler, dan effluent treatment." },
  { icon: UtensilsCrossed, name: "Industri Makanan", desc: "Water purification, steam boiler, dan limbah organik." },
  { icon: FlaskRound, name: "Industri Kimia", desc: "Process water, cooling system, dan waste treatment." },
  { icon: Sprout, name: "Industri Pupuk", desc: "Demineralization, cooling water, dan waste water." },
  { icon: Cpu, name: "Industri Elektronik", desc: "Ultra-pure water dan precision cleaning system." },
  { icon: CircleDot, name: "Karet & Ban", desc: "Proses vulkanisasi, cooling, dan effluent treatment." },
];

const partners = [
  "Sinar Mas Group", "Jawa Pos Group", "Unilever Indonesia", "Cargill Group",
  "Gudang Garam Group", "PLN", "Pertamina", "Medco Group",
  "Pakuwon Group", "Semen Indonesia", "Pupuk Indonesia",
];

export default function IndustriesSection() {
  return (
    <section id="industri" className="py-28 md:py-36 bg-navy relative overflow-hidden">
      <div className="absolute inset-0 opacity-[0.03]" style={{
        backgroundImage: `radial-gradient(circle at 1px 1px, hsl(var(--aqua)) 1px, transparent 0)`,
        backgroundSize: '48px 48px'
      }} />
      <div className="absolute top-0 left-0 w-96 h-96 bg-ocean/8 rounded-full blur-[150px]" />
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-aqua/5 rounded-full blur-[120px]" />

      <div className="container mx-auto px-4 md:px-8 relative z-10">
        <AnimatedSection>
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs font-bold text-aqua tracking-[0.2em] uppercase mb-5 block">Industri</span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-white leading-tight mb-6">
              Melayani Berbagai <span className="text-gradient">Sektor Industri</span>
            </h2>
            <p className="text-lg text-white/45">
              Solusi kimia pengolahan air kami dipercaya oleh beragam industri di seluruh Indonesia.
            </p>
          </div>
        </AnimatedSection>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-5 mb-24">
          {industries.map((ind, i) => (
            <AnimatedSection key={ind.name} delay={i * 80}>
              <div className="group glass-card rounded-2xl p-6 md:p-7 hover:border-aqua/25 transition-all duration-700 hover:-translate-y-1.5 hover:shadow-xl hover:shadow-aqua/[0.05] relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-ocean/[0.03] to-aqua/[0.03] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="relative z-10">
                  <div className="w-12 h-12 mx-auto rounded-xl bg-gradient-to-br from-ocean/20 to-aqua/15 flex items-center justify-center mb-4 group-hover:from-ocean/30 group-hover:to-aqua/25 group-hover:shadow-lg group-hover:shadow-aqua/10 transition-all duration-500">
                    <ind.icon className="w-6 h-6 text-aqua/70 group-hover:text-aqua transition-colors duration-300" />
                  </div>
                  <h3 className="text-sm md:text-[15px] font-bold text-white/80 group-hover:text-white transition-colors text-center mb-2">{ind.name}</h3>
                  <p className="text-[11px] md:text-xs text-white/35 group-hover:text-white/50 transition-colors text-center leading-relaxed">{ind.desc}</p>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>

        {/* Partners */}
        <AnimatedSection>
          <div className="text-center mb-10">
            <span className="text-xs font-bold text-aqua/60 tracking-[0.2em] uppercase">Dipercaya oleh Berbagai Industri Besar</span>
          </div>
          <div className="overflow-hidden relative">
            <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-navy to-transparent z-10" />
            <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-navy to-transparent z-10" />
            <div className="flex animate-marquee whitespace-nowrap">
              {[...partners, ...partners].map((p, i) => (
                <div key={i} className="mx-6 flex-shrink-0 py-3 px-8 glass-card rounded-xl hover:border-aqua/20 transition-all duration-500">
                  <span className="text-white/40 hover:text-white/70 font-bold text-sm whitespace-nowrap tracking-wide transition-colors duration-300">{p}</span>
                </div>
              ))}
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
