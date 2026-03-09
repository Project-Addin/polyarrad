import { Droplets } from "lucide-react";

const quickLinks = ["Tentang Kami", "Industri", "Produk", "Layanan Teknis", "Sertifikasi", "Kontak"];
const productLinks = ["Influent", "Effluent", "Boiler", "Cooling", "Reverse Osmosis", "Waste Water", "Commodity Trading"];

export default function Footer() {
  return (
    <footer className="bg-navy border-t border-white/5">
      <div className="container mx-auto px-4 md:px-8 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-ocean to-aqua flex items-center justify-center">
                <Droplets className="w-4 h-4 text-white" />
              </div>
              <div className="flex flex-col leading-none">
                <span className="text-white font-extrabold text-base">ARRAD</span>
                <span className="text-aqua text-[9px] tracking-[0.2em] font-medium uppercase">Chemicals</span>
              </div>
            </div>
            <p className="text-white/40 text-sm leading-relaxed">
              Produsen dan penyedia kimia spesialti terdepan untuk pengolahan air dan air limbah di Indonesia sejak 1998.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-bold mb-4">Navigasi</h4>
            <ul className="space-y-2">
              {quickLinks.map((l) => (
                <li key={l}>
                  <a href={`#${l.toLowerCase().replace(/ /g, "-")}`} className="text-white/40 text-sm hover:text-aqua transition-colors">
                    {l}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Product Links */}
          <div>
            <h4 className="text-white font-bold mb-4">Produk</h4>
            <ul className="space-y-2">
              {productLinks.map((l) => (
                <li key={l}>
                  <a href="#produk" className="text-white/40 text-sm hover:text-aqua transition-colors">{l}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-bold mb-4">Kontak</h4>
            <div className="text-white/40 text-sm space-y-2">
              <p>Jl. Rungkut Industri III No. 18-20</p>
              <p>Surabaya 60293, Jawa Timur</p>
              <p>+62 31 843 7000</p>
              <p>info@arradchemicals.co.id</p>
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-white/5">
        <div className="container mx-auto px-4 md:px-8 py-5 flex flex-col sm:flex-row justify-between items-center gap-2">
          <p className="text-white/30 text-xs">&copy; {new Date().getFullYear()} PT. Poly Arrad Pusaka. All rights reserved.</p>
          <p className="text-white/20 text-xs">ARRAD Chemicals — Specialty Water Treatment Solutions</p>
        </div>
      </div>
    </footer>
  );
}
