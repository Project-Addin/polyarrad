import { Button } from "@/components/ui/button";
import { ArrowRight, ChevronDown } from "lucide-react";

export default function HeroSection() {
  return (
    <section
      id="beranda"
      className="relative min-h-[100vh] flex flex-col items-center justify-start overflow-hidden"
      style={{ background: "linear-gradient(180deg, hsl(var(--navy)) 0%, hsl(216 50% 10%) 50%, hsl(216 42% 14%) 100%)" }}
    >
      {/* Subtle ambient glows */}
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute top-[15%] left-1/2 -translate-x-1/2 w-[800px] h-[400px] rounded-full blur-[200px] animate-pulse-soft"
          style={{ background: "hsl(var(--ocean) / 0.06)" }}
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

      {/* Content — higher placement, tighter spacing */}
      <div className="relative z-10 text-center px-6 md:px-10 pt-20 pb-8 md:pt-24 md:pb-10 max-w-4xl mx-auto">
        <div className="flex items-center justify-center gap-3 mb-6 animate-reveal-up">
          <div className="section-rule" />
          <span className="text-white/40 text-[11px] font-semibold tracking-[0.2em] uppercase">
            Water Treatment Chemicals
          </span>
          <div className="section-rule" />
        </div>

        <h1
          className="text-[3rem] sm:text-[3.75rem] md:text-[5rem] lg:text-[5.5rem] font-bold text-white leading-[0.93] mb-5 animate-reveal-up"
          style={{ animationDelay: "0.1s" }}
        >
          Solusi Kimia
          <br />
          Pengolahan Air
          <br />
          <span className="text-gradient">Industri</span>
        </h1>

        <p
          className="text-[15px] md:text-[17px] text-white/40 max-w-lg mx-auto mb-8 leading-[1.75] font-light animate-reveal-up"
          style={{ animationDelay: "0.2s" }}
        >
          Produsen dan distributor bahan kimia spesialti untuk sistem
          pengolahan air & air limbah sejak 1998.
        </p>

        <div
          className="flex flex-col sm:flex-row justify-center gap-4 animate-reveal-up"
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

      {/* 3D Globe — larger, filling more of the lower hero */}
      <div
        className="absolute bottom-[-45%] left-1/2 -translate-x-1/2 w-[160vw] h-[120vh] max-w-[2200px] pointer-events-none hidden md:block"
        style={{ zIndex: 1 }}
      >
        {/* Atmospheric glow behind globe */}
        <div
          className="absolute top-[3%] left-1/2 -translate-x-1/2 w-[55%] h-[35%] rounded-full blur-[200px] animate-pulse-soft"
          style={{ background: "hsl(var(--ocean) / 0.12)" }}
        />
        {/* Dark center blend */}
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
        {/* Top fade — blends globe top edge into hero */}
        <div className="absolute top-0 left-0 right-0 h-[30%] z-20 pointer-events-none" style={{
          background: "linear-gradient(to bottom, hsl(var(--navy)) 0%, hsl(var(--navy) / 0.5) 50%, transparent 100%)"
        }} />
        {/* Side fades — tighter to show more globe */}
        <div className="absolute inset-0 z-20 pointer-events-none" style={{
          background: "linear-gradient(90deg, hsl(var(--navy)) 0%, transparent 15%, transparent 85%, hsl(var(--navy)) 100%)"
        }} />
      </div>

      {/* Mobile fallback */}
      <div className="md:hidden absolute bottom-0 left-1/2 -translate-x-1/2 w-[95vw] h-[45vh] pointer-events-none" style={{ zIndex: 1 }}>
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full h-full rounded-t-full blur-[60px] animate-pulse-soft" style={{ background: "hsl(var(--ocean) / 0.10)" }} />
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[85%] h-[85%] rounded-t-full border border-ocean/10" style={{ background: "radial-gradient(ellipse at center bottom, hsl(var(--ocean) / 0.06) 0%, transparent 70%)" }} />
      </div>

      {/* Bottom transition */}
      <div
        className="absolute bottom-0 left-0 right-0 h-48 z-30"
        style={{ background: "linear-gradient(to top, hsl(var(--navy)) 0%, hsl(var(--navy) / 0.6) 40%, transparent 100%)" }}
      />
    </section>
  );
}