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
    <section className="py-28 md:py-36 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-secondary/15 to-background" />
      
      <div className="container mx-auto px-4 md:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 md:gap-16">
          {/* Vision */}
          <AnimatedSection>
            <div className="h-full p-10 md:p-14 rounded-3xl bg-gradient-to-br from-navy to-navy-light relative overflow-hidden shadow-2xl">
              <div className="absolute top-0 right-0 w-72 h-72 bg-ocean/10 rounded-full blur-[100px]" />
              <div className="absolute bottom-0 left-0 w-48 h-48 bg-aqua/5 rounded-full blur-[80px]" />
              <div className="absolute inset-0 opacity-[0.03]" style={{
                backgroundImage: `linear-gradient(hsl(var(--aqua)) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--aqua)) 1px, transparent 1px)`,
                backgroundSize: '40px 40px'
              }} />
              <div className="relative z-10">
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-ocean/20 to-aqua/15 flex items-center justify-center mb-7 shadow-lg shadow-ocean/10">
                  <Eye className="w-7 h-7 text-aqua" />
                </div>
                <span className="text-xs font-bold text-aqua tracking-[0.2em] uppercase mb-5 block">Visi</span>
                <h3 className="text-2xl md:text-3xl font-extrabold text-white leading-snug">
                  Menjadi perusahaan kimia pengolahan air terdepan di Indonesia yang diakui secara internasional atas inovasi, kualitas, dan keandalan layanan.
                </h3>
              </div>
            </div>
          </AnimatedSection>

          {/* Mission */}
          <AnimatedSection delay={150}>
            <div>
              <span className="text-xs font-bold text-aqua tracking-[0.2em] uppercase mb-5 block">Misi</span>
              <h3 className="text-2xl md:text-3xl font-extrabold text-foreground mb-10">
                Pilar Misi <span className="text-gradient">ARRAD Chemicals</span>
              </h3>
              <div className="flex flex-col gap-4">
                {missions.map((m, i) => (
                  <div key={i} className="flex items-start gap-4 p-5 rounded-2xl bg-card border border-border hover:border-ocean/20 transition-all duration-500 group hover:shadow-lg hover:shadow-ocean/[0.03] hover:-translate-y-0.5">
                    <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-ocean/10 to-aqua/10 flex items-center justify-center flex-shrink-0 group-hover:from-ocean/20 group-hover:to-aqua/15 group-hover:shadow-md group-hover:shadow-ocean/10 transition-all duration-500">
                      <m.icon className="w-5 h-5 text-ocean group-hover:text-aqua transition-colors duration-300" />
                    </div>
                    <p className="text-muted-foreground leading-relaxed pt-1.5">{m.text}</p>
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
