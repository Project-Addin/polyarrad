import { useState } from "react";
import AnimatedSection from "./AnimatedSection";
import { Droplets, Waves, Flame, Wind, Filter, Trash2, BarChart3, ChevronDown } from "lucide-react";

const products = [
  {
    icon: Droplets,
    title: "Influent",
    summary: "Kimia pengolahan air baku untuk sistem klarifikasi, pelunakan, desalinasi, dan reverse osmosis.",
    items: ["Coagulant", "Flocculant", "Antiscalant", "Antifoam"],
    apps: "Clarifier, Softening, Desalinasi, RO System",
  },
  {
    icon: Waves,
    title: "Effluent",
    summary: "Solusi treatment air buangan untuk klarifikasi dan proses dewatering lumpur.",
    items: ["Coagulant", "Flocculant"],
    apps: "Clarifier, Sludge Dewatering",
  },
  {
    icon: Flame,
    title: "Boiler",
    summary: "Kimia perawatan boiler untuk tekanan rendah, menengah, dan tinggi.",
    items: ["Oxygen Scavenger", "Internal Treatment", "Condensate Treatment"],
    apps: "High / Medium / Low Pressure Boiler",
  },
  {
    icon: Wind,
    title: "Cooling",
    summary: "Inhibitor korosi, kerak, dan kontrol mikrobiologi untuk sistem pendingin.",
    items: ["Corrosion Inhibitor", "Scale Inhibitor", "Microbiological Control"],
    apps: "Open & Closed Cooling System",
  },
  {
    icon: Filter,
    title: "Reverse Osmosis",
    summary: "Treatment lengkap untuk membran RO air laut maupun air payau.",
    items: ["Antiscalant", "Dechlorine", "Biocide", "Acid Cleaner", "Alkaline Cleaner", "Membrane"],
    apps: "Sea Water RO, Brackish Water RO",
  },
  {
    icon: Trash2,
    title: "Waste Water",
    summary: "Kimia pengolahan air limbah untuk berbagai jenis industri.",
    items: ["Organic Coagulant", "Inorganic Coagulant", "Anionic Flocculant", "Cationic Flocculant", "Antifoam"],
    apps: "Industrial Waste Water Treatment",
  },
  {
    icon: BarChart3,
    title: "Commodity Trading",
    summary: "Perdagangan komoditas pendukung operasional industri.",
    items: ["Membrane", "Sulfur", "Quicklime & Limestone", "Coal", "Nickel"],
    apps: "Industrial Supply Chain",
  },
];

export default function ProductCategories() {
  const [expanded, setExpanded] = useState<number | null>(null);

  return (
    <section id="produk" className="py-28 md:py-36 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-secondary/20 to-background" />
      
      <div className="container mx-auto px-4 md:px-8 relative z-10">
        <AnimatedSection>
          <div className="text-center max-w-3xl mx-auto mb-20">
            <span className="text-xs font-bold text-aqua tracking-[0.2em] uppercase mb-5 block">Produk</span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-foreground leading-tight mb-6">
              Kategori <span className="text-gradient">Produk Unggulan</span>
            </h2>
            <p className="text-lg text-muted-foreground">
              Tujuh lini produk kimia spesialti yang dirancang untuk memenuhi setiap kebutuhan pengolahan air industri Anda.
            </p>
          </div>
        </AnimatedSection>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {products.map((p, i) => {
            const isExpanded = expanded === i;
            return (
              <AnimatedSection key={p.title} delay={i * 80}>
                <div
                  className={`group p-7 rounded-2xl bg-card border transition-all duration-700 cursor-pointer hover:shadow-2xl hover:shadow-ocean/[0.06] hover:-translate-y-1 relative overflow-hidden ${
                    isExpanded ? "border-aqua/30 shadow-xl shadow-aqua/[0.08]" : "border-border hover:border-ocean/25"
                  }`}
                  onClick={() => setExpanded(isExpanded ? null : i)}
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-ocean/[0.01] to-aqua/[0.02] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <div className="relative z-10">
                    <div className="flex items-start justify-between mb-5">
                      <div className="w-13 h-13 rounded-xl bg-gradient-to-br from-ocean/10 to-aqua/10 flex items-center justify-center group-hover:from-ocean/20 group-hover:to-aqua/15 group-hover:shadow-lg group-hover:shadow-ocean/10 transition-all duration-500 p-3">
                        <p.icon className="w-6 h-6 text-ocean group-hover:text-aqua transition-colors duration-300" />
                      </div>
                      <ChevronDown className={`w-5 h-5 text-muted-foreground transition-transform duration-500 ${isExpanded ? "rotate-180 text-aqua" : ""}`} />
                    </div>
                    <h3 className="text-xl font-bold text-foreground mb-2">{p.title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">{p.summary}</p>

                    <div className={`overflow-hidden transition-all duration-700 ${isExpanded ? "max-h-60 opacity-100 mt-5" : "max-h-0 opacity-0"}`}>
                      <div className="pt-5 border-t border-border/60">
                        <p className="text-[10px] font-bold text-aqua uppercase tracking-[0.15em] mb-2.5">Produk</p>
                        <div className="flex flex-wrap gap-2 mb-4">
                          {p.items.map((item) => (
                            <span key={item} className="text-xs px-3 py-1.5 rounded-full bg-secondary text-secondary-foreground font-medium">{item}</span>
                          ))}
                        </div>
                        <p className="text-[10px] font-bold text-aqua uppercase tracking-[0.15em] mb-1.5">Aplikasi</p>
                        <p className="text-sm text-muted-foreground">{p.apps}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </AnimatedSection>
            );
          })}
        </div>
      </div>
    </section>
  );
}
