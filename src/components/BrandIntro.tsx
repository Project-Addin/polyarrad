import AnimatedSection from "./AnimatedSection";
import StatCounter from "./StatCounter";

export default function BrandIntro() {
  return (
    <section id="tentang" className="py-28 md:py-40 relative">
      <div className="container mx-auto px-6 md:px-10">
        <AnimatedSection>
          <div className="max-w-4xl mb-24 md:mb-32">
            <div className="flex items-center gap-3 mb-8">
              <div className="w-8 h-px bg-ocean/40" />
              <span className="section-label">Tentang ARRAD</span>
            </div>
            <h2 className="text-3xl md:text-[2.75rem] lg:text-[3.25rem] font-bold text-foreground leading-[1.08] mb-10">
              Mitra terpercaya dalam
              <br />
              <span className="text-gradient">kimia pengolahan air</span> industri
            </h2>
            <div className="grid md:grid-cols-2 gap-8 md:gap-16">
              <p className="text-muted-foreground text-[16px] leading-[1.85]">
                PT. Poly Arrad Pusaka, dengan merek dagang <strong className="text-foreground font-semibold">ARRAD Chemicals</strong>, adalah perusahaan kimia spesialti Indonesia yang berdiri sejak 1998. Kami berfokus pada formulasi, produksi, dan distribusi bahan kimia berkualitas tinggi untuk pengolahan air dan air limbah.
              </p>
              <p className="text-muted-foreground text-[16px] leading-[1.85]">
                Didukung fasilitas manufaktur dan laboratorium modern di Surabaya, kami melayani kebutuhan industri, komersial, dan utilitas publik di seluruh Indonesia dengan standar mutu internasional.
              </p>
            </div>
          </div>
        </AnimatedSection>

        {/* Stats */}
        <AnimatedSection delay={200}>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-px bg-border/50 rounded-2xl overflow-hidden border border-border/60">
            {[
              { end: 25, suffix: "+", label: "Tahun Pengalaman" },
              { end: 100, suffix: "+", label: "Klien Industri" },
              { end: 7, suffix: "", label: "Lini Produk" },
              { end: 500, suffix: "+", label: "Proyek Selesai" },
            ].map((stat, i) => (
              <div key={i} className="bg-card p-8 md:p-12 text-center">
                <StatCounter end={stat.end} suffix={stat.suffix} label={stat.label} />
              </div>
            ))}
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
