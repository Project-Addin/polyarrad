import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/contexts/LanguageContext";
import LanguageSwitcher from "@/components/LanguageSwitcher";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const { t } = useLanguage();

  const navLinks = [
    { label: t("nav.about"), href: "#tentang" },
    { label: t("nav.industries"), href: "#industri" },
    { label: t("nav.products"), href: "#produk" },
    { label: t("nav.services"), href: "#layanan" },
    { label: t("nav.certifications"), href: "#sertifikasi" },
    { label: t("nav.contact"), href: "#kontak" },
  ];

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 80);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-700 ${
        scrolled
          ? "bg-white/90 backdrop-blur-xl border-b border-border shadow-sm"
          : "bg-transparent"
      }`}
    >
      <nav className="container mx-auto flex items-center justify-between px-5 sm:px-6 md:px-10 h-14 sm:h-16 md:h-20">
        <a href="#beranda" className="flex items-center gap-2.5 sm:gap-3 group">
          <span className={`font-bold text-base sm:text-lg tracking-tight transition-colors duration-500 ${scrolled ? 'text-foreground' : 'text-white'}`}>ARRAD</span>
          <span className={`font-light text-[11px] sm:text-[13px] tracking-[0.15em] uppercase transition-colors duration-500 ${scrolled ? 'text-muted-foreground' : 'text-white/60'}`}>Chemicals</span>
        </a>

        <div className="hidden lg:flex items-center gap-1">
          {navLinks.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className={`px-4 py-2 text-[13px] font-medium transition-colors duration-300 tracking-wide ${
                scrolled ? 'text-muted-foreground hover:text-foreground' : 'text-white/70 hover:text-white'
              }`}
            >
              {l.label}
            </a>
          ))}
        </div>

        <div className="hidden lg:flex items-center gap-3">
          <LanguageSwitcher scrolled={scrolled} />
          <Button
            size="sm"
            className={`font-semibold transition-all duration-300 border-0 px-6 h-9 text-[13px] tracking-wide rounded-lg ${
              scrolled
                ? 'bg-ocean text-white hover:bg-ocean/90 shadow-sm'
                : 'bg-white text-foreground hover:bg-white/90'
            }`}
            onClick={() => document.getElementById("kontak")?.scrollIntoView({ behavior: "smooth" })}
          >
            {t("nav.cta")}
          </Button>
        </div>

        <button
          className={`lg:hidden p-2.5 -mr-1 transition-colors ${scrolled ? 'text-foreground' : 'text-white/80 hover:text-white'}`}
          onClick={() => setOpen(!open)}
          aria-label="Menu"
        >
          {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </nav>

      <div
        className={`lg:hidden overflow-hidden transition-all duration-500 ${
          scrolled ? 'bg-white/95' : 'bg-navy/95'
        } backdrop-blur-xl ${
          open ? "max-h-[500px] border-b border-border/20" : "max-h-0"
        }`}
      >
        <div className="px-5 sm:px-6 py-5 flex flex-col gap-0.5">
          {navLinks.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className={`py-3.5 px-2 rounded-lg transition-colors font-medium text-[15px] active:bg-white/5 ${
                scrolled ? 'text-muted-foreground hover:text-foreground' : 'text-white/70 hover:text-white'
              }`}
            >
              {l.label}
            </a>
          ))}
          <div className="mt-3 mb-2 px-2">
            <LanguageSwitcher scrolled={scrolled} />
          </div>
          <Button
            className="mt-2 bg-ocean text-white font-semibold border-0 h-12 rounded-lg text-[14px]"
            onClick={() => { setOpen(false); document.getElementById("kontak")?.scrollIntoView({ behavior: "smooth" }); }}
          >
            {t("nav.cta")}
          </Button>
        </div>
      </div>
    </header>
  );
}
