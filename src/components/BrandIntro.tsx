import AnimatedSection from "./AnimatedSection";
import StatCounter from "./StatCounter";
import { Beaker, Building2, Layers } from "lucide-react";

export default function BrandIntro() {
  return (
    <section id="tentang" className="py-24 md:py-32 relative">
      <div className="container mx-auto px-4 md:px-8">
        <AnimatedSection>
          <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-center mb-20">
            <div>
              <span className="text-sm font-semibold text-aqua tracking-[0.15em] uppercase mb-4 block">Tentang Kami</span>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-foreground leading-tight mb-6">
                Mitra Terpercaya dalam
                <span className="text-gradient"> Kimia Pengolahan Air</span>
              </h2>
              <p className="text-muted-foreground text-lg leading-relaxed mb-4">
                PT. Poly Arrad Pusaka, dengan merek dagang <strong className="text-foreground">ARRAD Chemicals</strong>, adalah perusahaan kimia spesialti Indonesia yang berdiri sejak 1998. Kami berfokus pada formulasi, produksi, dan distribusi bahan kimia berkualitas tinggi untuk pengolahan air dan air limbah.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Didukung fasilitas manufaktur dan laboratorium modern di Surabaya, kami melayani kebutuhan industri, komersial, dan utilitas publik di seluruh Indonesia dengan standar mutu internasional.
              </p>
            </div>
            <div className="relative">
              <div className="aspect-[4/3] rounded-2xl bg-gradient-to-br from-ocean/10 to-aqua/10 border border-border flex items-center justify-center overflow-hidden">
                <div className="absolute inset-0 opacity-5" style={{
                  backgroundImage: `radial-gradient(circle at 2px 2px, hsl(var(--ocean)) 1px, transparent 0)`,
                  backgroundSize: '24px 24px'
                }} />
                <div className="text-center relative z-10 p-8">
                  <Beaker className="w-16 h-16 text-ocean mx-auto mb-4 opacity-60" />
                  <p className="text-lg font-semibold text-foreground">Manufaktur & Laboratorium</p>
                  <p className="text-sm text-muted-foreground">Surabaya, Indonesia</p>
                </div>
              </div>
            </div>
          </div>
        </AnimatedSection>

        {/* Stats */}
        <AnimatedSection delay={200}>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 py-12 px-8 rounded-2xl bg-gradient-to-r from-navy to-navy-light relative overflow-hidden">
            <div className="absolute inset-0 opacity-10" style={{
              backgroundImage: `linear-gradient(90deg, hsl(var(--aqua)) 1px, transparent 1px)`,
              backgroundSize: '80px 80px'
            }} />
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
