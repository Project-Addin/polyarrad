import AnimatedSection from "./AnimatedSection";
import StatCounter from "./StatCounter";
import { Beaker } from "lucide-react";

export default function BrandIntro() {
  return (
    <section id="tentang" className="py-32 md:py-40 relative">
      <div className="container mx-auto px-4 md:px-8">
        <AnimatedSection>
          <div className="grid md:grid-cols-2 gap-16 md:gap-24 items-center mb-28">
            <div>
              <span className="text-[11px] font-bold text-aqua tracking-[0.25em] uppercase mb-6 block">Tentang Kami</span>
              <h2 className="text-3xl md:text-4xl lg:text-[2.75rem] font-extrabold text-foreground leading-[1.1] mb-8">
                Mitra Terpercaya dalam
                <span className="text-gradient"> Kimia Pengolahan Air</span>
              </h2>
              <div className="section-divider !mx-0 mb-8" />
              <p className="text-muted-foreground text-[17px] leading-[1.8] mb-6">
                PT. Poly Arrad Pusaka, dengan merek dagang <strong className="text-foreground font-semibold">ARRAD Chemicals</strong>, adalah perusahaan kimia spesialti Indonesia yang berdiri sejak 1998. Kami berfokus pada formulasi, produksi, dan distribusi bahan kimia berkualitas tinggi untuk pengolahan air dan air limbah.
              </p>
              <p className="text-muted-foreground leading-[1.8]">
                Didukung fasilitas manufaktur dan laboratorium modern di Surabaya, kami melayani kebutuhan industri, komersial, dan utilitas publik di seluruh Indonesia dengan standar mutu internasional.
              </p>
            </div>
            <div className="relative">
              <div className="aspect-[4/3] rounded-2xl bg-gradient-to-br from-ocean/6 to-aqua/6 border border-border/40 flex items-center justify-center overflow-hidden card-premium">
                <div className="absolute inset-0 opacity-[0.03]" style={{
                  backgroundImage: `radial-gradient(circle at 2px 2px, hsl(var(--ocean)) 1px, transparent 0)`,
                  backgroundSize: '32px 32px'
                }} />
                <div className="text-center relative z-10 p-8">
                  <div className="w-20 h-20 mx-auto rounded-2xl bg-gradient-to-br from-ocean/12 to-aqua/12 flex items-center justify-center mb-6 shadow-lg shadow-ocean/8">
                    <Beaker className="w-10 h-10 text-ocean opacity-60" />
                  </div>
                  <p className="text-lg font-bold text-foreground">Manufaktur & Laboratorium</p>
                  <p className="text-sm text-muted-foreground mt-1.5">Surabaya, Indonesia</p>
                </div>
              </div>
            </div>
          </div>
        </AnimatedSection>

        {/* Stats */}
        <AnimatedSection delay={200}>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 py-16 px-12 rounded-3xl bg-gradient-to-br from-navy to-navy-light relative overflow-hidden shadow-2xl shadow-navy/40">
            <div className="absolute inset-0 opacity-[0.04]" style={{
              backgroundImage: `linear-gradient(90deg, hsl(var(--aqua)) 1px, transparent 1px), linear-gradient(hsl(var(--aqua)) 1px, transparent 1px)`,
              backgroundSize: '64px 64px'
            }} />
            <div className="absolute top-0 right-0 w-96 h-96 bg-ocean/8 rounded-full blur-[120px]" />
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-aqua/5 rounded-full blur-[100px]" />
            <StatCounter end={25} suffix="+" label="Tahun Pengalaman" />
            <StatCounter end={100} suffix="+" label="Klien Industri" />
            <StatCounter end={7} label="Lini Produk" />
            <StatCounter end={500} suffix="+" label="Proyek Selesai" />
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
