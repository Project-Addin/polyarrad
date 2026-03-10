import AnimatedSection from "./AnimatedSection";
import { Beaker, Users, Rocket, Award, Leaf } from "lucide-react";

const missions = [
  { icon: Beaker, text: "Mengembangkan dan menerapkan teknologi terkini dalam formulasi kimia pengolahan air." },
  { icon: Users, text: "Menyediakan tim ahli berpengalaman yang siap memberikan solusi terbaik di lapangan." },
  { icon: Rocket, text: "Mendorong inovasi melalui riset dan pengembangan yang berkelanjutan." },
  { icon: Award, text: "Menjaga standar mutu tertinggi dalam setiap produk dan layanan." },
  { icon: Leaf, text: "Berkomitmen pada praktik bisnis yang bertanggung jawab terhadap lingkungan." },
];

export default function VisionMission() {
  return (
    <section className="py-28 md:py-40 relative">
      <div className="container mx-auto px-6 md:px-10">
        <div className="grid lg:grid-cols-2 gap-16 md:gap-24">
          {/* Vision */}
          <AnimatedSection>
            <div className="h-full p-10 md:p-14 rounded-2xl bg-navy relative overflow-hidden">
              <div className="absolute top-0 right-0 w-64 h-64 bg-ocean/6 rounded-full blur-[140px]" />
              <div className="absolute inset-0 opacity-[0.02]" style={{
                backgroundImage: `linear-gradient(hsl(var(--aqua)) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--aqua)) 1px, transparent 1px)`,
                backgroundSize: '48px 48px'
              }} />
              <div className="relative z-10">
                <div className="flex items-center gap-3 mb-10">
                  <div className="w-8 h-px bg-aqua/30" />
                  <span className="text-[11px] font-semibold text-aqua/50 tracking-[0.2em] uppercase">Visi</span>
                </div>
                <h3 className="text-2xl md:text-[1.75rem] font-bold text-white leading-[1.45]">
                  Menjadi perusahaan kimia pengolahan air terdepan di Indonesia yang diakui secara internasional atas inovasi, kualitas, dan keandalan layanan.
                </h3>
              </div>
            </div>
          </AnimatedSection>

          {/* Mission */}
          <AnimatedSection delay={150}>
            <div>
              <div className="flex items-center gap-3 mb-10">
                <div className="w-8 h-px bg-ocean/40" />
                <span className="section-label">Misi</span>
              </div>
              <div className="flex flex-col gap-4">
                {missions.map((m, i) => (
                  <div key={i} className="flex items-start gap-4 group">
                    <div className="w-8 h-8 rounded-lg bg-secondary flex items-center justify-center flex-shrink-0 mt-0.5 group-hover:bg-ocean/10 transition-colors duration-300">
                      <m.icon className="w-4 h-4 text-ocean/60 group-hover:text-ocean transition-colors duration-300" />
                    </div>
                    <p className="text-muted-foreground leading-[1.75] text-[15px] pt-1">{m.text}</p>
                  </div>
                ))}
              </div>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}
