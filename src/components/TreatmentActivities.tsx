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
    <section className="py-28 md:py-40 bg-navy relative overflow-hidden">
      <div className="absolute inset-0 opacity-[0.015]" style={{
        backgroundImage: `radial-gradient(circle at 1px 1px, hsl(var(--aqua)) 0.5px, transparent 0)`,
        backgroundSize: '48px 48px'
      }} />
      <div className="absolute top-1/4 right-0 w-[400px] h-[400px] bg-ocean/4 rounded-full blur-[200px]" />

      <div className="container mx-auto px-6 md:px-10 relative z-10">
        <AnimatedSection>
          <div className="flex items-center gap-3 mb-8">
            <div className="w-8 h-px bg-aqua/40" />
            <span className="text-[11px] font-semibold text-aqua/50 tracking-[0.2em] uppercase">Aktivitas Treatment</span>
          </div>
          <h2 className="text-3xl md:text-[2.75rem] font-bold text-white leading-[1.1] mb-16 md:mb-20 max-w-lg">
            Implementasi <span className="text-gradient">di lapangan</span>
          </h2>
        </AnimatedSection>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-px bg-white/[0.04] rounded-2xl overflow-hidden">
          {activities.map((a, i) => (
            <AnimatedSection key={a.title} delay={i * 70}>
              <div className="group p-9 bg-navy hover:bg-navy-light transition-all duration-500">
                <a.icon className="w-5 h-5 text-white/15 mb-6 group-hover:text-aqua/50 transition-colors duration-400" />
                <h3 className="text-[15px] font-bold text-white/60 group-hover:text-white transition-colors mb-2">{a.title}</h3>
                <p className="text-white/20 group-hover:text-white/35 text-[13px] leading-[1.75] transition-colors duration-400">{a.desc}</p>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
