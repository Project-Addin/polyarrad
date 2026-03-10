import { Button } from "@/components/ui/button";
import { ArrowRight, ChevronDown } from "lucide-react";

export default function HeroSection() {
  return (
    <section id="beranda" className="relative min-h-[100vh] flex items-end pb-24 md:pb-32 overflow-hidden bg-navy">
      {/* Ambient lighting */}
      <div className="absolute inset-0">
        <div className="absolute top-[15%] left-[10%] w-[600px] h-[600px] bg-ocean/10 rounded-full blur-[200px] animate-pulse-soft" />
        <div className="absolute bottom-[20%] right-[15%] w-[500px] h-[500px] bg-aqua/6 rounded-full blur-[180px] animate-pulse-soft" style={{ animationDelay: "3s" }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-ocean/4 rounded-full blur-[240px] animate-water-drift" />
        
        {/* Engineering grid */}
        <div className="absolute inset-0 opacity-[0.025]" style={{
          backgroundImage: `linear-gradient(hsl(var(--aqua)) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--aqua)) 1px, transparent 1px)`,
          backgroundSize: '120px 120px'
        }} />

        {/* Floating particles */}
        {[...Array(8)].map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full animate-float-particle"
            style={{
              width: `${2 + (i % 3)}px`,
              height: `${2 + (i % 3)}px`,
              background: `hsl(var(--aqua) / ${0.12 + (i % 4) * 0.05})`,
              left: `${10 + i * 10}%`,
              animationDelay: `${i * 2.5}s`,
              animationDuration: `${18 + i * 3}s`,
            }}
          />
        ))}

        {/* Horizontal accent */}
        <div className="absolute top-[65%] left-0 right-0 h-px bg-gradient-to-r from-transparent via-aqua/6 to-transparent" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 md:px-10">
        <div className="max-w-3xl">
          <div className="flex items-center gap-3 mb-10 animate-reveal-up">
            <div className="w-8 h-px bg-aqua/40" />
            <span className="text-aqua/60 text-[12px] font-medium tracking-[0.2em] uppercase">Water Treatment Technology</span>
          </div>

          <h1 className="text-[2.5rem] sm:text-[3.5rem] md:text-[4.5rem] lg:text-[5.5rem] font-bold text-white leading-[0.95] mb-8 animate-reveal-up" style={{ animationDelay: "0.1s" }}>
            Solusi Kimia
            <br />
            untuk Sistem Air
            <br />
            <span className="text-gradient">Industri</span>
          </h1>

          <p className="text-[17px] md:text-lg text-white/30 max-w-xl mb-14 leading-relaxed font-light animate-reveal-up" style={{ animationDelay: "0.2s" }}>
            Sejak 1998, kami menghadirkan produk kimia spesialti dan layanan teknis profesional untuk pengolahan air & air limbah di berbagai sektor industri Indonesia.
          </p>

          <div className="flex flex-col sm:flex-row gap-5 animate-reveal-up" style={{ animationDelay: "0.3s" }}>
            <Button
              size="lg"
              className="bg-ocean text-white font-semibold text-[14px] hover:bg-ocean/90 transition-all duration-300 border-0 px-8 h-12 tracking-wide rounded-lg group shadow-lg shadow-ocean/20"
              onClick={() => document.getElementById("kontak")?.scrollIntoView({ behavior: "smooth" })}
            >
              Konsultasi Tim Kami
              <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white/15 text-white/50 hover:text-white hover:bg-white/[0.05] hover:border-white/25 font-medium text-[14px] px-8 h-12 bg-transparent transition-all duration-300 rounded-lg"
              onClick={() => document.getElementById("produk")?.scrollIntoView({ behavior: "smooth" })}
            >
              Jelajahi Solusi
              <ChevronDown className="w-4 h-4 ml-1" />
            </Button>
          </div>
        </div>
      </div>

      {/* Bottom fade to light background */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
}