import AnimatedSection from "./AnimatedSection";

const certs = [
  { name: "ISO 9001:2015", desc: "Sistem manajemen mutu terakreditasi" },
  { name: "KAN", desc: "Komite Akreditasi Nasional" },
  { name: "NSF", desc: "Standar keamanan air internasional" },
  { name: "Halal", desc: "Kepatuhan halal dalam produksi" },
];

export default function Certifications() {
  return (
    <section id="sertifikasi" className="py-20 md:py-28 relative">
      <div className="container mx-auto px-6 md:px-10">
        <AnimatedSection>
          {/* Inline horizontal layout — different from every other section */}
          <div className="flex flex-col lg:flex-row lg:items-center gap-10 lg:gap-16">
            <div className="lg:flex-shrink-0">
              <span className="text-ocean/40 text-[11px] font-semibold tracking-[0.25em] uppercase block mb-4">Sertifikasi</span>
              <h2 className="text-2xl md:text-[2rem] font-bold text-foreground leading-[1.15]">
                Jaminan mutu &<br /><span className="text-gradient">kepercayaan</span>
              </h2>
            </div>
            <div className="w-px h-16 bg-border hidden lg:block" />
            <div className="flex flex-wrap gap-4 md:gap-6 flex-1">
              {certs.map((c, i) => (
                <AnimatedSection key={c.name} delay={i * 80}>
                  <div className="group flex items-center gap-4 px-6 py-4 rounded-xl border border-border/50 bg-card hover:border-ocean/15 transition-all duration-500">
                    <span className="text-lg font-bold text-foreground tracking-tight">{c.name}</span>
                    <span className="text-[12px] text-muted-foreground/50 hidden sm:inline">{c.desc}</span>
                  </div>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
