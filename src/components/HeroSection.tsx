import { Button } from "@/components/ui/button";
import { ArrowRight, FlaskConical } from "lucide-react";

export default function HeroSection() {
  return (
    <section id="beranda" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-navy">
      {/* Animated background */}
      <div className="absolute inset-0">
        {/* Gradient orbs */}
        <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-ocean/20 rounded-full blur-[120px] animate-pulse-glow" />
        <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-aqua/15 rounded-full blur-[100px] animate-pulse-glow" style={{ animationDelay: "2s" }} />
        <div className="absolute top-1/2 left-1/2 w-[300px] h-[300px] bg-ocean/10 rounded-full blur-[80px] animate-water-flow" />
        
        {/* Grid pattern */}
        <div className="absolute inset-0 opacity-[0.03]" style={{
          backgroundImage: `linear-gradient(hsl(var(--aqua)) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--aqua)) 1px, transparent 1px)`,
          backgroundSize: '60px 60px'
        }} />

        {/* Floating particles */}
        {[...Array(6)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-aqua/40 rounded-full animate-float-up"
            style={{
              left: `${15 + i * 15}%`,
              animationDelay: `${i * 2.5}s`,
              animationDuration: `${12 + i * 3}s`,
            }}
          />
        ))}
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 md:px-8 pt-20">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card text-aqua text-sm font-medium mb-8 animate-reveal-up">
            <FlaskConical className="w-4 h-4" />
            <span>Specialty Chemicals for Water Treatment</span>
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-white leading-[1.1] mb-6 animate-reveal-up" style={{ animationDelay: "0.15s" }}>
            Solusi Kimia Terdepan
            <br />
            untuk{" "}
            <span className="text-gradient">Sistem Air</span>
            <br />
            Industri Anda
          </h1>

          <p className="text-lg md:text-xl text-white/60 max-w-2xl mx-auto mb-10 font-light leading-relaxed animate-reveal-up" style={{ animationDelay: "0.3s" }}>
            Sejak 1998, ARRAD Chemicals menghadirkan produk kimia spesialti berkualitas tinggi
            dan layanan teknis profesional untuk pengolahan air &amp; air limbah di berbagai sektor industri.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-reveal-up" style={{ animationDelay: "0.45s" }}>
            <Button
              size="lg"
              className="bg-gradient-to-r from-ocean to-aqua text-white font-bold text-base shadow-xl shadow-ocean/30 hover:shadow-aqua/40 transition-all duration-300 border-0 px-8 h-12"
              onClick={() => document.getElementById("kontak")?.scrollIntoView({ behavior: "smooth" })}
            >
              Konsultasi Tim Kami
              <ArrowRight className="w-4 h-4 ml-1" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white/20 text-white hover:bg-white/10 hover:border-white/30 font-semibold text-base px-8 h-12 bg-transparent"
              onClick={() => document.getElementById("produk")?.scrollIntoView({ behavior: "smooth" })}
            >
              Jelajahi Solusi
            </Button>
          </div>
        </div>

        {/* Bottom gradient fade */}
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
      </div>
    </section>
  );
}
