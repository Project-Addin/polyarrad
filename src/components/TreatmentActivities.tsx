import AnimatedSection from "./AnimatedSection";
import { TestTubes, Pipette, HardHat, Wrench, Truck, Settings } from "lucide-react";

const activities = [
  { icon: TestTubes, title: "Analisis Laboratorium", desc: "Pengujian sampel air dan bahan kimia untuk memastikan kualitas treatment sesuai standar." },
  { icon: Pipette, title: "Dosing & Chemical Handling", desc: "Implementasi sistem dosing dan penanganan kimia yang aman dan efisien di lapangan." },
  { icon: HardHat, title: "Site Support", desc: "Pendampingan teknis langsung di lokasi untuk commissioning, troubleshooting, dan optimasi." },
  { icon: Wrench, title: "Perawatan Sistem", desc: "Maintenance berkala pada peralatan treatment untuk menjaga performa dan umur pakai." },
  { icon: Truck, title: "Logistik & Supply", desc: "Pengelolaan rantai pasok kimia dari gudang hingga titik penggunaan dengan tepat waktu." },
  { icon: Settings, title: "Optimasi Proses", desc: "Evaluasi dan peningkatan berkelanjutan terhadap efisiensi sistem pengolahan air." },
];

export default function TreatmentActivities() {
  return (
    <section className="py-28 md:py-40 bg-light-blue relative overflow-hidden">
      <div className="container mx-auto px-6 md:px-10 relative z-10">
        <AnimatedSection>
          <div className="flex items-center gap-3 mb-8">
            <div className="w-8 h-px bg-ocean/40" />
            <span className="section-label">Aktivitas Treatment</span>
          </div>
          <h2 className="text-3xl md:text-[2.75rem] font-bold text-foreground leading-[1.1] mb-16 md:mb-20 max-w-lg">
            Implementasi <span className="text-gradient">di lapangan</span>
          </h2>
        </AnimatedSection>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-px bg-border/60 rounded-2xl overflow-hidden border border-border/50">
          {activities.map((a, i) => (
            <AnimatedSection key={a.title} delay={i * 70}>
              <div className="group p-9 bg-card hover:bg-secondary/40 transition-all duration-500">
                <a.icon className="w-5 h-5 text-ocean/40 mb-6 group-hover:text-ocean transition-colors duration-400" />
                <h3 className="text-[15px] font-bold text-foreground/80 group-hover:text-foreground transition-colors mb-2">{a.title}</h3>
                <p className="text-muted-foreground text-[13px] leading-[1.75] transition-colors duration-400">{a.desc}</p>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}