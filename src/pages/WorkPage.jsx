import ProjectCard from "../components/ProjectCard";
import useLanguage from "../hooks/useLanguage";
import { workTranslations } from "../utils/translations";

export default function WorkPage() {
  const { locale } = useLanguage();
  const t = workTranslations[locale];

  return (
    <section
      id="work"
      className="h-full max-w-7xl mx-auto px-6 flex flex-col justify-center"
    >
      <div className="flex items-center gap-4 mt-16 mb-8 lg:mb-16 lg:mt-0">
        <span
          className="text-[#f59e0b] text-xs tracking-[0.3em] uppercase"
          style={{ fontFamily: "sans-serif" }}
        >
          {t.sectionLabel}
        </span>
        <span className="flex-1 h-px bg-white/10" />
      </div>

      <div className="flex flex-col gap-6">
        {t.projects.map((p, i) => (
          <ProjectCard
            key={i}
            project={p}
            viewLive={t.viewLive}
            placeholderHeading={t.placeholderHeading}
            placeholderCta={t.placeholderCta}
          />
        ))}
      </div>
    </section>
  );
}
