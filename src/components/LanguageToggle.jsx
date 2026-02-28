import useLanguage from "../hooks/useLanguage";
import { Globe } from "lucide-react";

export default function LanguageToggle() {
  const { locale, setLocale } = useLanguage();

  const toggleLanguage = () => {
    setLocale(locale === "en" ? "es" : "en");
  };
  return (
    <button
      onClick={toggleLanguage}
      className="fixed bottom-6 right-6 md:bottom-10 z-50 flex items-center gap-2 bg-[#111] border border-white/10 hover:border-[#f59e0b]/40 px-4 py-2 rounded-full shadow-lg hover:shadow-[0_0_20px_rgba(245,158,11,0.15)] transition-all duration-300"
      style={{ fontFamily: "sans-serif" }}
    >
      <Globe size={14} className="text-[#f59e0b]" />
      <span className="text-xs tracking-widest uppercase text-white/60 hover:text-white transition-colors">
        {locale === "en" ? "ES" : "EN"}
      </span>
    </button>
  );
}
