import AnimatedSection from "./AnimatedSection";
import { Zap, Building, TreePine, UtensilsCrossed, FlaskRound, Sprout, Cpu, CircleDot } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const partners = [
  "Sinar Mas Group", "Jawa Pos Group", "Unilever Indonesia", "Cargill Group",
  "Gudang Garam Group", "PLN", "Pertamina", "Medco Group",
  "Pakuwon Group", "Semen Indonesia", "Pupuk Indonesia",
];

export default function IndustriesSection() {
  const { t } = useLanguage();

  const industries = [
    { icon: Zap, name: t("ind.power"), desc: t("ind.power.desc") },
    { icon: Building, name: t("ind.hotel"), desc: t("ind.hotel.desc") },
    { icon: TreePine, name: t("ind.pulp"), desc: t("ind.pulp.desc") },
    { icon: UtensilsCrossed, name: t("ind.food"), desc: t("ind.food.desc") },
    { icon: FlaskRound, name: t("ind.chem"), desc: t("ind.chem.desc") },
    { icon: Sprout, name: t("ind.fert"), desc: t("ind.fert.desc") },
    { icon: Cpu, name: t("ind.elec"), desc: t("ind.elec.desc") },
    { icon: CircleDot, name: t("ind.rubber"), desc: t("ind.rubber.desc") },
  ];

  return (
    <section id="industri" className="py-16 sm:py-28 md:py-40 bg-light-blue relative overflow-hidden">
      <div className="container mx-auto px-5 sm:px-6 md:px-10 relative z-10">
        <AnimatedSection>
          <div className="flex items-center gap-3 mb-6 sm:mb-8">
            <div className="w-8 h-px bg-ocean/40" />
            <span className="section-label">{t("ind.label")}</span>
          </div>
          <h2 className="text-[1.75rem] sm:text-3xl md:text-[2.75rem] font-bold text-foreground leading-[1.15] sm:leading-[1.1] mb-4 sm:mb-6 max-w-lg">
            {t("ind.h2.pre")} <span className="text-gradient">{t("ind.h2.highlight")}</span>
          </h2>
          <p className="text-muted-foreground text-[14px] sm:text-[16px] max-w-md mb-10 sm:mb-16 md:mb-20">
            {t("ind.subtitle")}
          </p>
        </AnimatedSection>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-px bg-border/60 rounded-2xl overflow-hidden border border-border/50 mb-16 sm:mb-28">
          {industries.map((ind, i) => (
            <AnimatedSection key={ind.name} delay={i * 60}>
              <div className="group p-5 sm:p-7 md:p-9 bg-card hover:bg-secondary/50 transition-all duration-500 relative h-full">
                <ind.icon className="w-4 h-4 sm:w-5 sm:h-5 text-ocean/40 mb-3 sm:mb-5 group-hover:text-ocean transition-colors duration-400" />
                <h3 className="text-[12px] sm:text-[14px] font-semibold text-foreground/80 group-hover:text-foreground transition-colors mb-1 sm:mb-2">{ind.name}</h3>
                <p className="text-[11px] sm:text-[12px] text-muted-foreground group-hover:text-muted-foreground/80 transition-colors leading-relaxed hidden sm:block">{ind.desc}</p>
              </div>
            </AnimatedSection>
          ))}
        </div>

        <AnimatedSection>
          <div className="bg-card rounded-2xl border border-border/60 p-6 sm:p-10 md:p-14">
            <div className="text-center mb-6 sm:mb-10">
              <span className="section-label">{t("ind.trusted")}</span>
              <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-foreground mt-2 sm:mt-3">{t("ind.partners")}</h3>
            </div>
            <div className="overflow-hidden relative">
              <div className="absolute left-0 top-0 bottom-0 w-12 sm:w-24 bg-gradient-to-r from-card to-transparent z-10" />
              <div className="absolute right-0 top-0 bottom-0 w-12 sm:w-24 bg-gradient-to-l from-card to-transparent z-10" />
              <div className="flex animate-marquee whitespace-nowrap">
                {[...partners, ...partners].map((p, i) => (
                  <span key={i} className="mx-5 sm:mx-10 text-foreground/40 hover:text-ocean font-semibold text-[13px] sm:text-[16px] md:text-[18px] whitespace-nowrap transition-colors duration-300 cursor-default">{p}</span>
                ))}
              </div>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
