import { useState } from "react";
import { Link } from "react-router-dom";
import NavLink from "../components/NavLink";
import StatsLink from "../components/StatsLink";
import useLanguage from "../hooks/useLanguage";
import { navTranslations } from "../utils/translations";

export default function Navbar({ onStatsOpen }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const { locale } = useLanguage();
  const t = navTranslations[locale];

  const handleStatsClick = () => {
    setMenuOpen(false);
    onStatsOpen();
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 transition-all duration-500 bg-[#0a0a0a]/95 backdrop-blur-sm border-b border-white/5">
      <div className="max-w-7xl mx-auto px-6 py-5 flex items-center justify-center">
        <Link
          href="/"
          className="text-[#f59e0b] font-bold tracking-widest text-sm uppercase mr-auto"
          style={{ fontFamily: "'Georgia', serif", letterSpacing: "0.2em" }}
        >
          Operation Profit LLC
        </Link>
        <div className="hidden lg:flex gap-10">
          {t.links.map((link) => (
            <NavLink link={link} key={link.label} setMenuOpen={setMenuOpen} />
          ))}

          <StatsLink onClick={handleStatsClick} />
        </div>
        <Link
          to="/contact"
          className="hidden lg:block ml-auto text-xs tracking-widest uppercase border border-[#f59e0b]/40 text-[#f59e0b] px-5 py-2 hover:bg-[#f59e0b] hover:text-black transition-all duration-200"
          style={{ letterSpacing: "0.1em" }}
        >
          {t.hireMe}
        </Link>

        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="lg:hidden text-white/60 hover:text-white"
        >
          <svg
            width="24"
            height="24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
          >
            {menuOpen ? (
              <>
                <line x1="4" y1="4" x2="20" y2="20" />
                <line x1="20" y1="4" x2="4" y2="20" />
              </>
            ) : (
              <>
                <line x1="3" y1="7" x2="21" y2="7" />
                <line x1="3" y1="12" x2="21" y2="12" />
                <line x1="3" y1="17" x2="21" y2="17" />
              </>
            )}
          </svg>
        </button>
      </div>
      {menuOpen && (
        <div className="lg:hidden bg-[#111] border-t border-white/5 px-6 py-6 flex flex-col gap-5">
          {t.links.map((link) => (
            <NavLink link={link} setMenuOpen={setMenuOpen} />
          ))}
          <StatsLink onClick={handleStatsClick} />
        </div>
      )}
    </nav>
  );
}
