import { useState, useEffect } from "react";
import { Menu, X, Droplets } from "lucide-react";
import { Button } from "@/components/ui/button";

const navLinks = [
  { label: "Beranda", href: "#beranda" },
  { label: "Tentang Kami", href: "#tentang" },
  { label: "Industri", href: "#industri" },
  { label: "Produk", href: "#produk" },
  { label: "Layanan", href: "#layanan" },
  { label: "Sertifikasi", href: "#sertifikasi" },
  { label: "Kontak", href: "#kontak" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-navy/95 backdrop-blur-xl shadow-lg shadow-navy/20 border-b border-white/5"
          : "bg-transparent"
      }`}
    >
      <nav className="container mx-auto flex items-center justify-between px-4 md:px-8 h-16 md:h-20">
        <a href="#beranda" className="flex items-center gap-2 group">
          <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-ocean to-aqua flex items-center justify-center">
            <Droplets className="w-5 h-5 text-white" />
          </div>
          <div className="flex flex-col leading-none">
            <span className="text-white font-extrabold text-lg tracking-tight">ARRAD</span>
            <span className="text-aqua text-[10px] tracking-[0.2em] font-medium uppercase">Chemicals</span>
          </div>
        </a>

        <div className="hidden lg:flex items-center gap-1">
          {navLinks.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="px-3 py-2 text-sm font-medium text-white/70 hover:text-aqua transition-colors duration-300 relative group"
            >
              {l.label}
              <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-aqua group-hover:w-3/4 transition-all duration-300 rounded-full" />
            </a>
          ))}
        </div>

        <div className="hidden lg:flex items-center gap-3">
          <Button
            size="sm"
            className="bg-gradient-to-r from-ocean to-aqua text-white font-semibold shadow-lg shadow-ocean/30 hover:shadow-aqua/40 transition-all duration-300 border-0"
            onClick={() => document.getElementById("kontak")?.scrollIntoView({ behavior: "smooth" })}
          >
            Hubungi Kami
          </Button>
        </div>

        <button className="lg:hidden text-white p-2" onClick={() => setOpen(!open)}>
          {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </nav>

      {/* Mobile menu */}
      <div
        className={`lg:hidden overflow-hidden transition-all duration-500 bg-navy/98 backdrop-blur-xl ${
          open ? "max-h-[500px] border-b border-white/5" : "max-h-0"
        }`}
      >
        <div className="px-6 py-4 flex flex-col gap-1">
          {navLinks.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="py-3 text-white/80 hover:text-aqua transition-colors font-medium border-b border-white/5 last:border-0"
            >
              {l.label}
            </a>
          ))}
          <Button
            className="mt-4 bg-gradient-to-r from-ocean to-aqua text-white font-semibold border-0"
            onClick={() => { setOpen(false); document.getElementById("kontak")?.scrollIntoView({ behavior: "smooth" }); }}
          >
            Hubungi Kami
          </Button>
        </div>
      </div>
    </header>
  );
}
