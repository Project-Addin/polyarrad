import { Button } from "@/components/ui/button";
import { ArrowRight, ChevronDown } from "lucide-react";

export default function HeroSection() {
  return (
    <section
      id="beranda"
      className="relative min-h-[100vh] flex items-end pb-28 md:pb-36 overflow-hidden bg-navy"
    >
      {/* Ambient gradient lighting — refined, no particles */}
      <div className="absolute inset-0">
        <div
          className="absolute top-[10%] left-[5%] w-[700px] h-[700px] rounded-full blur-[260px] animate-pulse-soft"
          style={{ background: "hsl(var(--ocean) / 0.08)" }}
        />
        <div
          className="absolute bottom-[15%] right-[10%] w-[500px] h-[500px] rounded-full blur-[200px] animate-pulse-soft"
          style={{
            background: "hsl(var(--aqua) / 0.05)",
            animationDelay: "3s",
          }}
        />
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[900px] rounded-full blur-[300px] animate-water-drift"
          style={{ background: "hsl(var(--ocean) / 0.04)" }}
        />

        {/* Subtle water texture overlay */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `
              radial-gradient(ellipse 600px 200px at 20% 80%, hsl(var(--aqua) / 0.3), transparent),
              radial-gradient(ellipse 400px 300px at 75% 30%, hsl(var(--ocean) / 0.2), transparent)
            `,
          }}
        />

        {/* Single subtle horizontal line */}
        <div className="absolute top-[62%] left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/[0.04] to-transparent" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 md:px-10">
        <div className="max-w-3xl">
          <div className="flex items-center gap-3 mb-8 animate-reveal-up">
            <div className="section-rule" />
            <span className="text-white/40 text-[11px] font-semibold tracking-[0.2em] uppercase">
              Water Treatment Chemicals
            </span>
          </div>

          <h1
            className="text-[2.5rem] sm:text-[3.25rem] md:text-[4.25rem] lg:text-[5rem] font-bold text-white leading-[0.96] mb-7 animate-reveal-up"
            style={{ animationDelay: "0.1s" }}
          >
            Solusi Kimia
            <br />
            Pengolahan Air
            <br />
            <span className="text-gradient">Industri</span>
          </h1>

          <p
            className="text-[16px] md:text-[17px] text-white/35 max-w-lg mb-12 leading-[1.75] font-light animate-reveal-up"
            style={{ animationDelay: "0.2s" }}
          >
            Produsen dan distributor bahan kimia spesialti untuk sistem pengolahan air & air limbah sejak 1998.
          </p>

          <div
            className="flex flex-col sm:flex-row gap-4 animate-reveal-up"
            style={{ animationDelay: "0.3s" }}
          >
            <Button
              size="lg"
              className="bg-ocean text-white font-semibold text-[13px] hover:bg-ocean/90 transition-all duration-300 border-0 px-7 h-11 tracking-wide rounded-lg group shadow-lg shadow-ocean/20"
              onClick={() =>
                document
                  .getElementById("kontak")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
            >
              Konsultasi Tim Kami
              <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white/10 text-white/45 hover:text-white/80 hover:bg-white/[0.04] hover:border-white/20 font-medium text-[13px] px-7 h-11 bg-transparent transition-all duration-300 rounded-lg"
              onClick={() =>
                document
                  .getElementById("produk")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
            >
              Lihat Solusi
              <ChevronDown className="w-4 h-4 ml-1.5" />
            </Button>
          </div>
        </div>
      </div>

      {/* Bottom transition */}
      <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
}
