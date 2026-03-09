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
    <section className="py-28 md:py-36 bg-navy relative overflow-hidden">
      <div className="absolute inset-0 opacity-[0.025]" style={{
        backgroundImage: `radial-gradient(circle at 1px 1px, hsl(var(--aqua)) 1px, transparent 0)`,
        backgroundSize: '36px 36px'
      }} />
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-ocean/8 rounded-full blur-[150px]" />

      <div className="container mx-auto px-4 md:px-8 relative z-10">
        <AnimatedSection>
          <div className="text-center max-w-3xl mx-auto mb-20">
            <span className="text-xs font-bold text-aqua tracking-[0.2em] uppercase mb-5 block">Aktivitas Treatment</span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-white leading-tight mb-6">
              Implementasi <span className="text-gradient">di Lapangan</span>
            </h2>
            <p className="text-lg text-white/45">
              Pengalaman nyata dalam pelaksanaan treatment, penanganan kimia, dan dukungan operasional di berbagai lokasi industri.
            </p>
          </div>
        </AnimatedSection>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {activities.map((a, i) => (
            <AnimatedSection key={a.title} delay={i * 100}>
              <div className="group glass-card rounded-2xl p-8 hover:border-aqua/25 transition-all duration-700 hover:-translate-y-1.5 hover:shadow-xl hover:shadow-aqua/[0.05] relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-ocean/[0.02] to-aqua/[0.03] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="relative z-10">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-ocean/20 to-aqua/15 flex items-center justify-center mb-6 group-hover:from-ocean/30 group-hover:to-aqua/25 group-hover:shadow-lg group-hover:shadow-aqua/10 transition-all duration-500">
                    <a.icon className="w-6 h-6 text-aqua/70 group-hover:text-aqua transition-colors duration-300" />
                  </div>
                  <h3 className="text-lg font-bold text-white mb-2">{a.title}</h3>
                  <p className="text-white/45 text-sm leading-relaxed">{a.desc}</p>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
