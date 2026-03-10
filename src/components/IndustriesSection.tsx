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
    <section id="industri" className="py-28 md:py-40 bg-navy relative overflow-hidden">
      {/* Subtle dot pattern */}
      <div className="absolute inset-0 opacity-[0.02]" style={{
        backgroundImage: `radial-gradient(circle at 1px 1px, hsl(var(--aqua)) 0.5px, transparent 0)`,
        backgroundSize: '64px 64px'
      }} />
      <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-ocean/5 rounded-full blur-[200px]" />

      <div className="container mx-auto px-6 md:px-10 relative z-10">
        <AnimatedSection>
          <div className="flex items-center gap-3 mb-8">
            <div className="w-8 h-px bg-aqua/40" />
            <span className="text-[11px] font-semibold text-aqua/50 tracking-[0.2em] uppercase">Industri</span>
          </div>
          <h2 className="text-3xl md:text-[2.75rem] font-bold text-white leading-[1.1] mb-6 max-w-lg">
            Melayani berbagai <span className="text-gradient">sektor industri</span>
          </h2>
          <p className="text-white/30 text-[16px] max-w-md mb-16 md:mb-20">
            Solusi kimia pengolahan air kami dipercaya oleh beragam industri di seluruh Indonesia.
          </p>
        </AnimatedSection>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-px bg-white/[0.04] rounded-2xl overflow-hidden mb-28">
          {industries.map((ind, i) => (
            <AnimatedSection key={ind.name} delay={i * 60}>
              <div className="group p-7 md:p-9 bg-navy hover:bg-navy-light transition-all duration-500 relative">
                <ind.icon className="w-5 h-5 text-white/20 mb-5 group-hover:text-aqua/60 transition-colors duration-400" />
                <h3 className="text-[14px] font-semibold text-white/60 group-hover:text-white transition-colors mb-2">{ind.name}</h3>
                <p className="text-[12px] text-white/20 group-hover:text-white/35 transition-colors leading-relaxed">{ind.desc}</p>
              </div>
            </AnimatedSection>
          ))}
        </div>

        {/* Partners */}
        <AnimatedSection>
          <div className="mb-8">
            <span className="text-[11px] font-semibold text-white/20 tracking-[0.2em] uppercase">Dipercaya oleh</span>
          </div>
          <div className="overflow-hidden relative">
            <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-navy to-transparent z-10" />
            <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-navy to-transparent z-10" />
            <div className="flex animate-marquee whitespace-nowrap">
              {[...partners, ...partners].map((p, i) => (
                <span key={i} className="mx-8 text-white/15 hover:text-white/40 font-medium text-[14px] whitespace-nowrap transition-colors duration-300 cursor-default">{p}</span>
              ))}
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
