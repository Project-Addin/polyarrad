import AnimatedSection from "./AnimatedSection";
import { Wrench, TestTubes, HardHat, Pipette, Truck, Settings } from "lucide-react";

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
    <section className="py-24 md:py-32 bg-navy relative overflow-hidden">
      <div className="absolute inset-0 opacity-[0.03]" style={{
        backgroundImage: `radial-gradient(circle at 1px 1px, hsl(var(--aqua)) 1px, transparent 0)`,
        backgroundSize: '32px 32px'
      }} />

      <div className="container mx-auto px-4 md:px-8 relative z-10">
        <AnimatedSection>
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-sm font-semibold text-aqua tracking-[0.15em] uppercase mb-4 block">Aktivitas Treatment</span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-white leading-tight mb-6">
              Implementasi <span className="text-gradient">di Lapangan</span>
            </h2>
            <p className="text-lg text-white/50">
              Pengalaman nyata dalam pelaksanaan treatment, penanganan kimia, dan dukungan operasional di berbagai lokasi industri.
            </p>
          </div>
        </AnimatedSection>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {activities.map((a, i) => (
            <AnimatedSection key={a.title} delay={i * 100}>
              <div className="group glass-card rounded-2xl p-8 hover:border-aqua/30 transition-all duration-500 hover:-translate-y-1">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-ocean/20 to-aqua/20 flex items-center justify-center mb-5 group-hover:from-ocean/30 group-hover:to-aqua/30 transition-all">
                  <a.icon className="w-6 h-6 text-aqua/80 group-hover:text-aqua transition-colors" />
                </div>
                <h3 className="text-lg font-bold text-white mb-2">{a.title}</h3>
                <p className="text-white/50 text-sm leading-relaxed">{a.desc}</p>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
