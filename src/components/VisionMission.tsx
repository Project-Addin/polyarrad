import AnimatedSection from "./AnimatedSection";
import { Beaker, Users, Rocket, Award, Leaf } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

export default function VisionMission() {
  const { t } = useLanguage();

  const missions = [
    { icon: Beaker, text: t("vm.m1") },
    { icon: Users, text: t("vm.m2") },
    { icon: Rocket, text: t("vm.m3") },
    { icon: Award, text: t("vm.m4") },
    { icon: Leaf, text: t("vm.m5") },
  ];

  return (
    <section className="py-16 sm:py-28 md:py-40 relative">
      <div className="container mx-auto px-5 sm:px-6 md:px-10">
        <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 md:gap-24">
          <AnimatedSection>
            <div className="h-full p-7 sm:p-10 md:p-14 rounded-2xl bg-navy relative overflow-hidden">
              <div className="absolute top-0 right-0 w-48 sm:w-64 h-48 sm:h-64 bg-ocean/6 rounded-full blur-[100px] sm:blur-[140px]" />
              <div className="absolute inset-0 opacity-[0.02]" style={{
                backgroundImage: `linear-gradient(hsl(var(--aqua)) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--aqua)) 1px, transparent 1px)`,
                backgroundSize: '48px 48px'
              }} />
              <div className="relative z-10">
                <div className="flex items-center gap-3 mb-6 sm:mb-10">
                  <div className="w-8 h-px bg-aqua/30" />
                  <span className="text-[11px] font-semibold text-aqua/50 tracking-[0.2em] uppercase">{t("vm.vision.label")}</span>
                </div>
                <h3 className="text-xl sm:text-2xl md:text-[1.75rem] font-bold text-white leading-[1.4] sm:leading-[1.45]">
                  {t("vm.vision.text")}
                </h3>
              </div>
            </div>
          </AnimatedSection>

          <AnimatedSection delay={150}>
            <div>
              <div className="flex items-center gap-3 mb-6 sm:mb-10">
                <div className="w-8 h-px bg-ocean/40" />
                <span className="section-label">{t("vm.mission.label")}</span>
              </div>
              <div className="flex flex-col gap-3 sm:gap-4">
                {missions.map((m, i) => (
                  <div key={i} className="flex items-start gap-3 sm:gap-4 group">
                    <div className="w-8 h-8 rounded-lg bg-secondary flex items-center justify-center flex-shrink-0 mt-0.5 group-hover:bg-ocean/10 transition-colors duration-300">
                      <m.icon className="w-4 h-4 text-ocean/60 group-hover:text-ocean transition-colors duration-300" />
                    </div>
                    <p className="text-muted-foreground leading-[1.65] sm:leading-[1.75] text-[13px] sm:text-[15px] pt-1">{m.text}</p>
                  </div>
                ))}
              </div>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}
