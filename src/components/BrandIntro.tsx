import AnimatedSection from "./AnimatedSection";
import StatCounter from "./StatCounter";
import introImage from "@/assets/intro-laboratory.jpg";

export default function BrandIntro() {
  return (
    <section id="tentang" className="py-24 md:py-36 bg-background">
      <div className="container mx-auto px-6 md:px-10">
        {/* Editorial two-column with image */}
        <AnimatedSection>
          <div className="grid md:grid-cols-12 gap-10 md:gap-16 mb-20 md:mb-28">
            {/* Left — text content */}
            <div className="md:col-span-6 lg:col-span-5 flex flex-col justify-center">
              <div className="flex items-center gap-3 mb-6">
                <div className="section-rule" />
                <span className="section-label">Tentang Kami</span>
              </div>
              <h2 className="text-3xl md:text-[2.5rem] lg:text-[2.75rem] font-bold text-foreground leading-[1.1] mb-8">
                Mitra industri
                <br />
                dalam kimia
                <br />
                pengolahan air
              </h2>
              <div className="space-y-5">
                <p className="text-muted-foreground text-[15px] md:text-base leading-[1.8]">
                  PT. Poly Arrad Pusaka beroperasi dengan merek dagang{" "}
                  <strong className="text-foreground font-semibold">
                    ARRAD Chemicals
                  </strong>
                  . Berdiri sejak 1998, perusahaan ini berfokus pada formulasi,
                  produksi, dan distribusi bahan kimia spesialti untuk pengolahan
                  air dan air limbah.
                </p>
                <p className="text-muted-foreground text-[15px] md:text-base leading-[1.8]">
                  Dengan fasilitas manufaktur dan laboratorium di Surabaya, kami
                  melayani kebutuhan sektor industri, komersial, dan utilitas di
                  seluruh Indonesia.
                </p>
              </div>
            </div>

            {/* Right — image */}
            <div className="md:col-span-6 lg:col-span-7">
              <div className="relative rounded-xl overflow-hidden aspect-[4/3] md:aspect-auto md:h-full min-h-[320px]">
                <img
                  src={introImage}
                  alt="Laboratorium pengujian kualitas air ARRAD Chemicals"
                  className="absolute inset-0 w-full h-full object-cover"
                />
                {/* Subtle brand overlay */}
                <div
                  className="absolute inset-0"
                  style={{
                    background:
                      "linear-gradient(135deg, hsl(var(--ocean) / 0.08) 0%, transparent 60%, hsl(var(--navy) / 0.12) 100%)",
                  }}
                />
                {/* Bottom fade for blending */}
                <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-background/20 to-transparent" />
              </div>
            </div>
          </div>
        </AnimatedSection>

        {/* Stats — clean horizontal strip */}
        <AnimatedSection delay={150}>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-0 md:divide-x md:divide-border pt-10 border-t border-border">
            {[
              { end: 25, suffix: "+", label: "Tahun Beroperasi" },
              { end: 7, suffix: "", label: "Lini Produk" },
              { end: 500, suffix: "+", label: "Proyek Terlayani" },
              { end: 100, suffix: "+", label: "Klien Aktif" },
            ].map((stat, i) => (
              <div key={i} className="md:px-8 first:md:pl-0 last:md:pr-0">
                <StatCounter
                  end={stat.end}
                  suffix={stat.suffix}
                  label={stat.label}
                />
              </div>
            ))}
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
