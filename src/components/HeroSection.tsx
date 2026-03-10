import { Button } from "@/components/ui/button";
import { ArrowRight, FlaskConical } from "lucide-react";

export default function HeroSection() {
  return (
    <section id="beranda" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-navy">
      {/* Animated background */}
      <div className="absolute inset-0">
        {/* Gradient orbs */}
        <div className="absolute top-1/4 left-1/4 w-[700px] h-[700px] bg-ocean/12 rounded-full blur-[180px] animate-pulse-glow" />
        <div className="absolute bottom-1/3 right-1/4 w-[500px] h-[500px] bg-aqua/8 rounded-full blur-[140px] animate-pulse-glow" style={{ animationDelay: "2.5s" }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-ocean/6 rounded-full blur-[120px] animate-water-flow" />
        
        {/* Fine grid */}
        <div className="absolute inset-0 opacity-[0.03]" style={{
          backgroundImage: `linear-gradient(hsl(var(--aqua)) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--aqua)) 1px, transparent 1px)`,
          backgroundSize: '80px 80px'
        }} />

        {/* Floating particles */}
        {[...Array(15)].map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full animate-float-up"
            style={{
              width: `${1.5 + (i % 4)}px`,
              height: `${1.5 + (i % 4)}px`,
              background: `hsl(var(--aqua) / ${0.15 + (i % 5) * 0.06})`,
              left: `${5 + i * 6}%`,
              animationDelay: `${i * 1.5}s`,
              animationDuration: `${12 + i * 2}s`,
            }}
          />
        ))}
        
        {/* Horizontal accent lines */}
        <div className="absolute top-[28%] left-0 right-0 h-px bg-gradient-to-r from-transparent via-aqua/8 to-transparent" />
        <div className="absolute top-[72%] left-0 right-0 h-px bg-gradient-to-r from-transparent via-ocean/6 to-transparent" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 md:px-8 pt-24">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2.5 px-5 py-2.5 rounded-full glass-card-strong text-aqua text-sm font-semibold mb-12 animate-reveal-up tracking-wide">
            <FlaskConical className="w-4 h-4" />
            <span>Specialty Chemicals for Water Treatment</span>
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-[4.5rem] font-extrabold text-white leading-[1.06] mb-8 animate-reveal-up" style={{ animationDelay: "0.15s" }}>
            Solusi Kimia Terdepan
            <br />
            untuk{" "}
            <span className="text-gradient">Sistem Air</span>
            <br />
            Industri Anda
          </h1>

          <p className="text-lg md:text-xl text-white/40 max-w-2xl mx-auto mb-14 font-light leading-relaxed animate-reveal-up" style={{ animationDelay: "0.3s" }}>
            Sejak 1998, ARRAD Chemicals menghadirkan produk kimia spesialti berkualitas tinggi
            dan layanan teknis profesional untuk pengolahan air &amp; air limbah di berbagai sektor industri.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-reveal-up" style={{ animationDelay: "0.45s" }}>
            <Button
              size="lg"
              className="relative bg-gradient-to-r from-ocean to-aqua text-white font-bold text-[15px] shadow-2xl shadow-ocean/30 hover:shadow-aqua/40 hover:-translate-y-1 transition-all duration-500 border-0 px-12 h-14 tracking-wide glow-ocean"
              onClick={() => document.getElementById("kontak")?.scrollIntoView({ behavior: "smooth" })}
            >
              <span className="relative flex items-center gap-2.5">
                Konsultasi Tim Kami
                <ArrowRight className="w-4 h-4" />
              </span>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white/15 text-white/80 hover:text-white hover:bg-white/[0.04] hover:border-aqua/30 font-semibold text-[15px] px-12 h-14 bg-transparent transition-all duration-500"
              onClick={() => document.getElementById("produk")?.scrollIntoView({ behavior: "smooth" })}
            >
              Jelajahi Solusi
            </Button>
          </div>
        </div>
      </div>

      {/* Bottom transition */}
      <div className="absolute bottom-0 left-0 right-0 h-48 bg-gradient-to-t from-navy via-navy/70 to-transparent" />
    </section>
  );
}
