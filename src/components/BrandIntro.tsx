import AnimatedSection from "./AnimatedSection";
import StatCounter from "./StatCounter";
import { Beaker } from "lucide-react";

export default function BrandIntro() {
  return (
    <section id="tentang" className="py-28 md:py-36 relative">
      <div className="container mx-auto px-4 md:px-8">
        <AnimatedSection>
          <div className="grid md:grid-cols-2 gap-14 md:gap-20 items-center mb-24">
            <div>
              <span className="text-xs font-bold text-aqua tracking-[0.2em] uppercase mb-5 block">Tentang Kami</span>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-foreground leading-[1.1] mb-7">
                Mitra Terpercaya dalam
                <span className="text-gradient"> Kimia Pengolahan Air</span>
              </h2>
              <p className="text-muted-foreground text-lg leading-relaxed mb-5">
                PT. Poly Arrad Pusaka, dengan merek dagang <strong className="text-foreground">ARRAD Chemicals</strong>, adalah perusahaan kimia spesialti Indonesia yang berdiri sejak 1998. Kami berfokus pada formulasi, produksi, dan distribusi bahan kimia berkualitas tinggi untuk pengolahan air dan air limbah.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Didukung fasilitas manufaktur dan laboratorium modern di Surabaya, kami melayani kebutuhan industri, komersial, dan utilitas publik di seluruh Indonesia dengan standar mutu internasional.
              </p>
            </div>
            <div className="relative">
              <div className="aspect-[4/3] rounded-2xl bg-gradient-to-br from-ocean/8 to-aqua/8 border border-border/50 flex items-center justify-center overflow-hidden">
                <div className="absolute inset-0 opacity-[0.04]" style={{
                  backgroundImage: `radial-gradient(circle at 2px 2px, hsl(var(--ocean)) 1px, transparent 0)`,
                  backgroundSize: '28px 28px'
                }} />
                <div className="text-center relative z-10 p-8">
                  <div className="w-20 h-20 mx-auto rounded-2xl bg-gradient-to-br from-ocean/15 to-aqua/15 flex items-center justify-center mb-5">
                    <Beaker className="w-10 h-10 text-ocean opacity-70" />
                  </div>
                  <p className="text-lg font-bold text-foreground">Manufaktur & Laboratorium</p>
                  <p className="text-sm text-muted-foreground mt-1">Surabaya, Indonesia</p>
                </div>
              </div>
            </div>
          </div>
        </AnimatedSection>

        {/* Stats */}
        <AnimatedSection delay={200}>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 py-14 px-10 rounded-3xl bg-gradient-to-r from-navy to-navy-light relative overflow-hidden shadow-2xl">
            <div className="absolute inset-0 opacity-[0.06]" style={{
              backgroundImage: `linear-gradient(90deg, hsl(var(--aqua)) 1px, transparent 1px), linear-gradient(hsl(var(--aqua)) 1px, transparent 1px)`,
              backgroundSize: '60px 60px'
            }} />
            <div className="absolute top-0 right-0 w-80 h-80 bg-ocean/10 rounded-full blur-[100px]" />
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
