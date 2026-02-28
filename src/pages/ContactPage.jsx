import { Link } from "react-router-dom";
import { Github, Linkedin, Mail, Phone, ExternalLink } from "lucide-react";
import useLanguage from "../hooks/useLanguage";
import { contactTranslations } from "../utils/translations";

export default function ContactPage() {
  const { locale } = useLanguage();
  const t = contactTranslations[locale];

  return (
    <section
      id="contact"
      className="h-full max-w-7xl mx-auto px-4 sm:px-6 flex flex-col justify-center"
    >
      <div className="flex items-center flex-col gap-3 mb-6">
        <span
          className="text-[#f59e0b] text-xs tracking-[0.3em] uppercase"
          style={{ fontFamily: "sans-serif" }}
        >
          {t.sectionLabel}
        </span>

        <h2
          className="text-4xl sm:text-5xl md:text-7xl font-bold mb-3 md:mb-6 leading-tight flex flex-col items-center text-center"
          style={{ fontFamily: "'Georgia', serif" }}
        >
          {t.headingLine1}
          <span className="text-white/20">{t.headingLine2}</span>
        </h2>

        <p
          className="text-white/40 mb-6 md:mb-12 text-sm sm:text-base md:text-lg max-w-lg mx-auto leading-relaxed text-center"
          style={{ fontFamily: "sans-serif" }}
        >
          {t.description}
        </p>
      </div>

      {/* CTA Buttons */}
      <div className="flex flex-col sm:flex-row gap-3 justify-center mb-8 md:mb-16">
        <a
          href="mailto:hello@stephendev.com"
          className="bg-[#f59e0b] text-black font-bold text-xs sm:text-sm tracking-widest uppercase px-6 sm:px-10 py-3 sm:py-4 hover:bg-white transition-colors duration-200 flex items-center justify-center gap-3 group flex-1"
          style={{ letterSpacing: "0.1em", fontFamily: "sans-serif" }}
        >
          <Mail
            size={16}
            className="text-black group-hover:text-[#f59e0b] transition-colors shrink-0"
          />
          {t.emailCta}
        </a>
        <a
          href="tel:+19155415303"
          className="border border-white/20 text-white/60 text-xs sm:text-sm tracking-widest uppercase px-6 sm:px-10 py-3 sm:py-4 hover:border-white/50 hover:text-white transition-all duration-200 flex items-center justify-center gap-3 group flex-1"
          style={{ letterSpacing: "0.1em", fontFamily: "sans-serif" }}
        >
          <Phone
            size={16}
            className="text-white/60 group-hover:text-white transition-colors shrink-0"
          />
          {t.phoneCta}
        </a>
      </div>

      {/* Social links — wrap on small screens */}
      <div
        className="flex flex-wrap justify-center gap-x-6 gap-y-4 text-white/20 text-xs tracking-widest uppercase"
        style={{ fontFamily: "sans-serif" }}
      >
        <a
          href="https://github.com/stephenhelman"
          className="hover:text-[#f59e0b] transition-colors group flex items-center gap-2"
          target="_blank"
          rel="noreferrer"
        >
          <Github
            size={14}
            className="group-hover:text-[#f59e0b] transition-colors text-white/20 shrink-0"
          />
          <span className="flex items-center gap-1">
            {t.github}
            <ExternalLink
              size={10}
              className="group-hover:text-[#f59e0b] transition-colors text-white/20"
            />
          </span>
        </a>

        <a
          href="https://www.linkedin.com/in/stephen-helman-dev/"
          className="hover:text-[#f59e0b] transition-colors group flex items-center gap-2"
          target="_blank"
          rel="noreferrer"
        >
          <Linkedin
            size={14}
            className="group-hover:text-[#f59e0b] transition-colors text-white/20 shrink-0"
          />
          <span className="flex items-center gap-1">
            {t.linkedin}
            <ExternalLink
              size={10}
              className="group-hover:text-[#f59e0b] transition-colors text-white/20"
            />
          </span>
        </a>

        <Link
          to="/"
          className="hover:text-[#f59e0b] transition-colors text-center"
        >
          Operation Profit LLC
        </Link>
      </div>
    </section>
  );
}
