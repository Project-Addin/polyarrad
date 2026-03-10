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
    <section id="industri" className="py-24 md:py-36 relative overflow-hidden">
      <div className="container mx-auto px-6 md:px-10">
        {/* Header — centered for variety */}
        <AnimatedSection>
          <div className="text-center max-w-2xl mx-auto mb-20 md:mb-28">
            <span className="text-ocean/50 text-[11px] font-semibold tracking-[0.25em] uppercase block mb-6">Industri yang Kami Layani</span>
            <h2 className="text-3xl md:text-[2.75rem] font-bold text-foreground leading-[1.1] mb-6">
              Melayani berbagai <span className="text-gradient">sektor industri</span>
            </h2>
            <p className="text-muted-foreground text-[15px] leading-relaxed">
              Solusi kimia pengolahan air kami dipercaya oleh beragam industri di seluruh Indonesia.
            </p>
          </div>
        </AnimatedSection>

        {/* 2-row asymmetric grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4 mb-32">
          {industries.map((ind, i) => (
            <AnimatedSection key={ind.name} delay={i * 50}>
              <div className="group p-6 md:p-8 rounded-xl border border-border/50 bg-card hover:border-ocean/15 hover:shadow-lg hover:shadow-ocean/[0.03] transition-all duration-500 h-full">
                <ind.icon className="w-5 h-5 text-muted-foreground/25 mb-5 group-hover:text-ocean/60 transition-colors duration-500" />
                <h3 className="text-[14px] font-bold text-foreground mb-2 group-hover:text-ocean transition-colors duration-500">{ind.name}</h3>
                <p className="text-[12px] text-muted-foreground/60 leading-relaxed hidden md:block">{ind.desc}</p>
              </div>
            </AnimatedSection>
          ))}
        </div>

        {/* Partners — horizontal with rule dividers */}
        <AnimatedSection>
          <div className="border-t border-border/60 pt-12">
            <span className="text-muted-foreground/30 text-[11px] font-semibold tracking-[0.2em] uppercase block mb-8">Dipercaya oleh</span>
            <div className="overflow-hidden relative">
              <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-background to-transparent z-10" />
              <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-background to-transparent z-10" />
              <div className="flex animate-marquee whitespace-nowrap">
                {[...partners, ...partners].map((p, i) => (
                  <span key={i} className="mx-6 md:mx-10 text-muted-foreground/20 hover:text-foreground/40 font-semibold text-[14px] whitespace-nowrap transition-colors duration-500 cursor-default">{p}</span>
                ))}
              </div>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
