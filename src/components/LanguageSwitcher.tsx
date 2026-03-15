import { useLanguage, type Lang } from "@/contexts/LanguageContext";

interface LanguageSwitcherProps {
  scrolled: boolean;
}

export default function LanguageSwitcher({ scrolled }: LanguageSwitcherProps) {
  const { lang, setLang } = useLanguage();

  const options: { value: Lang; label: string; flag: string }[] = [
    { value: "id", label: "ID", flag: "🇮🇩" },
    { value: "en", label: "EN", flag: "🇬🇧" },
  ];

  return (
    <div
      className={`inline-flex items-center rounded-full p-0.5 transition-all duration-300 ${
        scrolled
          ? "bg-secondary border border-border/60"
          : "bg-white/[0.08] border border-white/[0.12]"
      }`}
    >
      {options.map((opt) => {
        const isActive = lang === opt.value;
        return (
          <button
            key={opt.value}
            onClick={() => setLang(opt.value)}
            className={`flex items-center gap-1.5 px-3 py-1.5 rounded-full text-[12px] font-semibold tracking-wide transition-all duration-300 ${
              isActive
                ? scrolled
                  ? "bg-foreground text-background shadow-sm"
                  : "bg-white text-navy shadow-sm"
                : scrolled
                  ? "text-muted-foreground hover:text-foreground"
                  : "text-white/50 hover:text-white/80"
            }`}
            aria-label={`Switch to ${opt.label}`}
          >
            <span className="text-[13px] leading-none">{opt.flag}</span>
            <span>{opt.label}</span>
          </button>
        );
      })}
    </div>
  );
}
