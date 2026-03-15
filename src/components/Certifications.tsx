import AnimatedSection from "./AnimatedSection";
import { Shield, CheckCircle2, Award, Leaf } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

export default function Certifications() {
  const { t } = useLanguage();

  const certs = [
    { icon: Award, name: "ISO 9001:2015", desc: t("cert.iso.desc") },
    { icon: Shield, name: "KAN", desc: t("cert.kan.desc") },
    { icon: CheckCircle2, name: "NSF", desc: t("cert.nsf.desc") },
    { icon: Leaf, name: "Halal Compliance", desc: t("cert.halal.desc") },
  ];

  return (
    <section id="sertifikasi" className="py-16 sm:py-28 md:py-40 bg-secondary/30 relative">
      <div className="container mx-auto px-5 sm:px-6 md:px-10">
        <AnimatedSection>
          <div className="text-center mb-10 sm:mb-16 md:mb-20">
            <div className="flex items-center justify-center gap-3 mb-6 sm:mb-8">
              <div className="w-8 h-px bg-ocean/40" />
              <span className="section-label">{t("cert.label")}</span>
              <div className="w-8 h-px bg-ocean/40" />
            </div>
            <h2 className="text-[1.75rem] sm:text-3xl md:text-[2.75rem] font-bold text-foreground leading-[1.15] sm:leading-[1.1] max-w-lg mx-auto">
              {t("cert.h2.pre")} <span className="text-gradient">{t("cert.h2.highlight")}</span>
            </h2>
          </div>
        </AnimatedSection>

        <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-6 max-w-5xl mx-auto">
          {certs.map((c, i) => (
            <AnimatedSection key={c.name} delay={i * 80}>
              <div className="group p-5 sm:p-8 bg-card rounded-xl border border-border/60 hover:border-ocean/20 hover:shadow-lg hover:shadow-ocean/5 transition-all duration-500 text-center h-full">
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-ocean/8 flex items-center justify-center mx-auto mb-4 sm:mb-6 group-hover:bg-ocean/12 transition-colors">
                  <c.icon className="w-5 h-5 sm:w-6 sm:h-6 text-ocean/60 group-hover:text-ocean transition-colors duration-400" />
                </div>
                <h3 className="text-[13px] sm:text-[16px] font-bold text-foreground mb-2 sm:mb-3">{c.name}</h3>
                <p className="text-[11px] sm:text-[13px] text-muted-foreground leading-[1.65] sm:leading-[1.75]">{c.desc}</p>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
