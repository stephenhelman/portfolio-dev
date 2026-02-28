import ServicesCard from "../components/ServicesCard";
import useLanguage from "../hooks/useLanguage";
import { servicesTranslations } from "../utils/translations";

export default function ServicesPage() {
  const { locale } = useLanguage();
  const t = servicesTranslations[locale];

  return (
    <section
      id="services"
      className="h-full max-w-7xl mx-auto px-4 sm:px-6 flex flex-col justify-start md:justify-center overflow-y-auto py-12 md:py-0"
    >
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center gap-4 mb-8 md:mb-16">
          <span
            className="text-[#f59e0b] text-xs tracking-[0.3em] uppercase"
            style={{ fontFamily: "sans-serif" }}
          >
            {t.sectionLabel}
          </span>
          <span className="flex-1 h-px bg-white/10" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-white/5">
          {t.services.map((s, i) => (
            <ServicesCard service={s} key={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
