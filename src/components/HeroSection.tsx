import { Button } from "@/components/ui/button";
import { ArrowRight, FlaskConical } from "lucide-react";

export default function HeroSection() {
  return (
    <section id="beranda" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-navy">
      {/* Animated background */}
      <div className="absolute inset-0">
        {/* Gradient orbs */}
        <div className="absolute top-1/4 left-1/4 w-[600px] h-[600px] bg-ocean/15 rounded-full blur-[150px] animate-pulse-glow" />
        <div className="absolute bottom-1/3 right-1/4 w-[500px] h-[500px] bg-aqua/10 rounded-full blur-[120px] animate-pulse-glow" style={{ animationDelay: "2s" }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-ocean/8 rounded-full blur-[100px] animate-water-flow" />
        
        {/* Animated grid lines */}
        <div className="absolute inset-0 opacity-[0.04]" style={{
          backgroundImage: `linear-gradient(hsl(var(--aqua)) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--aqua)) 1px, transparent 1px)`,
          backgroundSize: '80px 80px'
        }} />
        
        {/* Diagonal accent lines */}
        <div className="absolute inset-0 opacity-[0.02]" style={{
          backgroundImage: `repeating-linear-gradient(45deg, transparent, transparent 100px, hsl(var(--aqua)) 100px, hsl(var(--aqua)) 101px)`,
        }} />

        {/* Floating particles */}
        {[...Array(12)].map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full animate-float-up"
            style={{
              width: `${2 + (i % 3)}px`,
              height: `${2 + (i % 3)}px`,
              background: `hsl(var(--aqua) / ${0.2 + (i % 4) * 0.1})`,
              left: `${8 + i * 7.5}%`,
              animationDelay: `${i * 1.8}s`,
              animationDuration: `${10 + i * 2}s`,
            }}
          />
        ))}
        
        {/* Horizontal light streaks */}
        <div className="absolute top-[30%] left-0 right-0 h-px bg-gradient-to-r from-transparent via-aqua/10 to-transparent" />
        <div className="absolute top-[70%] left-0 right-0 h-px bg-gradient-to-r from-transparent via-ocean/8 to-transparent" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 md:px-8 pt-20">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full glass-card text-aqua text-sm font-semibold mb-10 animate-reveal-up tracking-wide">
            <FlaskConical className="w-4 h-4" />
            <span>Specialty Chemicals for Water Treatment</span>
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-white leading-[1.08] mb-8 animate-reveal-up" style={{ animationDelay: "0.15s" }}>
            Solusi Kimia Terdepan
            <br />
            untuk{" "}
            <span className="text-gradient">Sistem Air</span>
            <br />
            Industri Anda
          </h1>

          <p className="text-lg md:text-xl text-white/50 max-w-2xl mx-auto mb-12 font-light leading-relaxed animate-reveal-up" style={{ animationDelay: "0.3s" }}>
            Sejak 1998, ARRAD Chemicals menghadirkan produk kimia spesialti berkualitas tinggi
            dan layanan teknis profesional untuk pengolahan air &amp; air limbah di berbagai sektor industri.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-reveal-up" style={{ animationDelay: "0.45s" }}>
            <Button
              size="lg"
              className="relative bg-gradient-to-r from-ocean to-aqua text-white font-bold text-base shadow-2xl shadow-ocean/40 hover:shadow-aqua/50 hover:-translate-y-0.5 transition-all duration-300 border-0 px-10 h-14 text-[15px] tracking-wide"
              onClick={() => document.getElementById("kontak")?.scrollIntoView({ behavior: "smooth" })}
            >
              <span className="absolute inset-0 rounded-md bg-gradient-to-r from-ocean to-aqua opacity-0 hover:opacity-100 blur-xl transition-opacity duration-500" />
              <span className="relative flex items-center gap-2">
                Konsultasi Tim Kami
                <ArrowRight className="w-4 h-4" />
              </span>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white/20 text-white hover:bg-white/5 hover:border-aqua/40 font-semibold text-base px-10 h-14 bg-transparent transition-all duration-500 group"
              onClick={() => document.getElementById("produk")?.scrollIntoView({ behavior: "smooth" })}
            >
              <span className="group-hover:text-aqua transition-colors duration-300">Jelajahi Solusi</span>
            </Button>
          </div>
        </div>
      </div>

      {/* Bottom dark gradient - smooth transition to next section */}
      <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-navy via-navy/80 to-transparent" />
    </section>
  );
}
