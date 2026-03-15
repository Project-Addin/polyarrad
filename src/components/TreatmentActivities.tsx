import AnimatedSection from "./AnimatedSection";
import { TestTubes, Pipette, HardHat, Wrench, Truck, Settings } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

export default function TreatmentActivities() {
  const { t } = useLanguage();

  const activities = [
    { icon: TestTubes, title: t("treat.lab.title"), desc: t("treat.lab.desc") },
    { icon: Pipette, title: t("treat.dosing.title"), desc: t("treat.dosing.desc") },
    { icon: HardHat, title: t("treat.site.title"), desc: t("treat.site.desc") },
    { icon: Wrench, title: t("treat.maint.title"), desc: t("treat.maint.desc") },
    { icon: Truck, title: t("treat.supply.title"), desc: t("treat.supply.desc") },
    { icon: Settings, title: t("treat.optim.title"), desc: t("treat.optim.desc") },
  ];

  return (
    <section className="py-16 sm:py-28 md:py-40 bg-light-blue relative overflow-hidden">
      <div className="container mx-auto px-5 sm:px-6 md:px-10 relative z-10">
        <AnimatedSection>
          <div className="flex items-center gap-3 mb-6 sm:mb-8">
            <div className="w-8 h-px bg-ocean/40" />
            <span className="section-label">{t("treat.label")}</span>
          </div>
          <h2 className="text-[1.75rem] sm:text-3xl md:text-[2.75rem] font-bold text-foreground leading-[1.15] sm:leading-[1.1] mb-10 sm:mb-16 md:mb-20 max-w-lg">
            {t("treat.h2.pre")} <span className="text-gradient">{t("treat.h2.highlight")}</span>
          </h2>
        </AnimatedSection>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px bg-border/60 rounded-2xl overflow-hidden border border-border/50">
          {activities.map((a, i) => (
            <AnimatedSection key={a.title} delay={i * 70}>
              <div className="group p-6 sm:p-9 bg-card hover:bg-secondary/40 transition-all duration-500 h-full">
                <a.icon className="w-5 h-5 text-ocean/40 mb-4 sm:mb-6 group-hover:text-ocean transition-colors duration-400" />
                <h3 className="text-[14px] sm:text-[15px] font-bold text-foreground/80 group-hover:text-foreground transition-colors mb-2">{a.title}</h3>
                <p className="text-muted-foreground text-[12px] sm:text-[13px] leading-[1.7] sm:leading-[1.75] transition-colors duration-400">{a.desc}</p>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
