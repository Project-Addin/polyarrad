import { Droplets } from "lucide-react";

const quickLinks = ["Tentang Kami", "Industri", "Produk", "Layanan Teknis", "Sertifikasi", "Kontak"];
const productLinks = ["Influent", "Effluent", "Boiler", "Cooling", "Reverse Osmosis", "Waste Water", "Commodity Trading"];

export default function Footer() {
  return (
    <footer className="bg-navy border-t border-white/[0.03] relative overflow-hidden">
      <div className="absolute top-0 left-1/3 w-80 h-80 bg-ocean/4 rounded-full blur-[140px]" />
      
      <div className="container mx-auto px-4 md:px-8 py-20 relative z-10">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-14">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2.5 mb-6">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-ocean to-aqua flex items-center justify-center shadow-md shadow-ocean/15">
                <Droplets className="w-[18px] h-[18px] text-white" />
              </div>
              <div className="flex flex-col leading-none">
                <span className="text-white font-extrabold text-[17px]">ARRAD</span>
                <span className="text-aqua/70 text-[9px] tracking-[0.2em] font-medium uppercase">Chemicals</span>
              </div>
            </div>
            <p className="text-white/30 text-[13.5px] leading-[1.7]">
              Produsen dan penyedia kimia spesialti terdepan untuk pengolahan air dan air limbah di Indonesia sejak 1998.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white/80 font-bold mb-6 text-[13px] tracking-[0.05em] uppercase">Navigasi</h4>
            <ul className="space-y-3">
              {quickLinks.map((l) => (
                <li key={l}>
                  <a href={`#${l.toLowerCase().replace(/ /g, "-")}`} className="text-white/30 text-[13.5px] hover:text-aqua/80 transition-colors duration-300">
                    {l}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Product Links */}
          <div>
            <h4 className="text-white/80 font-bold mb-6 text-[13px] tracking-[0.05em] uppercase">Produk</h4>
            <ul className="space-y-3">
              {productLinks.map((l) => (
                <li key={l}>
                  <a href="#produk" className="text-white/30 text-[13.5px] hover:text-aqua/80 transition-colors duration-300">{l}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white/80 font-bold mb-6 text-[13px] tracking-[0.05em] uppercase">Kontak</h4>
            <div className="text-white/30 text-[13.5px] space-y-3 leading-[1.6]">
              <p>Jl. Rungkut Industri III No. 18-20</p>
              <p>Surabaya 60293, Jawa Timur</p>
              <p>+62 31 843 7000</p>
              <p>info@arradchemicals.co.id</p>
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-white/[0.03]">
        <div className="container mx-auto px-4 md:px-8 py-6 flex flex-col sm:flex-row justify-between items-center gap-2">
          <p className="text-white/20 text-[12px]">&copy; {new Date().getFullYear()} PT. Poly Arrad Pusaka. All rights reserved.</p>
          <p className="text-white/10 text-[12px] tracking-wide">ARRAD Chemicals — Specialty Water Treatment Solutions</p>
        </div>
      </div>
    </footer>
  );
}
