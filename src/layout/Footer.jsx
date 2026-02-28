import useLanguage from "../hooks/useLanguage";
import { footerTranslations } from "../utils/translations";

export default function Footer() {
  const { locale } = useLanguage();
  const t = footerTranslations[locale];

  return (
    <footer className="bg-[#0a0a0a] text-[#f0ece4] transition-all duration-500 p-6 md:fixed md:bottom-0 md:left-0 md:right-0">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <span
          className="text-white/20 text-xs tracking-widest"
          style={{ fontFamily: "sans-serif" }}
        >
          © 2025 Operation Profit LLC · El Paso, TX
        </span>
        <span
          className="text-white/10 text-xs"
          style={{ fontFamily: "sans-serif" }}
        >
          {t.built}
        </span>
      </div>
    </footer>
  );
}
