const quickLinks = ["Tentang Kami", "Industri", "Produk", "Layanan Teknis", "Sertifikasi", "Kontak"];
const productLinks = ["Influent", "Effluent", "Boiler", "Cooling", "Reverse Osmosis", "Waste Water"];

export default function Footer() {
  return (
    <footer className="bg-navy border-t border-white/[0.04]">
      <div className="container mx-auto px-6 md:px-10 py-16 md:py-20">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-14">
          <div>
            <div className="flex items-center gap-3 mb-5">
              <span className="text-white font-bold text-lg tracking-tight">ARRAD</span>
              <span className="text-white/20 font-light text-[12px] tracking-[0.15em] uppercase">Chemicals</span>
            </div>
            <p className="text-white/20 text-[13px] leading-[1.75]">
              Produsen dan penyedia kimia spesialti terdepan untuk pengolahan air dan air limbah di Indonesia sejak 1998.
            </p>
          </div>

          <div>
            <h4 className="text-white/50 font-semibold mb-5 text-[12px] tracking-[0.1em] uppercase">Navigasi</h4>
            <ul className="space-y-2.5">
              {quickLinks.map((l) => (
                <li key={l}>
                  <a href={`#${l.toLowerCase().replace(/ /g, "-")}`} className="text-white/20 text-[13px] hover:text-white/50 transition-colors duration-300">{l}</a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-white/50 font-semibold mb-5 text-[12px] tracking-[0.1em] uppercase">Produk</h4>
            <ul className="space-y-2.5">
              {productLinks.map((l) => (
                <li key={l}>
                  <a href="#produk" className="text-white/20 text-[13px] hover:text-white/50 transition-colors duration-300">{l}</a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-white/50 font-semibold mb-5 text-[12px] tracking-[0.1em] uppercase">Kontak</h4>
            <div className="text-white/20 text-[13px] space-y-2.5 leading-[1.6]">
              <p>Jl. Rungkut Industri III No. 18-20</p>
              <p>Surabaya 60293, Jawa Timur</p>
              <p>+62 31 843 7000</p>
              <p>info@arradchemicals.co.id</p>
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-white/[0.03]">
        <div className="container mx-auto px-6 md:px-10 py-5 flex flex-col sm:flex-row justify-between items-center gap-2">
          <p className="text-white/15 text-[12px]">&copy; {new Date().getFullYear()} PT. Poly Arrad Pusaka. All rights reserved.</p>
          <p className="text-white/8 text-[11px] tracking-wider uppercase">ARRAD Chemicals</p>
        </div>
      </div>
    </footer>
  );
}
