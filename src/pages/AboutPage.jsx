import AboutRow from "../components/AboutRow";
import { Button } from "../components/Button";
import useLanguage from "../hooks/useLanguage";
import { aboutTranslations } from "../utils/translations";

export default function AboutPage() {
  const { locale } = useLanguage();
  const t = aboutTranslations[locale];

  return (
    <section
      id="about"
      className="h-full max-w-7xl mx-auto px-4 sm:px-6 flex flex-col justify-start md:justify-center overflow-y-auto py-12 md:py-0"
    >
      <div className="flex items-center gap-4 mb-8 md:mb-16">
        <span
          className="text-[#f59e0b] text-xs tracking-[0.3em] uppercase"
          style={{ fontFamily: "sans-serif" }}
        >
          {t.sectionLabel}
        </span>
        <span className="flex-1 h-px bg-white/10" />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-20 items-start">
        <div>
          <h2
            className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight mb-6 md:mb-8"
            style={{ fontFamily: "'Georgia', serif" }}
          >
            {t.headingLine1}
            <br />
            <span className="text-white/25">{t.headingLine2}</span>
          </h2>
          <p
            className="text-white/50 leading-relaxed mb-6 text-sm sm:text-base"
            style={{ fontFamily: "sans-serif" }}
          >
            {t.bio1}
          </p>
          <p
            className="text-white/50 leading-relaxed mb-8 text-sm sm:text-base"
            style={{ fontFamily: "sans-serif" }}
          >
            {t.bio2}
          </p>
          <Button
            link="/contact"
            style="secondary"
            size="small"
            icon="phone"
            label={t.cta}
            iconPosition="leading"
          />
        </div>

        <div className="flex flex-col gap-4">
          {t.config.map((row, i) => (
            <AboutRow row={row} key={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
