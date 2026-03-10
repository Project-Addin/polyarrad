import AnimatedSection from "./AnimatedSection";
import { TestTubes, Pipette, HardHat, Wrench, Truck, Settings } from "lucide-react";

const activities = [
  { icon: TestTubes, title: "Analisis Laboratorium", desc: "Pengujian sampel air dan bahan kimia untuk memastikan kualitas treatment sesuai standar." },
  { icon: Pipette, title: "Dosing & Chemical Handling", desc: "Implementasi sistem dosing dan penanganan kimia yang aman dan efisien." },
  { icon: HardHat, title: "Site Support", desc: "Pendampingan teknis langsung di lokasi untuk commissioning dan troubleshooting." },
  { icon: Wrench, title: "Perawatan Sistem", desc: "Maintenance berkala pada peralatan treatment untuk menjaga performa." },
  { icon: Truck, title: "Logistik & Supply", desc: "Pengelolaan rantai pasok kimia dari gudang hingga titik penggunaan." },
  { icon: Settings, title: "Optimasi Proses", desc: "Evaluasi dan peningkatan berkelanjutan terhadap efisiensi sistem." },
];

export default function TreatmentActivities() {
  return (
    <section className="py-20 md:py-28 bg-secondary/20 relative">
      <div className="container mx-auto px-6 md:px-10">
        <AnimatedSection>
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14 md:mb-20">
            <div>
              <span className="text-ocean/40 text-[11px] font-semibold tracking-[0.25em] uppercase block mb-6">Aktivitas Treatment</span>
              <h2 className="text-2xl md:text-[2rem] font-bold text-foreground leading-[1.15] max-w-md">
                Implementasi <span className="text-gradient">di lapangan</span>
              </h2>
            </div>
          </div>
        </AnimatedSection>

        {/* Horizontal scrollable on mobile, 3-col on desktop — different layout */}
        <div className="grid grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-10 md:gap-y-12">
          {activities.map((a, i) => (
            <AnimatedSection key={a.title} delay={i * 60}>
              <div className="group">
                <div className="flex items-center gap-3 mb-3">
                  <a.icon className="w-4 h-4 text-muted-foreground/25 group-hover:text-ocean/50 transition-colors duration-500" />
                  <h3 className="text-[14px] font-bold text-foreground">{a.title}</h3>
                </div>
                <p className="text-muted-foreground/60 text-[13px] leading-[1.75] pl-7">{a.desc}</p>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
