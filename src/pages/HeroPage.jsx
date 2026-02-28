import { Link } from "react-router-dom";
import { Button } from "../components/Button";
import { Phone } from "lucide-react";
import useLanguage from "../hooks/useLanguage";
import { heroTranslations } from "../utils/translations";

export default function HeroPage() {
  const { locale } = useLanguage();
  const t = heroTranslations[locale];

  return (
    <section className="relative h-full max-w-7xl mx-auto px-6 flex flex-col justify-center overflow-hidden">
      {/* Grid bg */}
      <div
        className="absolute inset-0 opacity-[0.04] pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(#f0ece4 1px, transparent 1px), linear-gradient(90deg, #f0ece4 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      {/* Glow */}
      <div
        className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-100 h-100 md:w-150 md:h-150 rounded-full opacity-10 pointer-events-none"
        style={{
          background: "radial-gradient(circle, #f59e0b 0%, transparent 70%)",
        }}
      />

      <div className="relative max-w-6xl mx-auto w-full pt-16 md:pt-24">
        {/* Eyebrow */}
        <div className="mb-4 md:mb-6 flex items-center gap-3">
          <span className="w-6 md:w-8 h-px bg-[#f59e0b] shrink-0" />
          <span
            className="text-[#f59e0b] text-xs md:text-sm tracking-[0.2em] md:tracking-[0.3em] uppercase"
            style={{ fontFamily: "sans-serif" }}
          >
            {t.eyebrow}
          </span>
        </div>

        {/* Name */}
        <h1
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-none tracking-tight mb-2"
          style={{ fontFamily: "'Georgia', serif" }}
        >
          Stephen Helman
        </h1>

        {/* Company */}
        <h2
          className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-bold leading-none tracking-wide text-white/10 mb-8 md:mb-10 uppercase"
          style={{
            fontFamily: "'Georgia', serif",
            WebkitTextStroke: "1px rgba(240,236,228,0.2)",
          }}
        >
          Operation Profit LLC
        </h2>

        {/* Bottom row */}
        <div className="flex flex-col gap-6 lg:flex-row md:gap-16 md:items-end md:justify-between">
          <p
            className="text-white/50 text-base md:text-lg w-full leading-relaxed"
            style={{ fontFamily: "sans-serif" }}
          >
            {t.description}
          </p>

          <div className="flex  gap-3 md:gap-4 shrink-0">
            <Button
              link="/work"
              style="primary"
              size="large"
              icon="arrow"
              label={t.viewWork}
              iconPosition="trailing"
            />
            <Button
              link="/contact"
              style="ghost"
              size="large"
              icon="phone"
              label={t.contact}
              iconPosition="leading"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
