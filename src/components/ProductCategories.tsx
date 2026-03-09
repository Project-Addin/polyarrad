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
    items: ["Membrane", "Sulfur", "Quickite & Limestone", "Coal", "Nickel"],
    apps: "Industrial Supply Chain",
  },
];

export default function ProductCategories() {
  const [expanded, setExpanded] = useState<number | null>(null);

  return (
    <section id="produk" className="py-24 md:py-32 relative">
      <div className="container mx-auto px-4 md:px-8">
        <AnimatedSection>
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-sm font-semibold text-aqua tracking-[0.15em] uppercase mb-4 block">Produk</span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-foreground leading-tight mb-6">
              Kategori <span className="text-gradient">Produk Unggulan</span>
            </h2>
            <p className="text-lg text-muted-foreground">
              Tujuh lini produk kimia spesialti yang dirancang untuk memenuhi setiap kebutuhan pengolahan air industri Anda.
            </p>
          </div>
        </AnimatedSection>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((p, i) => {
            const isExpanded = expanded === i;
            return (
              <AnimatedSection key={p.title} delay={i * 80}>
                <div
                  className={`group p-6 rounded-2xl bg-card border transition-all duration-500 cursor-pointer hover:shadow-xl hover:shadow-ocean/5 hover:-translate-y-1 ${
                    isExpanded ? "border-aqua/40 shadow-lg shadow-aqua/10" : "border-border hover:border-ocean/30"
                  }`}
                  onClick={() => setExpanded(isExpanded ? null : i)}
                >
                  <div className="flex items-start justify-between mb-4">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-ocean/10 to-aqua/10 flex items-center justify-center group-hover:from-ocean/20 group-hover:to-aqua/20 transition-all">
                      <p.icon className="w-6 h-6 text-ocean" />
                    </div>
                    <ChevronDown className={`w-5 h-5 text-muted-foreground transition-transform duration-300 ${isExpanded ? "rotate-180" : ""}`} />
                  </div>
                  <h3 className="text-xl font-bold text-foreground mb-2">{p.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed mb-3">{p.summary}</p>

                  <div className={`overflow-hidden transition-all duration-500 ${isExpanded ? "max-h-60 opacity-100 mt-4" : "max-h-0 opacity-0"}`}>
                    <div className="pt-4 border-t border-border">
                      <p className="text-xs font-semibold text-aqua uppercase tracking-wider mb-2">Produk</p>
                      <div className="flex flex-wrap gap-2 mb-3">
                        {p.items.map((item) => (
                          <span key={item} className="text-xs px-2.5 py-1 rounded-full bg-secondary text-secondary-foreground font-medium">{item}</span>
                        ))}
                      </div>
                      <p className="text-xs font-semibold text-aqua uppercase tracking-wider mb-1">Aplikasi</p>
                      <p className="text-sm text-muted-foreground">{p.apps}</p>
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
