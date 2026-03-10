import AnimatedSection from "./AnimatedSection";

export default function BrandIntro() {
  return (
    <section id="tentang" className="py-24 md:py-36 relative">
      <div className="container mx-auto px-6 md:px-10">
        {/* Large editorial pull-quote style */}
        <AnimatedSection>
          <div className="max-w-5xl mx-auto">
            <span className="text-ocean/40 text-[11px] font-semibold tracking-[0.25em] uppercase block mb-10">Tentang ARRAD</span>
            <h2 className="text-[1.75rem] sm:text-[2.25rem] md:text-[2.75rem] lg:text-[3.25rem] font-bold text-foreground leading-[1.2] mb-0">
              Mitra terpercaya dalam{" "}
              <span className="text-gradient">kimia pengolahan air</span>{" "}
              industri — menghadirkan solusi spesialti sejak 1998 untuk sektor 
              energi, manufaktur, dan infrastruktur di seluruh Indonesia.
            </h2>
          </div>
        </AnimatedSection>

        {/* Two-column detail — offset for visual interest */}
        <AnimatedSection delay={200}>
          <div className="max-w-5xl mx-auto mt-16 md:mt-24 grid md:grid-cols-5 gap-8 md:gap-12">
            <div className="md:col-span-2">
              <div className="w-full h-px bg-border mb-8" />
              <p className="text-muted-foreground text-[15px] leading-[1.85]">
                <strong className="text-foreground font-semibold">PT. Poly Arrad Pusaka</strong> berfokus pada formulasi, produksi, dan distribusi bahan kimia berkualitas tinggi untuk pengolahan air dan air limbah industri.
              </p>
            </div>
            <div className="md:col-span-3 md:pl-8">
              <div className="w-full h-px bg-border mb-8" />
              <p className="text-muted-foreground text-[15px] leading-[1.85]">
                Didukung fasilitas manufaktur dan laboratorium modern di Surabaya, kami melayani kebutuhan industri, komersial, dan utilitas publik dengan standar mutu internasional. Tim ahli kami bekerja langsung di lapangan untuk memastikan setiap program treatment berjalan optimal.
              </p>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
