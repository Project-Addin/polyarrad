import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export default function HeroSection() {
  return (
    <section id="beranda" className="relative min-h-[100vh] flex items-center overflow-hidden bg-navy">
      {/* Ambient lighting */}
      <div className="absolute inset-0">
        <div className="absolute top-[20%] left-[5%] w-[700px] h-[700px] bg-ocean/8 rounded-full blur-[250px] animate-pulse-soft" />
        <div className="absolute bottom-[10%] right-[10%] w-[500px] h-[500px] bg-aqua/5 rounded-full blur-[200px] animate-pulse-soft" style={{ animationDelay: "4s" }} />

        {/* Fine engineering grid */}
        <div className="absolute inset-0 opacity-[0.018]" style={{
          backgroundImage: `linear-gradient(hsl(var(--aqua)) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--aqua)) 1px, transparent 1px)`,
          backgroundSize: '100px 100px'
        }} />

        {/* Floating particles - reduced */}
        {[...Array(5)].map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full animate-float-particle"
            style={{
              width: `${2 + (i % 2)}px`,
              height: `${2 + (i % 2)}px`,
              background: `hsl(var(--aqua) / ${0.08 + (i % 3) * 0.04})`,
              left: `${15 + i * 15}%`,
              animationDelay: `${i * 3}s`,
              animationDuration: `${20 + i * 4}s`,
            }}
          />
        ))}
      </div>

      {/* Content — centered vertically */}
      <div className="relative z-10 container mx-auto px-6 md:px-10 pt-32 pb-20">
        <div className="max-w-4xl">
          <div className="flex items-center gap-3 mb-12 animate-reveal-up">
            <span className="text-aqua/40 text-[11px] font-semibold tracking-[0.25em] uppercase">Water Treatment Technology</span>
          </div>

          <h1 className="text-[2.75rem] sm:text-[4rem] md:text-[5rem] lg:text-[6rem] font-bold text-white leading-[0.92] mb-10 animate-reveal-up" style={{ animationDelay: "0.1s" }}>
            Solusi Kimia
            <br />
            untuk Sistem
            <br />
            Air <span className="text-gradient">Industri</span>
          </h1>

          <div className="grid md:grid-cols-2 gap-8 md:gap-16 mb-14 animate-reveal-up" style={{ animationDelay: "0.2s" }}>
            <p className="text-[16px] md:text-[17px] text-white/25 max-w-md leading-[1.8] font-light">
              Sejak 1998, kami menghadirkan produk kimia spesialti dan layanan teknis profesional untuk pengolahan air & air limbah di berbagai sektor industri Indonesia.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 md:items-start md:justify-end md:pt-2">
              <Button
                size="lg"
                className="bg-white text-foreground font-semibold text-[14px] hover:bg-white/90 hover:shadow-lg hover:shadow-white/5 transition-all duration-500 border-0 px-8 h-13 tracking-wide rounded-full group"
                onClick={() => document.getElementById("kontak")?.scrollIntoView({ behavior: "smooth" })}
              >
                Konsultasi Tim Kami
                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-white/8 text-white/40 hover:text-white/70 hover:bg-white/[0.02] hover:border-white/15 font-medium text-[14px] px-8 h-13 bg-transparent transition-all duration-500 rounded-full"
                onClick={() => document.getElementById("produk")?.scrollIntoView({ behavior: "smooth" })}
              >
                Jelajahi Solusi
              </Button>
            </div>
          </div>
        </div>

        {/* Bottom stats row */}
        <div className="flex items-center gap-12 md:gap-16 pt-16 border-t border-white/[0.04] animate-reveal-up" style={{ animationDelay: "0.4s" }}>
          {[
            { num: "25+", label: "Tahun" },
            { num: "100+", label: "Klien Industri" },
            { num: "7", label: "Lini Produk" },
          ].map((s) => (
            <div key={s.label}>
              <span className="text-white/60 text-2xl md:text-3xl font-bold tracking-tight">{s.num}</span>
              <span className="text-white/15 text-[12px] ml-2 font-medium tracking-wide">{s.label}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom fade to next section */}
      <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
}
