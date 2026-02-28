import { useEffect, useState, useRef } from "react";
import { statsTranslations } from "../utils/translations";
import useLanguage from "../hooks/useLanguage";
import StatsCard from "./StatsCard";

export default function StatsModal({ onClose }) {
  const [active, setActive] = useState(false);
  const overlayRef = useRef(null);
  const { locale } = useLanguage();
  const tr = statsTranslations[locale];

  useEffect(() => {
    const t = setTimeout(() => setActive(true), 60);
    return () => clearTimeout(t);
  }, []);

  useEffect(() => {
    const onKey = (e) => e.key === "Escape" && onClose();
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [onClose]);

  // close on backdrop click
  const handleOverlayClick = (e) => {
    if (e.target === overlayRef.current) onClose();
  };

  return (
    <div
      ref={overlayRef}
      onClick={handleOverlayClick}
      className="fixed inset-0 z-50 flex items-center justify-center px-4"
      style={{
        background: "rgba(0,0,0,0.75)",
        backdropFilter: "blur(8px)",
        animation: "fadeIn 0.2s ease both",
      }}
    >
      <div
        className="relative w-full max-w-2xl bg-[#0a0a0a] border border-white/10"
        style={{ animation: "scaleIn 0.25s ease both" }}
      >
        {/* header */}
        <div className="flex items-center justify-between px-8 py-5 border-b border-white/5">
          <div className="flex items-center gap-3">
            <span className="w-6 h-px bg-[#f59e0b]" />
            <span
              className="text-[#f59e0b] text-xs tracking-[0.25em] uppercase"
              style={{ fontFamily: "sans-serif" }}
            >
              {tr.modalHeading}
            </span>
          </div>
          <button
            onClick={onClose}
            className="text-white/30 hover:text-white transition-colors text-xl leading-none"
            aria-label="Close"
          >
            ×
          </button>
        </div>

        {/* 2x2 grid */}
        <div className="grid grid-cols-2 gap-px bg-white/5 p-px">
          {tr.stats.map((stat, i) => (
            <StatsCard key={i} stat={stat} active={active} index={i} />
          ))}
        </div>

        {/* footer */}
        <div className="px-8 py-4 border-t border-white/5 text-center">
          <span
            className="text-white/20 text-xs tracking-widest"
            style={{ fontFamily: "sans-serif" }}
          >
            Operation Profit LLC · El Paso, TX
          </span>
        </div>
      </div>

      <style>{`
        @keyframes fadeIn { from { opacity: 0 } to { opacity: 1 } }
        @keyframes scaleIn { from { opacity: 0; transform: scale(0.96) translateY(8px) } to { opacity: 1; transform: scale(1) translateY(0) } }
        @keyframes fadeSlideUp { from { opacity: 0; transform: translateY(12px) } to { opacity: 1; transform: translateY(0) } }
      `}</style>
    </div>
  );
}
