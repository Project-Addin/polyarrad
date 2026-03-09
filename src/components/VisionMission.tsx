import AnimatedSection from "./AnimatedSection";
import { Eye, Rocket, Beaker, Users, Leaf, Award } from "lucide-react";

const missions = [
  { icon: Beaker, text: "Mengembangkan dan menerapkan teknologi terkini dalam formulasi kimia pengolahan air." },
  { icon: Users, text: "Menyediakan tim ahli berpengalaman yang siap memberikan solusi terbaik di lapangan." },
  { icon: Rocket, text: "Mendorong inovasi melalui riset dan pengembangan yang berkelanjutan." },
  { icon: Award, text: "Menjaga standar mutu tertinggi dalam setiap produk dan layanan." },
  { icon: Leaf, text: "Berkomitmen pada praktik bisnis yang bertanggung jawab terhadap lingkungan." },
];

export default function VisionMission() {
  return (
    <section className="py-24 md:py-32 relative">
      <div className="container mx-auto px-4 md:px-8">
        <div className="grid lg:grid-cols-2 gap-12 md:gap-16">
          {/* Vision */}
          <AnimatedSection>
            <div className="h-full p-10 md:p-12 rounded-2xl bg-gradient-to-br from-navy to-navy-light relative overflow-hidden">
              <div className="absolute top-0 right-0 w-64 h-64 bg-ocean/10 rounded-full blur-[80px]" />
              <div className="relative z-10">
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-ocean/20 to-aqua/20 flex items-center justify-center mb-6">
                  <Eye className="w-7 h-7 text-aqua" />
                </div>
                <span className="text-sm font-semibold text-aqua tracking-[0.15em] uppercase mb-4 block">Visi</span>
                <h3 className="text-2xl md:text-3xl font-extrabold text-white leading-snug">
                  Menjadi perusahaan kimia pengolahan air terdepan di Indonesia yang diakui secara internasional atas inovasi, kualitas, dan keandalan layanan.
                </h3>
              </div>
            </div>
          </AnimatedSection>

          {/* Mission */}
          <AnimatedSection delay={150}>
            <div>
              <span className="text-sm font-semibold text-aqua tracking-[0.15em] uppercase mb-4 block">Misi</span>
              <h3 className="text-2xl md:text-3xl font-extrabold text-foreground mb-8">
                Pilar Misi <span className="text-gradient">ARRAD Chemicals</span>
              </h3>
              <div className="flex flex-col gap-4">
                {missions.map((m, i) => (
                  <div key={i} className="flex items-start gap-4 p-4 rounded-xl bg-card border border-border hover:border-ocean/20 transition-all duration-300 group">
                    <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-ocean/10 to-aqua/10 flex items-center justify-center flex-shrink-0 group-hover:from-ocean/20 group-hover:to-aqua/20 transition-all">
                      <m.icon className="w-5 h-5 text-ocean" />
                    </div>
                    <p className="text-muted-foreground leading-relaxed pt-1">{m.text}</p>
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
