import useLanguage from "../hooks/useLanguage";
import { statsTranslations } from "../utils/translations";

export default function StatsLink({ onClick, className = "" }) {
  const { locale } = useLanguage();
  const tr = statsTranslations[locale];

  return (
    <button
      onClick={onClick}
      aria-haspopup="dialog"
      aria-label="View impact metrics"
      className={`group flex items-center gap-2 text-xs tracking-widest uppercase text-white/50 hover:text-[#f59e0b] transition-colors duration-200 cursor-pointer ${className}`}
      style={{
        fontFamily: "sans-serif",
        letterSpacing: "0.15em",
        background: "none",
        border: "none",
        padding: 0,
      }}
    >
      {/* Pulsing glow dot */}
      <span className="relative flex items-center justify-center w-2 h-2">
        <span
          className="absolute inline-flex w-full h-full rounded-full bg-[#f59e0b] opacity-50"
          style={{
            animation: "statsPing 1.5s cubic-bezier(0,0,0.2,1) infinite",
          }}
        />
        <span className="relative inline-flex w-1.5 h-1.5 rounded-full bg-[#f59e0b]" />
      </span>
      {tr.linkLabel}
    </button>
  );
}
