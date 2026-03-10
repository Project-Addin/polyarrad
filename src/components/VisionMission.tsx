import AnimatedSection from "./AnimatedSection";

const missions = [
  "Mengembangkan teknologi terkini dalam formulasi kimia pengolahan air.",
  "Menyediakan tim ahli berpengalaman yang siap memberikan solusi terbaik.",
  "Mendorong inovasi melalui riset dan pengembangan yang berkelanjutan.",
  "Menjaga standar mutu tertinggi dalam setiap produk dan layanan.",
  "Berkomitmen pada praktik bisnis yang bertanggung jawab terhadap lingkungan.",
];

export default function VisionMission() {
  return (
    <section className="py-24 md:py-36 bg-navy relative overflow-hidden">
      <div className="absolute top-0 left-[30%] w-[400px] h-[400px] bg-ocean/4 rounded-full blur-[200px]" />

      <div className="container mx-auto px-6 md:px-10 relative z-10">
        {/* Full-width vision statement */}
        <AnimatedSection>
          <div className="mb-20 md:mb-28">
            <span className="text-aqua/35 text-[11px] font-semibold tracking-[0.25em] uppercase block mb-8">Visi</span>
            <h2 className="text-2xl sm:text-[2rem] md:text-[2.5rem] lg:text-[3rem] font-bold text-white/80 leading-[1.25] max-w-4xl">
              Menjadi perusahaan kimia pengolahan air terdepan di Indonesia yang diakui secara internasional atas inovasi, kualitas, dan keandalan layanan.
            </h2>
          </div>
        </AnimatedSection>

        {/* Mission — simple numbered list, not cards */}
        <AnimatedSection delay={150}>
          <div className="border-t border-white/[0.05] pt-14">
            <span className="text-aqua/35 text-[11px] font-semibold tracking-[0.25em] uppercase block mb-10">Misi</span>
            <div className="grid md:grid-cols-2 gap-x-16 gap-y-6 max-w-4xl">
              {missions.map((m, i) => (
                <div key={i} className="flex items-start gap-4 group">
                  <span className="text-[11px] font-mono text-white/10 mt-1.5 flex-shrink-0">0{i + 1}</span>
                  <p className="text-white/25 leading-[1.75] text-[15px]">{m}</p>
                </div>
              ))}
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
