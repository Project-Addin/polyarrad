import { useState } from "react";
import AnimatedSection from "./AnimatedSection";
import { Droplets, Waves, Flame, Wind, Filter, Trash2, BarChart3, ArrowRight } from "lucide-react";

const products = [
  {
    icon: Droplets, title: "Influent",
    summary: "Kimia pengolahan air baku untuk sistem klarifikasi, pelunakan, desalinasi, dan reverse osmosis.",
    items: ["Coagulant", "Flocculant", "Antiscalant", "Antifoam"],
  },
  {
    icon: Waves, title: "Effluent",
    summary: "Solusi treatment air buangan untuk klarifikasi dan proses dewatering lumpur.",
    items: ["Coagulant", "Flocculant"],
  },
  {
    icon: Flame, title: "Boiler",
    summary: "Kimia perawatan boiler untuk tekanan rendah, menengah, dan tinggi.",
    items: ["Oxygen Scavenger", "Internal Treatment", "Condensate Treatment"],
  },
  {
    icon: Wind, title: "Cooling",
    summary: "Inhibitor korosi, kerak, dan kontrol mikrobiologi untuk sistem pendingin.",
    items: ["Corrosion Inhibitor", "Scale Inhibitor", "Microbiological Control"],
  },
  {
    icon: Filter, title: "Reverse Osmosis",
    summary: "Treatment lengkap untuk membran RO air laut maupun air payau.",
    items: ["Antiscalant", "Dechlorine", "Biocide", "Membrane"],
  },
  {
    icon: Trash2, title: "Waste Water",
    summary: "Kimia pengolahan air limbah untuk berbagai jenis industri.",
    items: ["Organic Coagulant", "Inorganic Coagulant", "Flocculant", "Antifoam"],
  },
  {
    icon: BarChart3, title: "Commodity Trading",
    summary: "Perdagangan komoditas pendukung operasional industri.",
    items: ["Membrane", "Sulfur", "Quicklime", "Coal", "Nickel"],
  },
];

export default function ProductCategories() {
  const [hovered, setHovered] = useState<number | null>(null);

  return (
    <section id="produk" className="py-20 md:py-32 bg-navy relative overflow-hidden">
      <div className="absolute inset-0 opacity-[0.015]" style={{
        backgroundImage: `linear-gradient(hsl(var(--aqua)) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--aqua)) 1px, transparent 1px)`,
        backgroundSize: '80px 80px'
      }} />
      <div className="absolute top-[30%] right-0 w-[400px] h-[600px] bg-ocean/4 rounded-full blur-[200px]" />

      <div className="container mx-auto px-6 md:px-10 relative z-10">
        <AnimatedSection>
          <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-16 md:mb-24 gap-6">
            <div>
              <span className="text-aqua/35 text-[11px] font-semibold tracking-[0.25em] uppercase block mb-6">Produk</span>
              <h2 className="text-3xl md:text-[2.75rem] font-bold text-white leading-[1.1] max-w-md">
                Kategori <span className="text-gradient">produk unggulan</span>
              </h2>
            </div>
            <p className="text-white/20 text-[15px] leading-relaxed max-w-sm">
              Tujuh lini produk kimia spesialti untuk memenuhi setiap kebutuhan pengolahan air industri.
            </p>
          </div>
        </AnimatedSection>

        {/* Vertical list — different from other sections */}
        <div className="space-y-1">
          {products.map((p, i) => (
            <AnimatedSection key={p.title} delay={i * 40}>
              <div
                className="group grid grid-cols-12 gap-4 md:gap-8 py-7 md:py-8 border-b border-white/[0.04] items-center cursor-default transition-all duration-500 hover:pl-2"
                onMouseEnter={() => setHovered(i)}
                onMouseLeave={() => setHovered(null)}
              >
                <div className="col-span-1 hidden md:flex items-center">
                  <span className="text-[11px] font-mono text-white/10 group-hover:text-aqua/30 transition-colors duration-500">0{i + 1}</span>
                </div>
                <div className="col-span-12 md:col-span-3 flex items-center gap-4">
                  <p.icon className={`w-4 h-4 transition-colors duration-500 flex-shrink-0 ${hovered === i ? 'text-aqua/60' : 'text-white/10'}`} />
                  <h3 className="text-[17px] md:text-lg font-bold text-white/70 tracking-tight group-hover:text-white transition-colors duration-500">{p.title}</h3>
                </div>
                <div className="col-span-12 md:col-span-4">
                  <p className="text-[13px] text-white/20 leading-relaxed group-hover:text-white/30 transition-colors duration-500">{p.summary}</p>
                </div>
                <div className="col-span-12 md:col-span-3">
                  <div className="flex flex-wrap gap-1.5">
                    {p.items.slice(0, 3).map((item) => (
                      <span key={item} className="text-[11px] px-2.5 py-1 rounded-full bg-white/[0.03] text-white/20 font-medium group-hover:bg-white/[0.06] group-hover:text-white/35 transition-all duration-500">{item}</span>
                    ))}
                    {p.items.length > 3 && (
                      <span className="text-[11px] px-2.5 py-1 rounded-full bg-white/[0.02] text-white/10 font-medium">+{p.items.length - 3}</span>
                    )}
                  </div>
                </div>
                <div className="col-span-12 md:col-span-1 hidden md:flex justify-end">
                  <ArrowRight className={`w-4 h-4 transition-all duration-500 ${hovered === i ? 'text-aqua/40 translate-x-0 opacity-100' : 'text-white/5 -translate-x-2 opacity-0'}`} />
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
