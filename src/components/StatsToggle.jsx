import { useEffect, useState } from "react";
import StatsModal from "./StatsModal";
import useLanguage from "../hooks/useLanguage";
import { statsTranslations } from "../utils/translations";

export default function StatsToggle() {
  const [open, setOpen] = useState(false);
  const { locale } = useLanguage();
  const tr = statsTranslations[locale];

  // prevent body scroll when open
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      {/* Floating trigger — place wherever you want in your layout */}
      <button
        onClick={() => setOpen(true)}
        className="group flex items-center gap-3 border border-white/10 px-5 py-3 hover:border-[#f59e0b]/40 transition-all duration-300"
        style={{ fontFamily: "sans-serif" }}
      >
        <span
          className="w-2 h-2 rounded-full bg-[#f59e0b]"
          style={{ animation: "pulse 2s infinite" }}
        />
        <span className="text-xs tracking-widest uppercase text-white/40 group-hover:text-[#f59e0b] transition-colors">
          {tr.toggleLabel}
        </span>
        <style>{`@keyframes pulse { 0%,100%{opacity:.4} 50%{opacity:1} }`}</style>
      </button>

      {open && <StatsModal onClose={() => setOpen(false)} />}
    </>
  );
}
