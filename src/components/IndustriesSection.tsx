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
    <section id="industri" className="py-32 md:py-40 bg-navy relative overflow-hidden">
      <div className="absolute inset-0 opacity-[0.025]" style={{
        backgroundImage: `radial-gradient(circle at 1px 1px, hsl(var(--aqua)) 0.5px, transparent 0)`,
        backgroundSize: '52px 52px'
      }} />
      <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-ocean/6 rounded-full blur-[180px]" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-aqua/4 rounded-full blur-[140px]" />

      <div className="container mx-auto px-4 md:px-8 relative z-10">
        <AnimatedSection>
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-[11px] font-bold text-aqua tracking-[0.25em] uppercase mb-6 block">Industri</span>
            <h2 className="text-3xl md:text-4xl lg:text-[2.75rem] font-extrabold text-white leading-tight mb-5">
              Melayani Berbagai <span className="text-gradient">Sektor Industri</span>
            </h2>
            <div className="section-divider mb-6" />
            <p className="text-white/40 text-[17px]">
              Solusi kimia pengolahan air kami dipercaya oleh beragam industri di seluruh Indonesia.
            </p>
          </div>
        </AnimatedSection>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-5 mb-28">
          {industries.map((ind, i) => (
            <AnimatedSection key={ind.name} delay={i * 70}>
              <div className="group glass-card rounded-2xl p-6 md:p-7 hover:border-aqua/20 transition-all duration-500 hover:-translate-y-1 hover:shadow-lg hover:shadow-aqua/[0.04] relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-ocean/[0.02] to-aqua/[0.02] opacity-0 group-hover:opacity-100 transition-opacity duration-400" />
                <div className="relative z-10">
                  <div className="w-11 h-11 mx-auto rounded-xl bg-gradient-to-br from-ocean/15 to-aqua/10 flex items-center justify-center mb-4 group-hover:shadow-md group-hover:shadow-aqua/8 transition-all duration-400">
                    <ind.icon className="w-5 h-5 text-aqua/60 group-hover:text-aqua transition-colors duration-300" />
                  </div>
                  <h3 className="text-[13px] md:text-[14px] font-bold text-white/75 group-hover:text-white transition-colors text-center mb-1.5">{ind.name}</h3>
                  <p className="text-[11px] text-white/30 group-hover:text-white/45 transition-colors text-center leading-relaxed">{ind.desc}</p>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>

        {/* Partners */}
        <AnimatedSection>
          <div className="text-center mb-10">
            <span className="text-[11px] font-bold text-aqua/50 tracking-[0.25em] uppercase">Dipercaya oleh Berbagai Industri Besar</span>
          </div>
          <div className="overflow-hidden relative">
            <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-navy to-transparent z-10" />
            <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-navy to-transparent z-10" />
            <div className="flex animate-marquee whitespace-nowrap">
              {[...partners, ...partners].map((p, i) => (
                <div key={i} className="mx-5 flex-shrink-0 py-3 px-7 glass-card rounded-xl hover:border-aqua/15 transition-all duration-400">
                  <span className="text-white/30 hover:text-white/60 font-semibold text-[13px] whitespace-nowrap tracking-wide transition-colors duration-300">{p}</span>
                </div>
              ))}
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
