import { Button } from "@/components/ui/button";
import { ArrowRight, ChevronDown } from "lucide-react";

export default function HeroSection() {
  return (
    <section
      id="beranda"
      className="relative min-h-[100vh] flex items-center overflow-hidden"
      style={{ background: "linear-gradient(135deg, hsl(var(--navy)) 0%, hsl(216 50% 10%) 40%, hsl(216 42% 14%) 100%)" }}
    >
      {/* Subtle ambient glows */}
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute top-[10%] left-[5%] w-[600px] h-[600px] rounded-full blur-[220px] animate-pulse-soft"
          style={{ background: "hsl(var(--ocean) / 0.08)" }}
        />
        <div
          className="absolute bottom-[15%] right-[30%] w-[400px] h-[400px] rounded-full blur-[180px] animate-pulse-soft"
          style={{ background: "hsl(var(--aqua) / 0.05)", animationDelay: "3s" }}
        />
      </div>

      {/* Subtle grid pattern */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: "linear-gradient(hsl(var(--ocean) / 0.3) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--ocean) / 0.3) 1px, transparent 1px)",
          backgroundSize: "80px 80px",
        }}
      />

      {/* Content: split layout */}
      {/* Spline 3D globe — cropped right side accent */}
      <div
        className="absolute -bottom-[35%] -right-[20%] w-[85vw] h-[130vh] max-w-[1400px] pointer-events-none hidden lg:block"
        style={{ zIndex: 1 }}
      >
        {/* Atmospheric glow to blend globe into background */}
        <div className="absolute inset-0 rounded-full blur-[200px] animate-pulse-soft" style={{ background: "hsl(var(--ocean) / 0.10)" }} />
        <div className="absolute top-[10%] left-[15%] w-[60%] h-[60%] rounded-full blur-[160px]" style={{ background: "hsl(var(--navy) / 0.9)" }} />
        <iframe
          src="https://my.spline.design/holographicearthwithdynamiclines-YD0112HYpPLXTNpDwu6Gh3iB/"
          frameBorder="0"
          width="100%"
          height="100%"
          className="relative z-10 pointer-events-auto"
          title="ARRAD 3D Visual"
          loading="lazy"
          style={{ clipPath: "inset(0 0 0 0)" }}
        />
        {/* Top-left fade to blend into hero background */}
        <div className="absolute inset-0 z-20 pointer-events-none" style={{
          background: "linear-gradient(135deg, hsl(var(--navy)) 0%, hsl(var(--navy) / 0.7) 25%, transparent 50%)"
        }} />
        {/* Bottom fade */}
        <div className="absolute bottom-0 left-0 right-0 h-[40%] z-20 pointer-events-none" style={{
          background: "linear-gradient(to top, hsl(var(--navy)) 0%, transparent 100%)"
        }} />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 md:px-10 py-32 md:py-0 min-h-[85vh] flex items-center">
        <div className="max-w-xl lg:max-w-lg">
          <div className="flex items-center gap-3 mb-8 animate-reveal-up">
            <div className="section-rule" />
            <span className="text-white/40 text-[11px] font-semibold tracking-[0.2em] uppercase">
              Water Treatment Chemicals
            </span>
          </div>

          <h1
            className="text-[2.5rem] sm:text-[3.25rem] md:text-[4rem] lg:text-[4.5rem] font-bold text-white leading-[0.96] mb-7 animate-reveal-up"
            style={{ animationDelay: "0.1s" }}
          >
            Solusi Kimia
            <br />
            Pengolahan Air
            <br />
            <span className="text-gradient">Industri</span>
          </h1>

          <p
            className="text-[16px] md:text-[17px] text-white/40 max-w-lg mb-12 leading-[1.75] font-light animate-reveal-up"
            style={{ animationDelay: "0.2s" }}
          >
            Produsen dan distributor bahan kimia spesialti untuk sistem
            pengolahan air & air limbah sejak 1998.
          </p>

          <div
            className="flex flex-col sm:flex-row gap-4 animate-reveal-up"
            style={{ animationDelay: "0.3s" }}
          >
            <Button
              size="lg"
              className="bg-ocean text-white font-semibold text-[13px] hover:bg-ocean/90 transition-all duration-300 border-0 px-7 h-12 tracking-wide rounded-lg group shadow-lg shadow-ocean/20"
              onClick={() =>
                document.getElementById("kontak")?.scrollIntoView({ behavior: "smooth" })
              }
            >
              Konsultasi Tim Kami
              <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white/10 text-white/50 hover:text-white/80 hover:bg-white/[0.04] hover:border-white/20 font-medium text-[13px] px-7 h-12 bg-transparent transition-all duration-300 rounded-lg"
              onClick={() =>
                document.getElementById("produk")?.scrollIntoView({ behavior: "smooth" })
              }
            >
              Lihat Solusi
              <ChevronDown className="w-4 h-4 ml-1.5" />
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile fallback */}
      <div className="lg:hidden absolute top-1/2 -translate-y-1/2 -right-[30%] w-[70vw] h-[70vw] pointer-events-none" style={{ zIndex: 1 }}>
        <div className="absolute inset-0 rounded-full blur-[80px] animate-pulse-soft" style={{ background: "hsl(var(--ocean) / 0.12)" }} />
        <div className="absolute inset-[15%] rounded-full border border-ocean/15" style={{ background: "radial-gradient(circle, hsl(var(--ocean) / 0.06) 0%, transparent 70%)" }} />
      </div>

      {/* Clean dark bottom transition */}
      <div
        className="absolute bottom-0 left-0 right-0 h-48"
        style={{ background: "linear-gradient(to top, hsl(var(--navy)) 0%, hsl(var(--navy) / 0.6) 40%, transparent 100%)" }}
      />
    </section>
  );
}
