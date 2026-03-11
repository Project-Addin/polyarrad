import { Button } from "@/components/ui/button";
import { ArrowRight, ChevronDown } from "lucide-react";

export default function HeroSection() {
  return (
    <section
      id="beranda"
      className="relative min-h-[auto] md:h-[100svh] md:min-h-[100svh] flex flex-col items-center justify-start overflow-hidden"
      style={{ background: "linear-gradient(180deg, hsl(var(--navy)) 0%, hsl(216 50% 10%) 50%, hsl(216 42% 14%) 100%)" }}
    >
      {/* Subtle ambient glows */}
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute top-[15%] left-1/2 -translate-x-1/2 w-[600px] md:w-[800px] h-[300px] md:h-[400px] rounded-full blur-[150px] md:blur-[200px] animate-pulse-soft"
          style={{ background: "hsl(var(--ocean) / 0.06)" }}
        />
      </div>

      {/* Subtle grid pattern */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: "linear-gradient(hsl(var(--ocean) / 0.3) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--ocean) / 0.3) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      {/* Content — high z-index, always on top */}
      <div className="relative z-20 text-center px-5 sm:px-6 md:px-10 pt-24 pb-6 sm:pt-24 md:pt-24 md:pb-10 max-w-4xl mx-auto">
        <div className="flex items-center justify-center gap-2.5 sm:gap-3 mb-5 sm:mb-6 animate-reveal-up">
          <div className="section-rule" />
          <span className="text-white/60 text-[10px] sm:text-[11px] font-semibold tracking-[0.18em] sm:tracking-[0.2em] uppercase">
            Water Treatment Chemicals
          </span>
          <div className="section-rule" />
        </div>

        <h1
          className="text-[2.25rem] sm:text-[3rem] md:text-[5rem] lg:text-[5.5rem] font-bold text-white leading-[0.95] sm:leading-[0.93] mb-4 sm:mb-5 animate-reveal-up"
          style={{ animationDelay: "0.1s" }}
        >
          Solusi Kimia
          <br />
          Pengolahan Air
          <br />
          <span className="text-gradient">Industri</span>
        </h1>

        <p
          className="text-[14px] sm:text-[15px] md:text-[17px] text-white/55 max-w-sm sm:max-w-lg mx-auto mb-7 sm:mb-8 leading-[1.7] sm:leading-[1.75] font-light animate-reveal-up"
          style={{ animationDelay: "0.2s" }}
        >
          Produsen dan distributor bahan kimia spesialti untuk sistem
          pengolahan air & air limbah sejak 1998.
        </p>

        <div
          className="flex flex-col sm:flex-row justify-center gap-3 sm:gap-4 animate-reveal-up px-2 sm:px-0"
          style={{ animationDelay: "0.3s" }}
        >
          <Button
            size="lg"
            className="bg-ocean text-white font-semibold text-[13px] sm:text-[13px] hover:bg-ocean/90 transition-all duration-300 border-0 px-6 sm:px-7 h-12 sm:h-12 tracking-wide rounded-lg group shadow-lg shadow-ocean/20 w-full sm:w-auto"
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
            className="border-white/25 text-white/80 hover:text-white hover:bg-white/[0.08] hover:border-white/40 font-semibold text-[13px] px-6 sm:px-7 h-12 bg-white/[0.04] transition-all duration-300 rounded-lg w-full sm:w-auto"
            onClick={() =>
              document.getElementById("produk")?.scrollIntoView({ behavior: "smooth" })
            }
          >
            Lihat Solusi
            <ChevronDown className="w-4 h-4 ml-1.5" />
          </Button>
        </div>
      </div>

      {/* 3D Globe — desktop */}
      <div
        className="absolute bottom-[-45%] left-1/2 -translate-x-1/2 w-[160vw] h-[120vh] max-w-[2200px] pointer-events-none hidden md:block"
        style={{ zIndex: 1 }}
      >
        <div
          className="absolute top-[3%] left-1/2 -translate-x-1/2 w-[55%] h-[35%] rounded-full blur-[200px] animate-pulse-soft"
          style={{ background: "hsl(var(--ocean) / 0.12)" }}
        />
        <div
          className="absolute top-[8%] left-1/2 -translate-x-1/2 w-[45%] h-[45%] rounded-full blur-[180px]"
          style={{ background: "hsl(var(--navy) / 0.80)" }}
        />
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
        <div className="absolute top-0 left-0 right-0 h-[30%] z-20 pointer-events-none" style={{
          background: "linear-gradient(to bottom, hsl(var(--navy)) 0%, hsl(var(--navy) / 0.5) 50%, transparent 100%)"
        }} />
        <div className="absolute inset-0 z-20 pointer-events-none" style={{
          background: "linear-gradient(90deg, hsl(var(--navy)) 0%, transparent 15%, transparent 85%, hsl(var(--navy)) 100%)"
        }} />
      </div>

      {/* 3D Globe — mobile: absolutely positioned behind content, clipped to hero bounds */}
      <div
        className="md:hidden absolute bottom-0 left-1/2 -translate-x-1/2 w-[140vw] h-[45vh] pointer-events-none opacity-40"
        style={{ zIndex: 2 }}
      >
        {/* Ambient glow behind globe */}
        <div
          className="absolute top-[0%] left-1/2 -translate-x-1/2 w-[70%] h-[40%] rounded-full blur-[80px] animate-pulse-soft"
          style={{ background: "hsl(var(--ocean) / 0.10)" }}
        />
        <iframe
          src="https://my.spline.design/holographicearthwithdynamiclines-YD0112HYpPLXTNpDwu6Gh3iB/"
          frameBorder="0"
          width="100%"
          height="100%"
          className="relative z-10"
          title="ARRAD 3D Visual Mobile"
          loading="lazy"
          style={{ clipPath: "inset(0 0 50% 0)" }}
        />
        {/* Top fade — blends globe into hero content */}
        <div className="absolute top-0 left-0 right-0 h-[50%] z-20 pointer-events-none" style={{
          background: "linear-gradient(to bottom, hsl(var(--navy)) 0%, hsl(var(--navy) / 0.4) 60%, transparent 100%)"
        }} />
        {/* Side fades */}
        <div className="absolute inset-0 z-20 pointer-events-none" style={{
          background: "linear-gradient(90deg, hsl(var(--navy)) 0%, transparent 25%, transparent 75%, hsl(var(--navy)) 100%)"
        }} />
      </div>

      {/* Bottom transition */}
      <div
        className="absolute bottom-0 left-0 right-0 h-32 sm:h-48 z-30"
        style={{ background: "linear-gradient(to top, hsl(var(--navy)) 0%, hsl(var(--navy) / 0.6) 40%, transparent 100%)" }}
      />
    </section>
  );
}
