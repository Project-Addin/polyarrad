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
    <section id="produk" className="py-16 sm:py-28 md:py-40 relative">
      <div className="container mx-auto px-5 sm:px-6 md:px-10">
        <AnimatedSection>
          <div className="flex items-center gap-3 mb-6 sm:mb-8">
            <div className="w-8 h-px bg-ocean/40" />
            <span className="section-label">Produk</span>
          </div>
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between mb-10 sm:mb-16 md:mb-20 gap-4 sm:gap-6">
            <h2 className="text-[1.75rem] sm:text-3xl md:text-[2.75rem] font-bold text-foreground leading-[1.15] sm:leading-[1.1] max-w-lg">
              Kategori <span className="text-gradient">produk unggulan</span>
            </h2>
            <p className="text-muted-foreground text-[14px] sm:text-[16px] leading-relaxed max-w-md">
              Tujuh lini produk kimia spesialti untuk memenuhi setiap kebutuhan pengolahan air industri Anda.
            </p>
          </div>
        </AnimatedSection>

        {/* Mobile: card layout */}
        <div className="md:hidden space-y-3">
          {products.map((p, i) => (
            <AnimatedSection key={p.title} delay={i * 50}>
              <div className="p-5 rounded-xl bg-card border border-border/50 hover:border-ocean/15 transition-all duration-300">
                <div className="flex items-center gap-3 mb-3">
                  <p.icon className="w-4 h-4 text-ocean/60 flex-shrink-0" />
                  <h3 className="text-[15px] font-bold text-foreground tracking-tight">{p.title}</h3>
                  <span className="text-[11px] text-muted-foreground/40 font-medium ml-auto">0{i + 1}</span>
                </div>
                <p className="text-[13px] text-muted-foreground leading-relaxed mb-3">{p.summary}</p>
                <div className="flex flex-wrap gap-1.5">
                  {p.items.slice(0, 3).map((item) => (
                    <span key={item} className="text-[10px] px-2 py-0.5 rounded-full bg-secondary text-muted-foreground font-medium">{item}</span>
                  ))}
                  {p.items.length > 3 && (
                    <span className="text-[10px] px-2 py-0.5 rounded-full bg-secondary text-muted-foreground/50 font-medium">+{p.items.length - 3}</span>
                  )}
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>

        {/* Desktop: table layout */}
        <div className="hidden md:block border-t border-border/60">
          {products.map((p, i) => (
            <AnimatedSection key={p.title} delay={i * 50}>
              <div
                className="group grid grid-cols-12 gap-8 py-10 border-b border-border/60 items-center cursor-pointer transition-all duration-400 hover:bg-secondary/20 -mx-6 px-6"
                onMouseEnter={() => setHovered(i)}
                onMouseLeave={() => setHovered(null)}
              >
                <div className="col-span-1">
                  <span className="text-[12px] font-medium text-muted-foreground/40">0{i + 1}</span>
                </div>
                <div className="col-span-3 flex items-center gap-4">
                  <p.icon className={`w-5 h-5 transition-colors duration-400 ${hovered === i ? 'text-ocean' : 'text-muted-foreground/30'}`} />
                  <h3 className="text-xl font-bold text-foreground tracking-tight">{p.title}</h3>
                </div>
                <div className="col-span-4">
                  <p className="text-[14px] text-muted-foreground leading-relaxed">{p.summary}</p>
                </div>
                <div className="col-span-3">
                  <div className="flex flex-wrap gap-1.5">
                    {p.items.slice(0, 3).map((item) => (
                      <span key={item} className="text-[11px] px-2.5 py-1 rounded-full bg-secondary text-muted-foreground font-medium">{item}</span>
                    ))}
                    {p.items.length > 3 && (
                      <span className="text-[11px] px-2.5 py-1 rounded-full bg-secondary text-muted-foreground/50 font-medium">+{p.items.length - 3}</span>
                    )}
                  </div>
                </div>
                <div className="col-span-1 flex justify-end">
                  <ArrowRight className={`w-4 h-4 transition-all duration-400 ${hovered === i ? 'text-ocean translate-x-0 opacity-100' : 'text-muted-foreground/20 -translate-x-2 opacity-0'}`} />
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
