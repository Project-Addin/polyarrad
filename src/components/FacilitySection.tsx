import AnimatedSection from "./AnimatedSection";
import facilityImage from "@/assets/facility-warehouse.jpg";
import { Factory, Truck, FlaskConical, ShieldCheck } from "lucide-react";

const highlights = [
  { icon: Factory, label: "Pabrik Produksi", desc: "Fasilitas manufaktur modern" },
  { icon: FlaskConical, label: "Laboratorium QC", desc: "Pengujian mutu ketat" },
  { icon: Truck, label: "Gudang & Distribusi", desc: "Logistik terintegrasi" },
  { icon: ShieldCheck, label: "Standar K3", desc: "Keselamatan prioritas utama" },
];

export default function FacilitySection() {
  return (
    <section className="py-16 sm:py-28 md:py-40 bg-card relative">
      <div className="container mx-auto px-5 sm:px-6 md:px-10">
        <AnimatedSection>
          <div className="text-center mb-10 sm:mb-16 md:mb-20">
            <div className="flex items-center justify-center gap-3 mb-6 sm:mb-8">
              <div className="w-8 h-px bg-ocean/40" />
              <span className="section-label">Fasilitas Kami</span>
              <div className="w-8 h-px bg-ocean/40" />
            </div>
            <h2 className="text-[1.75rem] sm:text-3xl md:text-[2.75rem] font-bold text-foreground leading-[1.15] sm:leading-[1.1] max-w-xl mx-auto">
              Fasilitas <span className="text-gradient">Produksi & Distribusi</span>
            </h2>
          </div>
        </AnimatedSection>

        <div className="grid lg:grid-cols-2 gap-6 sm:gap-8 max-w-6xl mx-auto items-center">
          {/* Image */}
          <AnimatedSection>
            <div className="relative rounded-2xl overflow-hidden aspect-[3/2] sm:aspect-[4/3]">
              <img
                src={facilityImage}
                alt="Gudang penyimpanan bahan kimia ARRAD Chemicals"
                className="absolute inset-0 w-full h-full object-cover"
              />
              <div
                className="absolute inset-0"
                style={{
                  background: "linear-gradient(180deg, transparent 50%, hsl(var(--navy) / 0.5) 100%)",
                }}
              />
            </div>
          </AnimatedSection>

          {/* Highlights */}
          <AnimatedSection delay={150}>
            <div className="grid grid-cols-2 gap-3 sm:gap-4">
              {highlights.map((item) => (
                <div
                  key={item.label}
                  className="bg-secondary/40 rounded-xl border border-border/60 p-4 sm:p-6 flex flex-col gap-2 sm:gap-3"
                >
                  <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-lg bg-ocean/8 flex items-center justify-center">
                    <item.icon className="w-4 h-4 sm:w-5 sm:h-5 text-ocean" />
                  </div>
                  <h3 className="text-[13px] sm:text-[15px] font-bold text-foreground">{item.label}</h3>
                  <p className="text-[11px] sm:text-[13px] text-muted-foreground leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}
