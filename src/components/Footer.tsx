import { useLanguage } from "@/contexts/LanguageContext";

export default function Footer() {
  const { t } = useLanguage();

  const quickLinks = [
    { label: t("footer.about"), href: "#tentang" },
    { label: t("nav.industries"), href: "#industri" },
    { label: t("footer.products"), href: "#produk" },
    { label: t("footer.services"), href: "#layanan" },
    { label: t("nav.certifications"), href: "#sertifikasi" },
    { label: t("footer.contact"), href: "#kontak" },
  ];

  const productLinks = ["Influent", "Effluent", "Boiler", "Cooling", "Reverse Osmosis", "Waste Water"];

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer className="bg-navy border-t border-white/[0.06]">
      <div className="container mx-auto px-5 sm:px-6 md:px-10 py-12 sm:py-16 md:py-20">
        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-10 lg:gap-14">
          <div className="col-span-2 sm:col-span-1">
            <div className="flex items-center gap-2.5 sm:gap-3 mb-4 sm:mb-5">
              <span className="text-white font-bold text-base sm:text-lg tracking-tight">ARRAD</span>
              <span className="text-white/60 font-light text-[11px] sm:text-[12px] tracking-[0.15em] uppercase">Chemicals</span>
            </div>
            <p className="text-white/50 text-[12px] sm:text-[13px] leading-[1.7] sm:leading-[1.75] max-w-xs">
              {t("footer.desc")}
            </p>
          </div>

          <div>
            <h4 className="text-white/80 font-semibold mb-4 sm:mb-5 text-[11px] sm:text-[12px] tracking-[0.1em] uppercase">{t("footer.nav")}</h4>
            <ul className="space-y-2 sm:space-y-2.5">
              {quickLinks.map((l) => (
                <li key={l.label}>
                  <a href={l.href} onClick={(e) => handleClick(e, l.href)} className="text-white/50 text-[12px] sm:text-[13px] hover:text-white transition-colors duration-300 py-0.5 inline-block">
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-white/80 font-semibold mb-4 sm:mb-5 text-[11px] sm:text-[12px] tracking-[0.1em] uppercase">{t("footer.products")}</h4>
            <ul className="space-y-2 sm:space-y-2.5">
              {productLinks.map((l) => (
                <li key={l}>
                  <a href="#produk" onClick={(e) => handleClick(e, "#produk")} className="text-white/50 text-[12px] sm:text-[13px] hover:text-white transition-colors duration-300 py-0.5 inline-block">
                    {l}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="col-span-2 sm:col-span-1">
            <h4 className="text-white/80 font-semibold mb-4 sm:mb-5 text-[11px] sm:text-[12px] tracking-[0.1em] uppercase">{t("footer.contact")}</h4>
            <div className="text-white/50 text-[12px] sm:text-[13px] space-y-2 sm:space-y-2.5 leading-[1.6]">
              <p>Jl. Rungkut Industri III No. 18-20</p>
              <p>Surabaya 60293, Jawa Timur</p>
              <p>+62 31 843 7000</p>
              <p>info@arradchemicals.co.id</p>
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-white/[0.06]">
        <div className="container mx-auto px-5 sm:px-6 md:px-10 py-4 sm:py-5 flex flex-col sm:flex-row justify-between items-center gap-2">
          <p className="text-white/30 text-[11px] sm:text-[12px]">
            &copy; {new Date().getFullYear()} PT. Poly Arrad Pusaka. All rights reserved.
          </p>
          <p className="text-white/20 text-[10px] sm:text-[11px] tracking-wider uppercase">ARRAD Chemicals</p>
        </div>
      </div>
    </footer>
  );
}
