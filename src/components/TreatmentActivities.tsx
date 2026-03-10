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
    <section className="py-32 md:py-40 bg-navy relative overflow-hidden">
      <div className="absolute inset-0 opacity-[0.02]" style={{
        backgroundImage: `radial-gradient(circle at 1px 1px, hsl(var(--aqua)) 0.5px, transparent 0)`,
        backgroundSize: '40px 40px'
      }} />
      <div className="absolute top-1/4 right-0 w-[500px] h-[500px] bg-ocean/6 rounded-full blur-[180px]" />

      <div className="container mx-auto px-4 md:px-8 relative z-10">
        <AnimatedSection>
          <div className="text-center max-w-2xl mx-auto mb-20">
            <span className="text-[11px] font-bold text-aqua tracking-[0.25em] uppercase mb-6 block">Aktivitas Treatment</span>
            <h2 className="text-3xl md:text-4xl lg:text-[2.75rem] font-extrabold text-white leading-tight mb-5">
              Implementasi <span className="text-gradient">di Lapangan</span>
            </h2>
            <div className="section-divider mb-6" />
            <p className="text-white/40 text-[17px]">
              Pengalaman nyata dalam pelaksanaan treatment, penanganan kimia, dan dukungan operasional di berbagai lokasi industri.
            </p>
          </div>
        </AnimatedSection>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {activities.map((a, i) => (
            <AnimatedSection key={a.title} delay={i * 80}>
              <div className="group glass-card rounded-2xl p-8 hover:border-aqua/20 transition-all duration-500 hover:-translate-y-1 hover:shadow-lg hover:shadow-aqua/[0.04] relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-ocean/[0.015] to-aqua/[0.02] opacity-0 group-hover:opacity-100 transition-opacity duration-400" />
                <div className="relative z-10">
                  <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-ocean/15 to-aqua/10 flex items-center justify-center mb-6 group-hover:shadow-md group-hover:shadow-aqua/8 transition-all duration-400">
                    <a.icon className="w-5 h-5 text-aqua/60 group-hover:text-aqua transition-colors duration-300" />
                  </div>
                  <h3 className="text-[17px] font-bold text-white mb-2 tracking-tight">{a.title}</h3>
                  <p className="text-white/35 text-[14px] leading-[1.7]">{a.desc}</p>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
